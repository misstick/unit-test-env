define(['jquery', "underscore"], function(jquery, _) {
    "use strict";
    
    var setContent = function(url) {
        
    };
    
    var getIframe = function(uri) {
        var iframe;
        var id = "iframe-" + uri;
        var url = "/pages/" + uri + ".html";
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
                
                var iframe = getIframe(uri);
                var model = {
                  title: "PLOP",
                  src: "http://wasistdas.co.uk/Owlsploitation/wp-content/uploads/2012/11/owl-2.jpg",
                  cid: "c250"
                };
                
                require(["text!/templates/" + uri + ".html"], function(template) {
                    var _window = iframe.contentWindow;
                    var content = _.template(template, model);
                    var el = $("#main-content", _window.document)
                    el.html(content);
                });
                
                return iframe;
            }
        }
    })();
    
    return WebPageView;
});
