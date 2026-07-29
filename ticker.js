const TICKER_EVENTS = [
  // FEAR-ACU events (~50%)
  { text: "FEAR-ACU Delta-01 responds to elevated anomaly reading near I-35 corridor", type: "fearacu" },
  { text: "Commander Wolf addresses unit at Texas Division monthly readiness briefing", type: "fearacu" },
  { text: "Unknown aerial signal detected over West Texas — FEAR-ACU monitoring", type: "fearacu" },
  { text: "FEAR-ACU secures perimeter after unregistered frequency near Austin industrial zone", type: "fearacu" },
  { text: "Joint field exercise with local law enforcement scheduled for next week", type: "fearacu" },
  { text: "Unit patch update issued for 7th anniversary activation", type: "fearacu" },
  { text: "FEAR-ACU public liaison office opens in Houston — limited hours", type: "fearacu" },
  { text: "Communication blackout reported — FEAR-ACU comms offline for 90 minutes", type: "fearacu" },
  { text: "Three new operatives graduate from FEAR-ACU selection course", type: "fearacu" },
  { text: "Anonymous tip leads FEAR-ACU to abandoned facility outside San Antonio", type: "fearacu" },
  { text: "New containment protocols issued to all field operatives — effective immediately", type: "fearacu" },
  { text: "FEAR-ACU denies involvement in Dallas-area incident — no further comment", type: "fearacu" },
  { text: "Thermal imaging Kit deployed in central Texas — reason unspecified", type: "fearacu" },
  { text: "FEAR-ACU MCV-ACU spotted near Round Rock — no official statement", type: "fearacu" },

  // Regular Police / Fire / EMS events (~50%)
  { text: "Austin Fire Department responds to structure fire on East 5th — no injuries", type: "emergency" },
  { text: "APD reports pursuit on I-35 — suspect in custody, no injuries reported", type: "emergency" },
  { text: "Traffic alert: Highway 183 blocked due to multi-vehicle collision near Metric", type: "emergency" },
  { text: "METRO Express bus incident causes delays downtown — expect reroutes", type: "emergency" },
  { text: "Austin-Travis County EMS dispatched to commercial area on Riverside", type: "emergency" },
  { text: "Police presence at local high school — precautionary measure only", type: "emergency" },
  { text: "Fire crews contain brush fire near Barton Creek — acreage unknown", type: "emergency" },
  { text: "SWAT team serves warrant in north Austin — subject taken into custody", type: "emergency" },
  { text: "Traffic stop leads to drug bust on MoPac — one arrest", type: "emergency" },
  { text: "Hazmat team responds to chemical spill at Austin industrial site", type: "emergency" },
  { text: "911 outage reported in southeast Travis County — alternate number issued", type: "emergency" },
  { text: "Boil water notice lifted for central Austin neighborhoods", type: "emergency" },
  { text: "FD responds to gas leak near UT campus — area evacuated as precaution", type: "emergency" },
  { text: "APD foot pursuit in downtown — officers searching for fugitive on foot", type: "emergency" },
];

(function () {
  const el = document.getElementById('breaking-text');
  if (!el) return;
  const DOT = document.getElementById('ticker-dot');
  let last = -1;
  let timer;

  function pick() {
    let i;
    do { i = Math.floor(Math.random() * TICKER_EVENTS.length); } while (i === last && TICKER_EVENTS.length > 1);
    last = i;
    const ev = TICKER_EVENTS[i];

    // Fade out
    el.style.opacity = '0';
    if (DOT) DOT.style.background = '#555';

    setTimeout(() => {
      const prefix = ev.type === 'fearacu' ? '[ FEAR-ACU ] ' : '[ DISPATCH ] ';
      el.textContent = prefix + ev.text;
      el.style.opacity = '1';
      if (DOT) DOT.style.background = ev.type === 'fearacu' ? '#ff0000' : '#ffaa00';
    }, 400);
  }

  // Kick off
  pick();
  timer = setInterval(pick, 5000);
})();
