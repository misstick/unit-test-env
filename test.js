require.config({
    paths: {
        backbone:        '/vendor/backbone-amd/backbone',
        text:            '/vendor/requirejs-text/text'
    }
});

define(['text!/templates/article.html'], function(article) {
    "use strict";
    
    
    // including all the tests
    //  @TODO : ADD ALL PAGE HERE
    console.log(article)
    
    // DEFAULT TEST
    describe('Array', function(){
      describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
          assert.equal(-1, [1,2,3].indexOf(5));
          assert.equal(-1, [1,2,3].indexOf(0));
        })
      })
    });

});