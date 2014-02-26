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
                    _page = window.open("/pages/" + uri + "/index.html");
                    // Handle page.loading
                    $(_page.document).ready(function() {
                        setTimeout(function() {
                            $("body").trigger("page:complete", {
                                collection: _page.collection
                            });
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
                    page.close()
                    delete this.pages[uri];
                }
            }
        }
    })();
    
    return WebPageView;
});
