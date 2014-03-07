define(['jquery', "underscore"], function(jquery, _) {
    "use strict";
    
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
                    _page = window.open(url);
                    
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
                var page = this.getPage(uri);
                if (page) {
                    page.close();
                    this.removePage(uri);
                }
            }
        }
    })();
    
    return WebPageView;
});
