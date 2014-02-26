// Add Her test for articles.js
define(['jquery', "underscore", "webpage"], function($, _, webpage) {
    "use strict";

    /*
     TESTER
     - unitairement les méthodes simples des vues
     - unitairement les collection/models de données
     - le bon envoie des événements
    */
    
    var page, collection;

    // Test des templates utilisés
    describe('Templates Syntax', function(){
        before(function(done){
            page = webpage.open("article");
            $("body").on("page:complete", function(event, data) {
                collection = data.collection;
                done();
            }.bind(this))
        });

        describe('Article.Item', function(){

            it('Should have as many items as models', function(){
              assert.equal(collection.length, $("article", page.document).length);
            });

            it('Should select Item as an illustration', function(){
              // medias[][illustration]-> selected ?
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
