/* Policy Preferences Lab — research catalogue.
   Renders working papers and publications from LAB (js/data.js). */

(function () {
  "use strict";

  function esc(str) {
    return String(str).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  function ctags(s) {
    const tags = (s.countries || []).map(function (iso) {
      const name = LAB.countryNames[iso] || iso;
      return '<a class="ctag" href="index.html?c=' + iso + '#map" title="See all work in ' +
        esc(name) + '">' + esc(name) + "</a>";
    });
    if (s.status === "working-paper") tags.push('<span class="stag">Working paper</span>');
    if (s.status === "in-progress") tags.push('<span class="stag">In progress</span>');
    return tags.length ? '<div class="pub-tags">' + tags.join("") + "</div>" : "";
  }

  function item(s) {
    const title = s.url
      ? '<a href="' + esc(s.url) + '">' + esc(s.title) + "</a>"
      : esc(s.title);
    return (
      "<li>" +
      '<div class="pub-title">' + title + "</div>" +
      '<div class="pub-authors">' + esc(s.authors) + "</div>" +
      '<div class="pub-outlet"><em>' + esc(s.outlet) + "</em> · " + s.year + "</div>" +
      ctags(s) +
      "</li>"
    );
  }

  /* working papers & work in progress */
  const wps = LAB.studies
    .filter(function (s) { return s.status !== "publication"; })
    .sort(function (a, b) { return b.year - a.year || a.title.localeCompare(b.title); });
  const wpEl = document.getElementById("wplist");
  if (wpEl) wpEl.innerHTML = wps.map(item).join("");

  /* publications grouped by year */
  const pubs = LAB.studies
    .filter(function (s) { return s.status === "publication"; })
    .sort(function (a, b) { return b.year - a.year || a.title.localeCompare(b.title); });
  const pubEl = document.getElementById("publist");
  if (pubEl) {
    let html = "", year = null;
    pubs.forEach(function (s) {
      if (s.year !== year) {
        if (year !== null) html += "</ul>";
        year = s.year;
        html += '<div class="yearlabel">' + year + '</div><ul class="publist">';
      }
      html += item(s);
    });
    if (pubs.length) html += "</ul>";
    pubEl.innerHTML = html;
  }

  /* counts in the lede */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    const k = el.getAttribute("data-count");
    el.textContent = k === "wp" ? wps.length : pubs.length;
  });
})();
