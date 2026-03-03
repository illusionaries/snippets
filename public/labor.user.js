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
  const doComplete = () => {
    const vid = document.querySelector("video");
    if (!vid) return;
    vid.currentTime = vid.duration;
  };
  document.addEventListener("keyup", (e) => {
    if (e.key !== "f") return;
    doComplete();
  });
})();
