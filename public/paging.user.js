// ==UserScript==
// @name         ⬅️选课➡️
// @namespace    https://illusion.blog/
// @version      1.14.514
// @description  try to take over the world!
// @author       illusionaries
// @match        https://elective.pku.edu.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const anchors = Array.from(document.querySelectorAll("tr[align='right'] a"))
    const prevAnchor = anchors.find(a => a.textContent.includes("Previous"))
    const nextAnchor = anchors.find(a => a.textContent.includes("Next"))
    if (prevAnchor) {
        document.addEventListener("keyup", (e) => {
            if (e.key == "ArrowLeft") prevAnchor.click()
        })
    }
    if (nextAnchor) {
        document.addEventListener("keyup", (e) => {
            if (e.key == "ArrowRight") nextAnchor.click()
        })
    }
})();
