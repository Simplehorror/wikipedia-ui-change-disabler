// ==UserScript==
// @name        Disable shitty Wikipedia redesign
// @namespace   Violentmonkey Scripts
// @match       https://*.wikipedia.org/*
// @grant       none
// @version     1.0
// @author      -
// @description 18/01/2023, 17:54:54
// ==/UserScript==

if (!window.location.href.includes("?useskin=vector")){
  window.location.replace(window.location.href + "?useskin=vector");
}
