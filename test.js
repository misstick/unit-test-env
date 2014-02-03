require.config({
    paths: {
        jquery:          '/vendor/jquery/jquery',
        text:            '/vendor/requirejs-text/text',
        webpage:         '/utils/webpage'
    }
});

define(['jquery', "webpage"], function($, webpage) {
    "use strict";
    
    var page = webpage.create("article");
    
    
    // page.remove()
    
    // var content = _.template(page, {
    //   title: "PLOP",
    //   src: "/image/test.png",
    //   cid: "c250"
    // });


    // plop.close();
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

});