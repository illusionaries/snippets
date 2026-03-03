// ==UserScript==
// @name         劳动 no more
// @namespace    https://illusion.blog
// @version      114.51.4
// @description  Press "F" to skip labor
// @author       You
// @match        https://byyxt.pupedu.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pupedu.cn
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const doRemove = () => {
    const vid = document.querySelector("video");
    const controls = document.querySelector("xg-controls");
    if (!vid || !controls) return;
    controls.remove();
    vid.controls = true;
    clearInterval(interval);
  };
  document.addEventListener("keyup", (e) => {
    if (e.key !== "f") return;
    doRemove();
  });
})();
