define(['jquery', "underscore"], function(jquery, _) {
    "use strict";
    
    var WebPageView = (function () {
        return {
            pages: {},
            createPage: function(uri) {
                var id = "iframe-" + uri;
                var url = this.getUrl(uri);
                var style = "background: #efefef; border: 0; width: 40%; height: 700px; position: fixed; right: 0; top: 100px;";
                $("body").append("<iframe id='" + id + "' src='" + url + "' style='" + style +"'>");
                return $("#" + id).get(0);
            },
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
                    _page = this.createPage(uri);
                    
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
                    $(_page).remove();
                    this.removePage(uri);
                }
            }
        }
    })();
    
    return WebPageView;
});
