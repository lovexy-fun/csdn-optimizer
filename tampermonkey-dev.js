// ==UserScript==
// @name        CSDN博客优化(DEV)
// @namespace   http://lovexy.fun/
// @version     0.0.1
// @description 优化CSDN博客内容展示，让教程变得纯粹
// @author      lovexy-fun
// @license     MIT
// @match       https://blog.csdn.net/*/article/*
// @icon        https://blog.csdn.net/favicon.ico
// @grant       none
// @supportURL  
// @updateURL   
// @downloadURL 
// ==/UserScript==

(function () {
  'use strict'
  if (location.href === 'http://localhost:8080/') return
  var script = document.createElement('script')
  script.src = 'http://localhost:8080/app.bundle.js'
  document.body.appendChild(script)
})()
