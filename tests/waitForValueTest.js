beforeEach(function(){
	browser.url('/Accordion/index.html');
});

describe('Validate text present',function(){
	it('Verify text exists within the loading div container',function(done){
		this.timeout(20000);
		var text=browser.waitForValue('#hidden-text',2000);
		console.log(text);
	});
});