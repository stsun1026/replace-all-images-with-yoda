// ==UserScript==
// @name         Replace All Images With Yoda Close Up
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enhance your browsing experience by replacing all images with an image of Yoda's face instead. Modify to URL to change the image.
// @author       Steven Sun
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const IMAGE_URL = "https://pbs.twimg.com/profile_images/473225440/yoda_400x400.jpg";
    const INITIAL_DELAY_MS = 500;
    const NUMBER_OF_RUNS = 5;
    const DELAY_BETWEEN_RUNS = 5000;

    setTimeout(() => {
        modifyImages();
    }, INITIAL_DELAY_MS);

    for(let i = 1; i <= NUMBER_OF_RUNS; i++) {
        setTimeout(() => {
            modifyImages();
        }, INITIAL_DELAY_MS + i * DELAY_BETWEEN_RUNS);
    }

    function modifyImages() {
        const images = document.getElementsByTagName("img");
        [...images].map(image => {
            image.src = IMAGE_URL;
        });
    }
})();
