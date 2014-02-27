define(['jquery', "underscore"], function(jquery, _) {
    "use strict";
    
    var setContent = function(url) {
        
    };
    
    var getPage = function(uri) {
        var iframe;
        var id = "iframe-" + uri;
        var url = "/pages/" + uri + ".html";
        return window.open(url, "");
    };
    
    var WebPageView = (function () {
        return {
            pages: {},
            open: function(uri) {
                var _page = this.pages[uri];
                if (!_page) {
                    // Open Page
                    var id = "iframe-" + uri;
                    var url = "/pages/" + uri + "/index.html";
                    var style = "background: #efefef; border: 0; width: 40%; height: 700px; position: fixed; right: 0; top: 100px;";
                    $("body").append("<iframe id='" + id + "' src='" + url + "' style='" + style +"'>");
                    _page = $("#" + id).get(0);
                    
                    // Handle page.loading
                    $(_page.document).ready(function() {
                        setTimeout(function() {
                            $("body").trigger("page:complete");
                        }, 500);
                    });
                    // Savee Page not to open it several times
                    this.pages[uri] = _page;
                }
                return _page;
            },
            
            close: function(uri) {
                var page = this.pages[uri];
                if (page) {
                    page.remove();
                    delete this.pages[uri];
                }
            }
        }
    })();
    
    return WebPageView;
});
