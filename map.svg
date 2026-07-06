#!/usr/bin/env python3
"""
Build the inline world map SVG for the Policy Preferences Lab site.

Reads countries.geo.json (Natural Earth 110m via johan/world.geo.json),
projects with the Robinson projection, simplifies, and writes map.svg.
Each country becomes <path class="c" data-iso="XXX" data-name="...">.
Antarctica is dropped. Rings that cross the antimeridian are split so
they don't draw streaks across the map.

Usage: python3 build_map.py            (from the scripts/ directory)
Requires: pip install pyproj
"""
import json
import math
from pyproj import Transformer

SRC = "countries.geo.json"
OUT = "map.svg"
VIEW_W = 1000.0          # target viewBox width
SIMPLIFY_PX = 0.7        # drop points closer than this (in final px units)
PRECISION = 1            # decimals in path data

tf = Transformer.from_crs("EPSG:4326", "ESRI:54030", always_xy=True)  # Robinson


def project(lon, lat):
    x, y = tf.transform(lon, lat)
    return x, -y  # flip y for SVG


def split_antimeridian(ring):
    """Split a ring into segments wherever consecutive lons jump > 180."""
    segs, cur = [], [ring[0]]
    for prev, pt in zip(ring, ring[1:]):
        if abs(pt[0] - prev[0]) > 180:
            if len(cur) > 1:
                segs.append(cur)
            cur = [pt]
        else:
            cur.append(pt)
    if len(cur) > 1:
        segs.append(cur)
    return segs


def main():
    with open(SRC) as f:
        gj = json.load(f)

    features = []
    for feat in gj["features"]:
        iso = feat.get("id") or feat["properties"].get("iso_a3", "")
        name = feat["properties"].get("name", iso)
        if iso == "ATA":  # drop Antarctica
            continue
        geom = feat["geometry"]
        polys = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
        rings = []
        for poly in polys:
            for ring in poly:  # outer + holes; holes are rare at 110m, treat same
                rings.extend(split_antimeridian(ring))
        features.append((iso, name, rings))

    # First pass: project everything to find global bounds
    projected = []
    minx = miny = math.inf
    maxx = maxy = -math.inf
    for iso, name, rings in features:
        prings = []
        for ring in rings:
            pr = [project(lon, lat) for lon, lat in ring]
            prings.append(pr)
            for x, y in pr:
                minx, maxx = min(minx, x), max(maxx, x)
                miny, maxy = min(miny, y), max(maxy, y)
        projected.append((iso, name, prings))

    scale = VIEW_W / (maxx - minx)
    view_h = (maxy - miny) * scale

    def to_px(pt):
        return ((pt[0] - minx) * scale, (pt[1] - miny) * scale)

    paths = []
    centroids = {}   # iso -> (cx, cy, approx_size) for marker placement
    for iso, name, prings in projected:
        d_parts = []
        big_area = 0.0
        best_c = None
        for pr in prings:
            px = [to_px(p) for p in pr]
            # radial-distance simplification
            simp = [px[0]]
            for p in px[1:]:
                if (p[0] - simp[-1][0]) ** 2 + (p[1] - simp[-1][1]) ** 2 >= SIMPLIFY_PX ** 2:
                    simp.append(p)
            if len(simp) < 3:
                continue
            fmt = f"%.{PRECISION}f"
            d = "M" + " ".join(
                (fmt % x).rstrip("0").rstrip(".") + "," + (fmt % y).rstrip("0").rstrip(".")
                for x, y in simp
            ) + "Z"
            d_parts.append(d)
            # ring bbox area to find the dominant ring for the centroid
            xs = [p[0] for p in simp]
            ys = [p[1] for p in simp]
            a = (max(xs) - min(xs)) * (max(ys) - min(ys))
            if a > big_area:
                big_area = a
                best_c = (sum(xs) / len(xs), sum(ys) / len(ys))
        if not d_parts:
            continue
        safe_name = name.replace("&", "&amp;").replace('"', "&quot;")
        paths.append(
            f'<path class="c" data-iso="{iso}" data-name="{safe_name}" d="{"".join(d_parts)}"/>'
        )
        if best_c:
            centroids[iso] = (round(best_c[0], 1), round(best_c[1], 1), round(big_area, 1))

    svg = (
        f'<svg id="worldmap" viewBox="0 0 {VIEW_W:.0f} {view_h:.0f}" '
        f'xmlns="http://www.w3.org/2000/svg" role="img" '
        f'aria-label="World map of countries where the lab has run studies">\n'
        f'<g id="countries">{"".join(paths)}</g>\n'
        f'<g id="micromarkers"></g>\n'
        f"</svg>\n"
    )
    with open(OUT, "w") as f:
        f.write(svg)

    with open("centroids.json", "w") as f:
        json.dump(centroids, f)

    print(f"countries: {len(paths)}  viewBox: 1000 x {view_h:.0f}  size: {len(svg)/1024:.0f} KB")


if __name__ == "__main__":
    main()
