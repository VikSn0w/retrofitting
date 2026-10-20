/* Retrofitting: era switch, tabs, copy buttons, clock, draggable windows. No dependencies. */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var radios = document.querySelectorAll('input[name="era"]');
  var eraLabel = document.querySelector("[data-era-label]");
  var tabs = document.querySelectorAll(".tab");
  var panels = { osx: document.getElementById("panel-osx"), os9: document.getElementById("panel-os9") };

  /* ---- tabs ---- */
  function selectTab(name, focus) {
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].getAttribute("data-tab") === name;
      tabs[i].setAttribute("aria-selected", on ? "true" : "false");
      tabs[i].tabIndex = on ? 0 : -1;
      if (on && focus) tabs[i].focus();
    }
    panels.osx.hidden = name !== "osx";
    panels.os9.hidden = name !== "os9";
  }
  for (var t = 0; t < tabs.length; t++) {
    tabs[t].addEventListener("click", function () { selectTab(this.getAttribute("data-tab"), false); });
    tabs[t].addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        selectTab(this.getAttribute("data-tab") === "osx" ? "os9" : "osx", true);
      }
    });
  }

  /* ---- era ---- */
  function paintEra(era) {
    root.setAttribute("data-era", era);
    if (eraLabel) eraLabel.textContent = era === "classic" ? "Classic" : "Aqua";
    for (var i = 0; i < radios.length; i++) radios[i].checked = radios[i].value === era;
    selectTab(era === "classic" ? "os9" : "osx", false);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", era === "classic" ? "#ffffff" : "#ececec");
  }
  function setEra(era) {
    if (root.getAttribute("data-era") === era) return;
    try { localStorage.setItem("retrofitting-era", era); } catch (e) {}
    if (document.startViewTransition && !reduceMotion) document.startViewTransition(function () { paintEra(era); });
    else paintEra(era);
  }
  for (var r = 0; r < radios.length; r++) {
    radios[r].addEventListener("change", function () { if (this.checked) setEra(this.value); });
  }
  paintEra(root.getAttribute("data-era") === "classic" ? "classic" : "aqua");

  /* ---- copy buttons ---- */
  var copyButtons = document.querySelectorAll(".copy");
  for (var c = 0; c < copyButtons.length; c++) {
    copyButtons[c].addEventListener("click", function () {
      var btn = this, text = btn.getAttribute("data-copy");
      function done(ok) {
        btn.textContent = ok ? "Copied" : "Press Ctrl/Cmd+C";
        setTimeout(function () { btn.textContent = "Copy"; }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        var range = document.createRange();
        range.selectNodeContents(btn.previousElementSibling);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        done(false);
      }
    });
  }

  /* ---- menu bar clock ---- */
  var clock = document.getElementById("clock");
  function tick() {
    if (!clock) return;
    try { clock.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); } catch (e) {}
  }
  tick();
  setInterval(tick, 30000);

  /* ---- draggable windows on the hero desktop (wide screens, mouse or pen) ---- */
  var wide = window.matchMedia("(min-width: 960px) and (pointer: fine)");
  var z = 10;
  var wins = document.querySelectorAll(".desktop [data-draggable]");
  Array.prototype.forEach.call(wins, function (win) {
    var bar = win.querySelector(".titlebar");
    var dx = 0, dy = 0, sx = 0, sy = 0, ox = 0, oy = 0, active = false;

    win.addEventListener("pointerdown", function () { if (wide.matches) win.style.zIndex = ++z; });

    bar.addEventListener("pointerdown", function (e) {
      if (!wide.matches || e.button !== 0) return;
      active = true;
      sx = e.clientX; sy = e.clientY; ox = dx; oy = dy;
      win.classList.add("is-dragging");
      bar.setPointerCapture(e.pointerId);
      e.preventDefault();
    });
    bar.addEventListener("pointermove", function (e) {
      if (!active) return;
      dx = ox + (e.clientX - sx);
      dy = oy + (e.clientY - sy);
      win.style.transform = "translate(" + dx + "px," + dy + "px)";
    });
    function stop() { active = false; win.classList.remove("is-dragging"); }
    bar.addEventListener("pointerup", stop);
    bar.addEventListener("pointercancel", stop);
  });
  wide.addEventListener && wide.addEventListener("change", function () {
    if (wide.matches) return;
    Array.prototype.forEach.call(wins, function (w) { w.style.transform = ""; w.style.zIndex = ""; });
  });
})();
