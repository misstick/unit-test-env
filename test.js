require.config({
    paths: {
        jquery:          '/vendor/jquery/jquery',
        text:            '/vendor/requirejs-text/text',
        underscore:      '/vendor/underscore-amd/underscore',
        webpage:         '/utils/webpage'
    }
});

define(['jquery', "webpage"], function($, webpage) {
    "use strict";
    
    var page = webpage.open("article");
    
    // webpage.close("article");
    
    /*
     - les templates utilisés (présence des attributs adéquats)
     - unitairement les méthodes simples des vues
     - unitairement les collection/models de données
     - le bon envoie des événements
    */

    // page.close();
    // including all the tests
    //  @TODO : ADD ALL PAGE HERE
    // // DEFAULT TEST
    // describe('Array', function(){
    //   describe('#indexOf()', function(){
    //     it('should return -1 when the value is not present', function(){
    //       assert.equal(-1, [1,2,3].indexOf(5));
    //       assert.equal(-1, [1,2,3].indexOf(0));
    //     })
    //   })
    // });

    // page.remove()


});