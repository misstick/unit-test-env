define(['jquery', "underscore"], function(jquery, _) {
    "use strict";
    
    var _remove = function(el) {
        $("body").get(0).removeChild(el);
    }
    
    var WebPageView = (function () {
        return {
            pages: {},
            getPage: function(uri) {
                return this.pages[uri];
            },
            getUrl: function(uri) {
                return "/pages/" + uri + "/index.html";
            },
            savePage: function(uri, page) {
                this.pages[uri] = page;
            },
            removePage: function(uri) {
                delete this.pages[uri];
            },
            open: function(uri) {
                var _page = this.getPage(uri);
                if (!_page) {
                    // Open Page
                    var url = this.getUrl(uri);
                    // _page = window.open(url);
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
                    // Save Page not to open it several times
                    this.savePage(uri, _page);
                }
                return _page;
            },
            
            close: function(uri) {
                var _page = this.getPage(uri);
                if (_page) {
                    _remove(_page);
                    this.removePage(uri);
                }
            }
        }
    })();
    
    return WebPageView;
});
