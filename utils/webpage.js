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
                if (this.pages[uri]) {
                    return this.pages[uri];
                }
                this.pages[uri] = window.open("/pages/" + uri + ".html");
                return this.pages[uri];
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
