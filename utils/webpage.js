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
    
    // createPage = function(options) {
    //   var page, styles0, styles1, _window;
    //   if (options == null) {
    //     options = {};
    //   }
    //   _window = createIframe();
    //   page = _window.document;
    //   styles0 = "position: relative; width: 100%; height: 100%; background: pink;";
    //   styles1 = "width: 100%; height: 100%; border: solid 1px black;";
    //   $("body", page).append("<div id='page' style='" + styles0 + "'><p>#page</p><div data-type='page-content' style='" + styles1 + "'></div></div>");
    //
    //   return new (options.view || Page)({
    //     el: $("#page", page),
    //     collection: options.collection ? options.collection : void 0,
    //     window: _window
    //   });
    // };
    
    var WebPageView = (function () {
        return {
            create: function(uri) {
                
                var _iframe = getIframe(uri);
                var _window = _iframe.contentWindow;
                var _page = _window.document
                console.log(_iframe, _window, _page)
                
                
                return _window;
            }
        }
    })();
    
    return WebPageView;
});
