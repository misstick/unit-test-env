// Add Her test for articles.js
define(['jquery', "underscore", "webpage"], function($, _, webpage) {
    "use strict";

    /*
     TESTER
     - unitairement les méthodes simples des vues
     - unitairement les collection/models de données
     - le bon envoie des événements
    */
    
    var page, collection, articles;

    // Test des templates utilisés
    describe('DOM', function(){
        before(function(done){
            page = webpage.open("article");
            $("body").on("page:complete", function(event, data) {
                articles = $("article", page.document);
                collection = data.collection;
                done();
            }.bind(this))
        });

        describe('Article', function(){

            it('Should have as many items as models', function(){
              assert.equal(collection.length, articles.length);
            });

            it('Should select Item', function(){
              var _index, _model, checkbox;
              // Item selected
              _model = _.find(collection, function(model, index) {
                  if (model.illustration) {
                      _index = index;
                  }
                  return model.illustration;
              })
              checkbox = $('[name="medias[][illustration]"]', page.document).get(_index);
              assert.equal($(checkbox).attr("checked"), "checked");
              
              // Item unselected
              _model = _.find(collection, function(model, index) {
                  if (!model.illustration) {
                      _index = index;
                  }
                  return !model.illustration;
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
