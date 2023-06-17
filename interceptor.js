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
    var yourScriptUrl = 'http://zoro.to/your-script.js';

    // Find and replace the script element
    var scriptElement = document.querySelector('script[src="/js/watch.min.js?v=2.2"]');
    if (scriptElement) {
        var newScriptElement = document.createElement('script');
        newScriptElement.src = yourScriptUrl;
        scriptElement.parentNode.replaceChild(newScriptElement, scriptElement);
    }
})();
