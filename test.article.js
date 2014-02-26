// Add Her test for articles.js
define(['jquery', "underscore", "webpage", "backbone"], function($, _, webpage) {
    "use strict";

    /*
     TESTER
     - unitairement les méthodes simples des vues
     - unitairement les collection/models de données
    */
    
    var page, collection, articles;

    // Test des templates utilisés
    describe('Article', function(){
        before(function(done){
            page = webpage.open("article");
            $("body").on("page:complete", function(event, data) {
                articles = $("article", page.document);
                collection = data.collection;
                done();
            }.bind(this))
        });

        describe('DOM', function(){

            it('Should have as many items as models', function(){
              assert.equal(collection.length, articles.length);
            });

            it('Should select Item', function(){
              var _index, _model, checkbox;
              // Item selected
              _model = collection.find(function(model, index) {
                  var _value = model.get("illustration")
                  if (_value) {
                      _index = index;
                  }
                  return _value;
              })
              checkbox = $('[name="medias[][illustration]"]', page.document).get(_index);
              assert.equal($(checkbox).attr("checked"), "checked");
              
              // Item unselected
              _model = collection.find(function(model, index) {
                  var _value = model.get("illustration")
                  if (!_value) {
                      _index = index;
                  }
                  return !_value;
              });
              checkbox = $('[name="medias[][illustration]"]', page.document).get(_index);
              assert.equal($(checkbox).attr("checked"), undefined);
            });
            
            it('Should call Modal component', function(){
                var modalOpener, id;

                id = "zoom-modal";
                modalOpener = $('.illustration[data-modal="#' + id + '"]', articles.get(0));
                assert.lengthOf(modalOpener, 1);

                id = "delete-modal";
                modalOpener = $('.trash-button[data-modal="#' + id + '"]', articles.get(0));
                assert.lengthOf(modalOpener, 1);
            });
            
            it('Picture should be draggable', function(){
                var draggableEl;
                draggableEl = $('img[data-wysiwyg-draggable="true"]', articles.get(0));
                assert.lengthOf(draggableEl, 1);
            });
        });


        after(function(){
            webpage.close("article");
        });
    });
});
