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
    describe('Templates Syntax', function(){
        before(function(done){
            page = webpage.open("article");
            $("body").on("page:complete", function(event, data) {
                articles = $("article", page.document);
                collection = data.collection;
                done();
            }.bind(this))
        });

        describe('Article.Item', function(){

            it('Should have as many items as models', function(){
              assert.equal(collection.length, articles.length);
            });

            it('Should select Item as an illustration', function(){
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
            
            it('Should have Modal <markup>', function(){
                // zoom-media-modal, delete-media-modal
            });
            
            it('Picture should be draggable', function(){
                //  data-wysiwyg-draggable="true"
            });
        });

        after(function(){
            webpage.close("article");
        });
    });
});
