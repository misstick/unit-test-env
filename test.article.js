// Add Her test for articles.js
define(['jquery', "underscore", "webpage", "backbone"], function($, _, webpage) {
    "use strict";

    /*
     TESTER
     - unitairement les méthodes simples des vues
     - unitairement les collection/models de données
    */
    
    var page, view, collection, model, pageDocument;

    var getArticles = function() {
        return $("article", pageDocument);
    }

    // Test des templates utilisés
    describe('Article', function(){
        before(function(done){
            page = webpage.open("article");
            $("body").on("page:complete", function(event) {
                view = page.contentWindow.view;
                pageDocument = page.contentWindow.document;
                collection = view.collection;
                model = collection.model;
                done();
            }.bind(this))
        });
        describe('Model', function(){

            it('Should select a model', function(){
                var _model = new model({
                    title: "Image5",
                    illustration: false,
                    src: "http://www.tuxboard.com/photos/2013/06/Chouette-en-folie-4.jpg"
                });
                var _change = sinon.spy();
                _model.on('change:fake', _change);

                // Test previous
                assert.equal(_model.isSelected(), false);
                assert.equal(_change.callCount, 0);
                _model.select();

                // Event "change:fake" must be triggered
                assert.equal(_change.callCount, 1);

                // Test new value
                assert.equal(_model.isSelected(), true);
            });
        });

        describe('Collection', function(){

            it('Should store previousSize', function(){
                var oldSize = collection.size();
                // No previous Size
                assert.equal(collection.previousSize, 0);
                collection.add({
                    title: "Image5",
                    illustration: false,
                    src: "http://www.tuxboard.com/photos/2013/06/Chouette-en-folie-4.jpg"
                });
                assert.equal(collection.previousSize, oldSize);
            });
        });

        describe('DOM', function(){

            it('Should have as many items as models', function(){
                var articles = getArticles();
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
              checkbox = $('[name="medias[][illustration]"]', pageDocument).get(_index);
              assert.equal($(checkbox).attr("checked"), "checked");
              
              // Item unselected
              _model = collection.find(function(model, index) {
                  var _value = model.get("illustration")
                  if (!_value) {
                      _index = index;
                  }
                  return !_value;
              });
              checkbox = $('[name="medias[][illustration]"]', pageDocument).get(_index);
              assert.equal($(checkbox).attr("checked"), undefined);
            });
            
            it('Should call Modal', function(){
                var modalOpener, id, articles;
                articles = getArticles();

                id = "zoom-modal";
                modalOpener = $('.illustration[data-modal="#' + id + '"]', articles.get(0));
                assert.lengthOf(modalOpener, 1);

                id = "delete-modal";
                modalOpener = $('.trash-button[data-modal="#' + id + '"]', articles.get(0));
                assert.lengthOf(modalOpener, 1);
            });
            
            it('Picture should be draggable', function(){
                var draggableEl, articles;
                articles = getArticles();
                draggableEl = $('img[data-wysiwyg-draggable="true"]', articles.get(0));
                assert.lengthOf(draggableEl, 1);
            });
        });

        describe('Views', function(){
            it('Should show/hide Modal', function(){
                var _article = getArticles().get(0);
                var _id = "delete-modal"
                var _link = $('[data-modal="#' + _id + '"]', _article);
            
                // Show Modal
                assert.equal($("#" + _id, pageDocument).length, 0);
                _link.trigger("click");
                assert.equal($("#" + _id, pageDocument).length, 1);
                
                // Hide Modal
                var _modal = $("#" + _id);
                _modal.trigger("click");
                assert.equal($("#" + _id).length, 0);
            
            });
        });

        after(function(){
            webpage.close("article");
        });
    });
});
