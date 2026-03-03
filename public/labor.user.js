// ==UserScript==
// @name         劳动 no more
// @namespace    https://illusion.blog
// @version      1145.1.4
// @description  Press "F" to skip labor, "E" to skip all
// @author       You
// @match        https://byyxt.pupedu.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pupedu.cn
// @grant        none
// ==/UserScript==

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const waitForElement = (selector) => {
  return new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
};

/** @param {HTMLVideoElement} video */
const waitForVideoReady = (video) => {
  return new Promise((resolve) => {
    if (video.readyState >= 3) {
      resolve();
      return;
    }
    video.addEventListener("canplay", () => resolve(), { once: true });
  });
};

(function () {
  "use strict";
  let stop = true;
  const debug = false;
  const lessonSelector = debug
    ? ".node-file-l-104"
    : ".node-file-l-104:has(img[src='https://w.readoor.cn/w/app30/img/viewer/v_208.png'])";
  const doComplete = async () => {
    if (stop) return;
    // expand all folders
    document.querySelectorAll(".node-folder-l0").forEach((x) => x.click());
    await sleep(1000); // Wait for UI to update
    const lessons = document.querySelectorAll(lessonSelector);
    for (const lesson of lessons) {
      if (stop) return;
      lesson.click();
      await sleep(500);
      /** @type {HTMLVideoElement} */
      const vid = await waitForElement("video");
      await waitForVideoReady(vid);
      vid.currentTime = vid.duration;
    }
  };
  const doCompleteSimple = async () => {
    const vid = document.querySelector("video");
    if (vid) {
      await waitForVideoReady(vid);
      vid.currentTime = vid.duration;
    }
  };
  document.addEventListener("keyup", (e) => {
    if (e.key == "e") {
      if (stop) {
        stop = false;
        doComplete();
      } else {
        stop = true;
      }
    } else if (e.key == "f") {
      doCompleteSimple();
    }
  });
})();
