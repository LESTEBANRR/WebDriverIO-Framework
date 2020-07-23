describe('test the webDriverUniversity homepage',function(){
	it('Output the height of the home page carousel',function(done){
		browser.url('/');
		browser.pause(2000);
		var divcarouselHeight=browser.getCssProperty('#udemy-promo-thumbnail','height');
		console.log(divcarouselHeight);
	});
});