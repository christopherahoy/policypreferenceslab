/* Policy Preferences Lab — homepage interactivity.
   Everything renders from LAB (js/data.js). No edits needed here. */

(function () {
  "use strict";

  /* ---------- derive country → studies and theme → studies ---------- */
  const byCountry = {};
  const byTheme = {};
  const themeCountries = {};
  LAB.studies.forEach(function (s) {
    (s.countries || []).forEach(function (iso) {
      (byCountry[iso] = byCountry[iso] || []).push(s);
    });
    (s.themes || []).forEach(function (t) {
      (byTheme[t] = byTheme[t] || []).push(s);
      themeCountries[t] = themeCountries[t] || {};
      (s.countries || []).forEach(function (iso) { themeCountries[t][iso] = true; });
    });
  });
  Object.values(byCountry).concat(Object.values(byTheme)).forEach(function (list) {
    list.sort(function (a, b) { return b.year - a.year || a.title.localeCompare(b.title); });
  });
  const activeISOs = Object.keys(byCountry);

  function countryName(iso) {
    if (LAB.countryNames[iso]) return LAB.countryNames[iso];
    const p = document.querySelector('#worldmap .c[data-iso="' + iso + '"]');
    return p ? p.getAttribute("data-name") : iso;
  }

  function esc(str) {
    return String(str).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  /* ---------- hero stats (LAB.stats labels win over computed counts) ---------- */
  const ov = LAB.stats || {};
  const stats = {
    studies: ov.studies || LAB.studies.length,
    countries: ov.countries || activeISOs.length,
    respondents: ov.respondents || LAB.respondentsLabel
  };
  const noMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function countUp(el, finalText) {
    const m = String(finalText).match(/^([\d,]+)(.*)$/);
    if (!m || noMotion || !window.requestAnimationFrame) { el.textContent = finalText; return; }
    const target = parseInt(m[1].replace(/,/g, ""), 10);
    const suffix = m[2] || "";
    const t0 = performance.now(), dur = 900;
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  document.querySelectorAll("[data-stat]").forEach(function (el) {
    countUp(el, stats[el.getAttribute("data-stat")]);
  });

  /* ---------- news (only if the theme includes a news list) ---------- */
  const newsEl = document.getElementById("newslist");
  if (newsEl) {
    newsEl.innerHTML = LAB.news.map(function (n) {
      const body = n.url
        ? '<a href="' + esc(n.url) + '">' + esc(n.text) + "</a>"
        : esc(n.text);
      return '<li><span class="n-date">' + esc(n.date) + "</span><span>" + body + "</span></li>";
    }).join("");
  }

  /* ---------- featured research cards ---------- */
  const cardsEl = document.getElementById("featuredcards");
  if (cardsEl) {
    const featured = LAB.studies.filter(function (s) { return s.featured; })
      .sort(function (a, b) { return (a.featuredRank || 99) - (b.featuredRank || 99) || b.year - a.year; });
    cardsEl.innerHTML = featured.map(function (s) {
      const codes = (s.countries || []);
      const cnames = codes.map(function (c) { return (LAB.countryNames || {})[c] || c; });
      const cline = !codes.length
        ? '<div class="c-countries">Global analysis</div>'
        : codes.length > 4
          ? '<div class="c-countries" title="' + esc(cnames.join(", ")) + '"><b>' + codes.length + ' countries</b></div>'
          : '<div class="c-countries" title="' + esc(cnames.join(", ")) + '"><b>' + esc(cnames.join(" \u00b7 ")) + '</b></div>';
      const title = s.url
        ? '<a href="' + esc(s.url) + '">' + esc(s.title) + "</a>"
        : esc(s.title);
      return (
        '<article class="card">' +
        '<div class="c-theme">' + esc((s.themes || [])[0] || "Research") + "</div>" +
        (s.finding ? '<p class="c-find">' + esc(s.finding) + "</p>" : "") +
        '<h3 class="' + (s.finding ? "c-sub" : "") + '">' + title + "</h3>" +
                '<div class="c-outlet"><em>' + esc(s.outlet) + "</em> · " + s.year + "</div>" +
        cline +
        "</article>"
      );
    }).join("");
  }

  /* ---------- the map ---------- */
  const svg = document.getElementById("worldmap");
  const themesEl = document.getElementById("themesrow");
  if (!svg) {
    /* still render the themes strip on pages without a map */
    if (themesEl) {
      themesEl.innerHTML = LAB.themes.map(function (t) {
        return '<span class="theme-tag">' + esc(t) + "</span>";
      }).join("");
    }
    return;
  }
  const frame = svg.closest(".mapframe");
  const tip = document.getElementById("maptip");
  const panel = document.getElementById("mappanel");
  const chipsEl = document.getElementById("chips");
  const themeFilterEl = document.getElementById("themefilter");
  let selected = null;
  let selTheme = null;

  const MICRO_AREA = 60; // px² bbox threshold below which a marker dot is added

  activeISOs.forEach(function (iso) {
    const path = svg.querySelector('.c[data-iso="' + iso + '"]');
    if (!path) return;
    path.classList.add("active");
    path.setAttribute("tabindex", "0");
    path.setAttribute("role", "button");
    path.setAttribute("aria-label",
      countryName(iso) + ": " + byCountry[iso].length +
      (byCountry[iso].length === 1 ? " study" : " studies"));

    // marker dot for countries too small to click (uses baked centroids
    // because bounding boxes are unreliable for antimeridian countries)
    const c = (typeof MAP_CENTROIDS !== "undefined") && MAP_CENTROIDS[iso];
    if (c && c[2] < MICRO_AREA) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", c[0]);
      dot.setAttribute("cy", c[1]);
      dot.setAttribute("r", 6);
      dot.setAttribute("class", "micro");
      dot.setAttribute("data-iso", iso);
      dot.setAttribute("tabindex", "0");
      dot.setAttribute("role", "button");
      dot.setAttribute("aria-label", path.getAttribute("aria-label"));
      svg.getElementById("micromarkers").appendChild(dot);
    }
  });

  function inTheme(iso) {
    return !selTheme || (themeCountries[selTheme] && themeCountries[selTheme][iso]);
  }

  function tipShow(evt, iso) {
    const list = (byCountry[iso] || []).filter(function (s) {
      return !selTheme || (s.themes || []).indexOf(selTheme) !== -1;
    });
    const n = list.length;
    tip.innerHTML =
      '<span class="t-name">' + esc(countryName(iso)) + "</span><br>" +
      '<span class="t-n">' + n + (n === 1 ? " STUDY" : " STUDIES") +
      (selTheme ? " IN THEME" : "") + " — CLICK TO VIEW</span>";
    tip.classList.add("show");
    tipMove(evt);
  }
  function tipMove(evt) {
    const r = frame.getBoundingClientRect();
    let x = evt.clientX - r.left + 14;
    let y = evt.clientY - r.top + 14;
    if (x + tip.offsetWidth > r.width - 8) x = evt.clientX - r.left - tip.offsetWidth - 12;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }
  function tipHide() { tip.classList.remove("show"); }

  function studyItem(s, metaExtra) {
    const pill = s.status === "working-paper" ? '<span class="pill wp">WP</span>'
               : s.status === "in-progress" ? '<span class="pill ip">In progress</span>' : "";
    const t = s.url
      ? '<a href="' + esc(s.url) + '">' + esc(s.title) + "</a>"
      : '<span class="p-title-plain">' + esc(s.title) + "</span>";
    return "<li>" + t + '<span class="meta">' + esc(metaExtra || s.outlet) + " · " + s.year + pill + "</span></li>";
  }

  function renderPanel() {
    panel.classList.toggle("show", !!(selected || selTheme));
    if (selected) {
      const list = byCountry[selected].filter(function (s) {
        return !selTheme || (s.themes || []).indexOf(selTheme) !== -1;
      });
      panel.innerHTML =
        '<div class="p-code">' + selected + (selTheme ? " · " + esc(selTheme) : "") + "</div>" +
        "<h3>" + esc(countryName(selected)) + "</h3>" +
        '<div class="p-count">' + list.length + (list.length === 1 ? " study" : " studies") + "</div>" +
        '<ul class="p-list">' + list.map(function (s) { return studyItem(s); }).join("") + "</ul>";
      return;
    }
    if (selTheme) {
      const list = byTheme[selTheme] || [];
      const nC = Object.keys(themeCountries[selTheme] || {}).length;
      panel.innerHTML =
        '<div class="p-code">Theme</div>' +
        "<h3>" + esc(selTheme) + "</h3>" +
        '<div class="p-count">' + list.length + (list.length === 1 ? " study" : " studies") +
        " · " + nC + (nC === 1 ? " country" : " countries") + "</div>" +
        '<ul class="p-list">' + list.map(function (s) { return studyItem(s); }).join("") + "</ul>";
      return;
    }
    panel.innerHTML = "";
  }

  function refreshMap() {
    activeISOs.forEach(function (iso) {
      const ok = inTheme(iso);
      svg.querySelectorAll('[data-iso="' + iso + '"]').forEach(function (el) {
        if (el.classList.contains("micro")) {
          el.classList.toggle("off", !ok);
        } else {
          el.classList.toggle("active", !!ok);
          if (ok) { el.setAttribute("tabindex", "0"); } else { el.removeAttribute("tabindex"); }
        }
        if (!ok) el.classList.remove("selected");
      });
      if (chipsEl) {
        const chip = chipsEl.querySelector('.chip[data-iso="' + iso + '"]');
        if (chip) chip.classList.toggle("dim", !ok);
      }
    });
  }

  function select(iso) {
    if (iso && !inTheme(iso)) return;
    selected = iso;
    document.body.classList.toggle("has-map-selection", !!iso);
    svg.querySelectorAll(".selected").forEach(function (el) { el.classList.remove("selected"); });
    if (chipsEl) chipsEl.querySelectorAll(".chip.on").forEach(function (el) { el.classList.remove("on"); });
    if (iso) {
      svg.querySelectorAll('[data-iso="' + iso + '"]').forEach(function (el) {
        el.classList.add("selected");
      });
      if (chipsEl) {
        const chip = chipsEl.querySelector('.chip[data-iso="' + iso + '"]');
        if (chip) chip.classList.add("on");
      }
    }
    renderPanel();
  }

  function applyTheme(theme) {
    selTheme = theme || null;
    if (selected && !inTheme(selected)) selected = null;
    if (themeFilterEl) {
      themeFilterEl.querySelectorAll(".tpill").forEach(function (b) {
        b.classList.toggle("on", (b.getAttribute("data-theme") || null) === selTheme);
      });
    }
    refreshMap();
    select(selected); // re-sync selection classes + panel
  }

  svg.addEventListener("click", function (evt) {
    const el = evt.target.closest(".active, .micro");
    if (!el || el.classList.contains("off")) return;
    const iso = el.getAttribute("data-iso");
    select(selected === iso ? null : iso);
  });
  svg.addEventListener("keydown", function (evt) {
    if (evt.key !== "Enter" && evt.key !== " ") return;
    const el = evt.target.closest(".active, .micro");
    if (!el || el.classList.contains("off")) return;
    evt.preventDefault();
    const iso = el.getAttribute("data-iso");
    select(selected === iso ? null : iso);
  });
  svg.addEventListener("mousemove", function (evt) {
    const el = evt.target.closest(".active, .micro");
    if (el && !el.classList.contains("off")) tipShow(evt, el.getAttribute("data-iso")); else tipHide();
  });
  svg.addEventListener("mouseleave", tipHide);

  /* ---------- theme filter pills ---------- */
  if (themeFilterEl) {
    themeFilterEl.innerHTML =
      '<button class="tpill on" data-theme="">All themes</button>' +
      LAB.themes.map(function (t) {
        return '<button class="tpill" data-theme="' + esc(t) + '">' + esc(t) + "</button>";
      }).join("");
    themeFilterEl.addEventListener("click", function (evt) {
      const b = evt.target.closest(".tpill");
      if (!b) return;
      const t = b.getAttribute("data-theme") || null;
      applyTheme(t === selTheme ? null : t);
    });
  }

  /* ---------- chips (optional element) ---------- */
  if (chipsEl) {
  chipsEl.innerHTML = activeISOs
    .slice()
    .sort(function (a, b) { return countryName(a).localeCompare(countryName(b)); })
    .map(function (iso) {
      return '<button class="chip" data-iso="' + iso + '">' +
        '<span class="iso">' + iso + "</span>" + esc(countryName(iso)) + "</button>";
    }).join("");
  chipsEl.addEventListener("click", function (evt) {
    const chip = evt.target.closest(".chip");
    if (!chip || chip.classList.contains("dim")) return;
    const iso = chip.getAttribute("data-iso");
    select(selected === iso ? null : iso);
  });
  }

  /* ---------- themes strip → jumps to the map with the theme applied ---------- */
  if (themesEl) {
    themesEl.innerHTML = LAB.themes.map(function (t) {
      return '<button class="theme-tag" data-theme="' + esc(t) + '">' + esc(t) + "</button>";
    }).join("");
    themesEl.addEventListener("click", function (evt) {
      const b = evt.target.closest(".theme-tag");
      if (!b) return;
      applyTheme(b.getAttribute("data-theme"));
      document.getElementById("map").scrollIntoView({ behavior: noMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- country marquee (only if the theme includes one) ---------- */
  const mq = document.getElementById("marquee");
  if (mq) {
    const names = activeISOs.map(countryName).sort();
    const run = names.join('<span class="mq-sep">\u2726</span>');
    mq.innerHTML = '<div class="mq-track"><span class="mq-run">' + run +
      '<span class="mq-sep">\u2726</span></span><span class="mq-run" aria-hidden="true">' + run +
      '<span class="mq-sep">\u2726</span></span></div>';
  }

  /* ---------- scroll reveal ---------- */
  const rvEls = document.querySelectorAll("[data-rv]");
  if (rvEls.length) {
    if (noMotion || !("IntersectionObserver" in window)) {
      rvEls.forEach(function (el) { el.classList.add("in"); });
    } else {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      rvEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- deep links: ?c=PNG#map and ?t=Tax%20%26%20compliance#map ---------- */
  const params = new URLSearchParams(window.location.search);
  const preT = params.get("t");
  const preC = params.get("c");
  renderPanel();
  if (preT && byTheme[preT]) applyTheme(preT);
  if (preC && byCountry[preC.toUpperCase()]) select(preC.toUpperCase());
})();
