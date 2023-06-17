// ==UserScript==
// @name         Replace watch.min.js
// @namespace    YourNamespace
// @version      1.0
// @description  Replaces watch.min.js with your own script
// @match        https://zoro.to/*   // Specify the URL of the website where you want to intercept the script
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Replace watch.min.js with your own script URL
    var yourScriptUrl = 'https://raw.githubusercontent.com/ivhristov/devtools-detection-bypass/main/watch.js';

    // Find and replace the script element
    var scriptElement = document.querySelector('script[src="/js/watch.min.js?v=2.2"]');
    if (scriptElement) {
        var newScriptElement = document.createElement('script');
        newScriptElement.src = yourScriptUrl;
        scriptElement.parentNode.replaceChild(newScriptElement, scriptElement);
    }
})();
