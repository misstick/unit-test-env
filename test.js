require.config({
    paths: {
        jquery:          '/vendor/jquery/jquery',
        text:            '/vendor/requirejs-text/text',
        underscore:      '/vendor/underscore-amd/underscore',
        backbone:        '/vendor/backbone-amd/backbone',
        webpage:         '/utils/webpage',
        dom:             '/utils/dom'
    }
});

define(["/test.article.js"], function() {
    "use strict";
});
