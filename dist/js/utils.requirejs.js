(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// By default JS dependency is handled using browserify
// please see 'GULP-TASKS.md#js' for more info

//example function and export
function sum(args){
    var total = 0;
    args.forEach(function(int){
        total += int;
    });
    return total;
}

module.exports = {
    sum: sum
};

if (typeof skyComponents === "undefined") window.skyComponents = {};
skyComponents['utils'] = module.exports;
},{}],2:[function(require,module,exports){
var local; local['utils'] = require('./utils');

if (typeof window.define === "function" && window.define.amd) {
    define('bower_components/bskyb-utils/dist/js/utils.requirejs', [], function() {
        'use strict';
        return local['utils'];
    });
}
},{"./utils":1}]},{},[2]);
