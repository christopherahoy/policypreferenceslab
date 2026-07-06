/* ============================================================
   POLICY PREFERENCES LAB — theme "ATLAS DELUXE"
   Evolved field-atlas identity: paper, petrol, ochre — with a
   contour-line hero, glowing map, and stronger presence.
   ============================================================ */

:root{
  --paper:#f7f4ec;
  --paper2:#efeadd;
  --ink:#122730;
  --petrol:#142a33;
  --petrol2:#0e2028;
  --mut:#54666f;
  --faint:#8a978f;
  --line:#ded7c6;
  --ochre:#d98e04;
  --ochre-h:#f0a81c;
  --teal:#16707f;
  --land:#22404c;
  --landline:#0e2028;
  --disp:"Fraunces",Georgia,serif;
  --body:"Public Sans",system-ui,sans-serif;
  --mono:"IBM Plex Mono",ui-monospace,monospace;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font:400 16px/1.65 var(--body);-webkit-font-smoothing:antialiased;overflow-x:hidden}
.wrap{max-width:1120px;margin:0 auto;padding:0 28px;position:relative;z-index:1}
a{color:var(--teal);text-decoration:none}
a:hover{color:var(--ochre)}
::selection{background:rgba(217,142,4,.3)}

/* ---------------- topbar ---------------- */
.topbar{position:sticky;top:0;z-index:50;background:rgba(247,244,236,.85);
  backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.topbar .wrap{display:flex;align-items:center;justify-content:space-between;height:62px}
.wordmark{font:600 14.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ink)}
.wordmark .dot{color:var(--ochre)}
.mainnav a{color:var(--mut);font:500 13.5px/1 var(--body);margin-left:26px;position:relative;padding-bottom:4px}
.mainnav a::after{content:"";position:absolute;left:0;bottom:0;width:0;height:2px;background:var(--ochre);transition:width .18s ease}
.mainnav a:hover{color:var(--ink)}
.mainnav a:hover::after{width:100%}

/* ---------------- hero ---------------- */
.hero{padding:52px 0 46px;position:relative;overflow:hidden}
.hero::before{ /* contour lines */
  content:"";position:absolute;inset:-40px;pointer-events:none;opacity:.5;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='420' viewBox='0 0 560 420'%3E%3Cg fill='none' stroke='%23d98e04' stroke-opacity='.16' stroke-width='1'%3E%3Cpath d='M-20 330 C90 260 160 340 280 300 S470 200 590 260'/%3E%3Cpath d='M-20 360 C90 290 170 370 290 330 S480 230 600 290'/%3E%3Cpath d='M-20 390 C90 320 180 400 300 360 S490 260 610 320'/%3E%3Cpath d='M-20 60 C80 120 200 30 320 70 S500 160 600 90'/%3E%3Cpath d='M-20 90 C80 150 210 60 330 100 S510 190 610 120'/%3E%3Cpath d='M-20 120 C80 180 220 90 340 130 S520 220 620 150'/%3E%3C/g%3E%3C/svg%3E");
  background-size:560px 420px;
  mask-image:radial-gradient(90% 90% at 50% 40%,#000 30%,transparent 100%);
}
.eyebrow{font:500 11px/1 var(--mono);letter-spacing:.24em;text-transform:uppercase;color:var(--teal);
  display:flex;align-items:center;gap:10px}
.eyebrow::before{content:"";width:22px;height:2px;background:var(--ochre)}
.hero h1{font:600 clamp(46px,6.6vw,84px)/1.04 var(--disp);letter-spacing:-.01em;margin:0 0 26px;max-width:18ch}
.hero h1 em{font-style:italic;color:var(--ochre)}
.lede{font-size:18px;color:var(--mut);max-width:60ch;margin:0 0 46px}
.ctarow{display:flex;gap:14px;flex-wrap:wrap;margin:0 0 52px}
.btn{display:inline-block;padding:14px 24px;border-radius:8px;font:600 14px/1 var(--body);letter-spacing:.01em;
  transition:transform .15s ease,box-shadow .15s ease}
.btn.primary{background:var(--petrol);color:var(--paper)}
.btn.primary:hover{background:var(--petrol2);color:var(--paper);transform:translateY(-2px);
  box-shadow:0 10px 24px rgba(20,42,51,.25)}
.btn.ghost{border:1.5px solid var(--petrol);color:var(--petrol)}
.btn.ghost:hover{background:rgba(20,42,51,.06);color:var(--petrol);transform:translateY(-2px)}
.statsrow{display:flex;gap:52px;flex-wrap:wrap;border-top:1px solid var(--line);padding-top:26px}
.stat{position:relative;padding-top:4px}
.stat::before{content:"";position:absolute;top:-27px;left:0;width:34px;height:3px;background:var(--ochre)}
.stat .num{font:600 48px/1 var(--disp);letter-spacing:-.01em;color:var(--petrol)}
.stat .lbl{font:500 10.5px/1 var(--mono);letter-spacing:.22em;text-transform:uppercase;color:var(--faint);margin-top:10px}

/* ---------------- news ---------------- */
.newsband{background:var(--petrol);color:#e8e4d8;padding:26px 0}
.newslist{list-style:none;margin:0;padding:0;display:grid;gap:0}
.newslist li{display:flex;gap:18px;align-items:baseline;padding:10px 0;border-bottom:1px solid rgba(232,228,216,.12)}
.newslist li:last-child{border-bottom:none}
.n-date{font:600 12px/1 var(--mono);color:var(--ochre-h);letter-spacing:.1em;flex:0 0 auto}
.newslist a{color:#e8e4d8;border-bottom:1px solid rgba(232,228,216,.3)}
.newslist a:hover{color:var(--ochre-h);border-color:var(--ochre-h)}

/* ---------------- map band ---------------- */
.mapband{background:var(--petrol2);color:#e8e4d8;padding:96px 0 84px;position:relative;overflow:hidden}
.mapband::before{ /* graticule */
  content:"";position:absolute;inset:0;pointer-events:none;opacity:.5;
  background:
    linear-gradient(rgba(232,228,216,.045) 1px,transparent 1px),
    linear-gradient(90deg,rgba(232,228,216,.045) 1px,transparent 1px);
  background-size:72px 72px;
  mask-image:radial-gradient(1100px 640px at 45% 42%,#000 30%,transparent 100%);
}
.mapband .eyebrow{color:var(--ochre-h)}
.mapband h2{font:600 clamp(32px,4vw,50px)/1.08 var(--disp);letter-spacing:-.01em;margin:16px 0 14px;color:#f4f1e7}
.mapband .sub{color:#a9b4ae;max-width:64ch;margin:0 0 36px}
.maplayout{display:grid;grid-template-columns:minmax(0,1.62fr) minmax(300px,1fr);gap:26px;align-items:start}
.mapframe{position:relative;border-radius:14px;padding:6px;background:rgba(232,228,216,.04);
  border:1px solid rgba(232,228,216,.12)}
#worldmap{width:100%;height:auto;display:block}
#worldmap .c{fill:var(--land);stroke:var(--landline);stroke-width:.5;transition:fill .15s ease}
#worldmap .c.active{fill:var(--ochre);cursor:pointer;filter:drop-shadow(0 0 4px rgba(217,142,4,.55))}
#worldmap .c.active:hover{fill:var(--ochre-h);filter:drop-shadow(0 0 8px rgba(240,168,28,.8))}
#worldmap .c.selected,#worldmap .c.active.selected{fill:#f7f3e6;filter:drop-shadow(0 0 9px rgba(247,243,230,.85))}
#worldmap .micro{fill:var(--ochre);stroke:var(--petrol2);stroke-width:1.5;cursor:pointer;
  filter:drop-shadow(0 0 4px rgba(217,142,4,.7))}
#worldmap .micro:hover{fill:var(--ochre-h)}
#worldmap .micro.selected{fill:#f7f3e6;filter:drop-shadow(0 0 8px rgba(247,243,230,.9))}
#worldmap .c:focus-visible,#worldmap .micro:focus-visible{outline:2px solid var(--ochre-h);outline-offset:2px}

.maptip{position:absolute;pointer-events:none;opacity:0;transition:opacity .12s;z-index:5;
  background:rgba(10,22,28,.94);border:1px solid rgba(217,142,4,.45);border-radius:9px;
  padding:9px 12px;max-width:230px;box-shadow:0 8px 28px rgba(0,0,0,.45)}
.maptip.show{opacity:1}
.t-name{font:600 14.5px/1.2 var(--disp);color:#f4f1e7}
.t-n{font:500 9.5px/1.7 var(--mono);letter-spacing:.16em;color:var(--ochre-h)}

.maplegend{display:flex;gap:20px;margin-top:16px;flex-wrap:wrap}
.key{font:500 10px/1 var(--mono);letter-spacing:.18em;text-transform:uppercase;color:#8fa39b;
  display:flex;align-items:center;gap:8px;border:1px solid rgba(232,228,216,.14);border-radius:99px;padding:7px 13px}
.sw{width:10px;height:10px;border-radius:3px;display:inline-block}
.s-active{background:var(--ochre);box-shadow:0 0 6px rgba(217,142,4,.8)}
.s-sel{background:#f7f3e6;box-shadow:0 0 6px rgba(247,243,230,.8)}
.s-land{background:var(--land)}

.mappanel{background:rgba(232,228,216,.05);border:1px solid rgba(232,228,216,.13);border-radius:14px;
  padding:26px 26px 20px;min-height:420px;position:relative;overflow:hidden}
.mappanel::before{content:"";position:absolute;inset:0 0 auto 0;height:3px;background:linear-gradient(90deg,var(--ochre),var(--ochre-h))}
.p-code{font:600 11px/1 var(--mono);letter-spacing:.26em;color:var(--ochre-h);text-transform:uppercase}
.mappanel h3{font:600 26px/1.15 var(--disp);margin:10px 0 4px;color:#f4f1e7}
.p-count{font:500 11px/1 var(--mono);letter-spacing:.12em;color:#8fa39b;text-transform:uppercase}
.p-empty{color:#a9b4ae;font-size:14.5px;margin-top:18px}
.p-empty .hint{display:block;margin-top:14px;color:#7d8f87;font-size:12.5px}
.p-list{list-style:none;margin:18px 0 0;padding:0}
.p-list li{padding:13px 0;border-top:1px solid rgba(232,228,216,.12)}
.p-list a{color:#eee9db;font-weight:550;font-size:14.5px;line-height:1.4;display:block}
.p-list a:hover{color:var(--ochre-h)}
.p-title-plain{color:#eee9db;font-weight:550;font-size:14.5px}
.p-list .meta{display:block;font-size:12px;color:#8fa39b;margin-top:5px;font-style:italic}
.pill{font:600 9px/1 var(--mono);letter-spacing:.12em;border-radius:99px;padding:3px 8px;margin-left:8px;vertical-align:1px;font-style:normal}
.pill.wp{background:rgba(217,142,4,.18);color:var(--ochre-h);border:1px solid rgba(217,142,4,.4)}
.pill.ip{background:rgba(22,112,127,.25);color:#7fc6d1;border:1px solid rgba(127,198,209,.4)}

.chips{display:flex;flex-wrap:wrap;gap:9px;margin-top:30px}
.chip{font:500 12px/1 var(--mono);letter-spacing:.04em;color:#c4cec7;cursor:pointer;
  background:transparent;border:1px solid rgba(232,228,216,.2);border-radius:99px;padding:8px 14px;transition:all .15s ease}
.chip .iso{color:#7d8f87;margin-right:7px;font-size:10px;letter-spacing:.14em}
.chip:hover{border-color:var(--ochre);color:#f4f1e7}
.chip.on{background:var(--ochre);border-color:var(--ochre);color:#14262e;font-weight:600}
.chip.on .iso{color:rgba(20,38,46,.65)}

/* ---------------- sections & cards ---------------- */
.section{padding:92px 0}
.sectionhead{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:34px}
.section h2{font:600 clamp(32px,4vw,50px)/1.08 var(--disp);letter-spacing:-.01em;margin:16px 0 0}
.viewall{font:500 12.5px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--teal)}
.viewall:hover{color:var(--ochre)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card{background:#fff;border:1px solid var(--line);border-top:3px solid var(--ochre);border-radius:12px;
  padding:24px;display:flex;flex-direction:column;gap:10px;
  transition:transform .18s ease,box-shadow .18s ease}
.card:hover{transform:translateY(-5px);box-shadow:0 16px 34px rgba(20,42,51,.13)}
.c-theme{font:600 10px/1 var(--mono);letter-spacing:.2em;text-transform:uppercase;color:var(--teal)}
.card h3{font:600 18.5px/1.32 var(--disp);margin:0}
.card h3 a{color:var(--ink)}
.card h3 a:hover{color:var(--teal)}
.c-authors{font-size:13px;color:var(--mut)}
.c-outlet{font-size:12.5px;color:var(--faint)}
.c-countries{font:500 10.5px/1.6 var(--mono);letter-spacing:.1em;color:var(--ochre);margin-top:auto;padding-top:8px}
.c-countries b{font-weight:500}
.themesrow{display:flex;flex-wrap:wrap;gap:9px;margin-top:30px}
.theme-tag{font:500 11.5px/1 var(--mono);letter-spacing:.05em;color:var(--mut);
  border:1px solid var(--line);border-radius:99px;padding:8px 15px;background:#fff}

/* ---------------- about ---------------- */
.aboutgrid{display:grid;grid-template-columns:1.5fr 1fr;gap:44px;align-items:start}
.about p{color:var(--mut);margin:0 0 18px}
.partners{font-size:13px;color:var(--faint);border-top:1px solid var(--line);padding-top:18px}
.personcard{background:#fff;border:1px solid var(--line);border-top:3px solid var(--ochre);border-radius:12px;padding:28px}
.p-role{font:600 10px/1 var(--mono);letter-spacing:.24em;text-transform:uppercase;color:var(--ochre)}
.personcard h3{font:600 25px/1.1 var(--disp);margin:12px 0 12px}
.personcard p{font-size:14px;color:var(--mut);margin:0 0 18px}
.p-links{display:flex;gap:16px;flex-wrap:wrap}
.p-links a{font:500 12.5px/1 var(--mono);letter-spacing:.04em;border-bottom:1px solid rgba(22,112,127,.35);padding-bottom:2px}

/* ---------------- footer ---------------- */
footer{background:var(--petrol);color:#e8e4d8;padding:84px 0 40px}
footer .eyebrow{color:var(--ochre-h)}
footer .eyebrow::before{background:var(--ochre-h)}
.footgrid{display:grid;grid-template-columns:1.5fr 1fr;gap:40px}
footer h2{font:600 clamp(34px,4.4vw,52px)/1.06 var(--disp);margin:16px 0 16px;color:#f4f1e7}
footer p{color:#a9b4ae}
footer a{color:#e8e4d8;border-bottom:1px solid rgba(232,228,216,.3)}
footer a:hover{color:var(--ochre-h);border-color:var(--ochre-h)}
footer .btn{background:var(--ochre);color:#14262e;border:none;border-radius:8px;margin-top:10px}
footer .btn:hover{background:var(--ochre-h);color:#14262e;transform:translateY(-2px);
  box-shadow:0 10px 24px rgba(0,0,0,.3)}
.footnote{display:flex;justify-content:space-between;border-top:1px solid rgba(232,228,216,.15);
  margin-top:56px;padding-top:22px;font:400 12px/1 var(--mono);color:#7d8f87;letter-spacing:.06em}

/* ---------------- research page ---------------- */
.pagehead{padding:92px 0 30px}
.pagehead h1{font:600 clamp(40px,5.4vw,64px)/1.06 var(--disp);letter-spacing:-.015em;margin:20px 0 16px;max-width:22ch}
.pagehead .lede{margin-bottom:0}
.pubgroup{padding:46px 0}
.pubgroup h2{font:600 clamp(28px,3.4vw,40px)/1.1 var(--disp);margin:14px 0 26px}
.publist{list-style:none;margin:0;padding:0}
.publist li{padding:22px 0;border-top:1px solid var(--line)}
.pub-title{font:600 17.5px/1.35 var(--disp)}
.pub-title a{color:var(--ink)}
.pub-title a:hover{color:var(--teal)}
.pub-authors{font-size:13.5px;color:var(--mut);margin-top:5px}
.pub-outlet{font-size:13px;color:var(--faint);margin-top:3px}
.pub-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:11px}
.ctag{font:500 10.5px/1 var(--mono);letter-spacing:.06em;color:var(--teal);
  border:1px solid rgba(22,112,127,.35);border-radius:99px;padding:5px 11px;background:#fff}
.ctag:hover{background:var(--teal);color:#fff}
.stag{font:600 9.5px/1 var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--mut);
  border:1px solid var(--line);border-radius:99px;padding:5px 11px;background:var(--paper2)}
.yearlabel{font:600 14px/1 var(--mono);letter-spacing:.22em;color:var(--ochre);margin:34px 0 6px}

/* ---------------- reveal ---------------- */
[data-rv]{opacity:0;transform:translateY(16px);transition:opacity .55s ease,transform .55s ease}
[data-rv].in{opacity:1;transform:none}

@media (prefers-reduced-motion: reduce){
  [data-rv]{opacity:1;transform:none;transition:none}
  html{scroll-behavior:auto}
}

/* ---------------- responsive ---------------- */
@media (max-width:940px){
  .maplayout{grid-template-columns:1fr}
  .mappanel{min-height:0}
  .cards{grid-template-columns:1fr 1fr}
  .aboutgrid,.footgrid{grid-template-columns:1fr}
}
@media (max-width:620px){
  .hero{padding:40px 0 32px}
  .statsrow{gap:30px}
  .stat .num{font-size:38px}
  .cards{grid-template-columns:1fr}
  .mainnav a{margin-left:14px;font-size:12.5px}
  .newslist li{flex-direction:column;gap:6px}
}

/* ---------------- theme filter & counting note (v2) ---------------- */
.themefilter{display:flex;flex-wrap:wrap;gap:9px;margin:6px 0 26px}
.tpill{font:500 12px/1 var(--mono);letter-spacing:.04em;color:#c4cec7;cursor:pointer;
  background:rgba(232,228,216,.05);border:1px solid rgba(232,228,216,.2);border-radius:99px;
  padding:9px 16px;transition:all .15s ease}
.tpill:hover{border-color:var(--ochre);color:#f4f1e7}
.tpill.on{background:var(--ochre);border-color:var(--ochre);color:#14262e;font-weight:600}
.chip.dim{opacity:.32;pointer-events:none}
#worldmap .micro.off{display:none}
.stat.counting{align-self:end}
.cnote{font:italic 600 21px/1 var(--disp);color:var(--ochre);padding-bottom:8px}
#themesrow .theme-tag{cursor:pointer;transition:all .15s ease}
#themesrow .theme-tag:hover{border-color:var(--ochre);color:var(--ink)}

/* ---------------- nav CTA + wrapping (v4) ---------------- */
.topbar .wrap{flex-wrap:wrap;height:auto;min-height:62px;padding-top:10px;padding-bottom:10px;row-gap:6px}
.mainnav{display:flex;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:6px 22px}
.mainnav a{margin-left:0}
.mainnav a.navbtn{background:var(--petrol);color:var(--paper);border-radius:8px;
  padding:9px 15px;transition:background .15s ease}
.mainnav a.navbtn::after{display:none}
.mainnav a.navbtn:hover{background:var(--petrol2);color:var(--paper)}
@media (max-width:1080px){
  .mainnav{gap:6px 16px}
  .mainnav a{font-size:12.5px}
}
@media (max-width:760px){
  .mainnav{justify-content:flex-start}
  .mainnav a.navbtn{padding:8px 13px}
}

/* ---------------- full-width map, panel on demand (v5) ---------------- */
.maplayout{display:block}
.mappanel{display:none;margin-top:24px;min-height:0}
.mappanel.show{display:block}
.mappanel .p-list{columns:2;column-gap:40px}
.mappanel .p-list li{break-inside:avoid}
@media (max-width:940px){
  .mappanel .p-list{columns:1}
}
