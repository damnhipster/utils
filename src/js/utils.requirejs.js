var local; local['utils'] = require('./utils');

if (typeof window.define === "function" && window.define.amd) {
    define('bower_components/bskyb-utils/dist/js/utils.requirejs', [], function() {
        'use strict';
        return local['utils'];
    });
}