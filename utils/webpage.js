define(['jquery'], function(jquery) {
    "use strict";
    
    var getIframe = function(uri) {
        var iframe;
        var id = "iframe-" + uri;
        var url = "/templates/" + uri + ".html";
        var style = "background: #efefef; border: 0; width: 40%; height: 700px; position: fixed; right: 0; top: 100px;";
        if (!(iframe = $("#" + id).get(0))) {
            $("body").append("<iframe id='" + id + "' src='" + url + "' style='" + style +"'>");
            return $("#" + id).get(0);
        }
        return iframe;
    };
    
    var WebPageView = (function () {
        return {
            // var _window = _iframe.contentWindow;
            // var _page = _window.document
            create: function(uri) {
                return getIframe(uri);
            }
        }
    })();
    
    return WebPageView;
});
