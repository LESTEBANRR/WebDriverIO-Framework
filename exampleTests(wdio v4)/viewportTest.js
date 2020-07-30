beforeEach(function(){
	browser.url('Hidden-Elements/index.html');
});

describe('Test wether specific elements are visible within viewport',function(){
	it('should resize the current viewport',function(done){
		browser.setViewportSize({
			width:1200,
			height:700,
		});
		browser.pause(2000);
		var windowSize=browser.windowHandleSize();
		console.log(windowSize.value);
	});
	it('should detect if an element is visible',function(done){
		var isVisibleWV=browser.isVisibleWithinViewport('#not-displayed');
		console.log(isVisibleWV);

		var isVisibleWV=browser.isVisibleWithinViewport('#visibility-hidden');
		console.log(isVisibleWV);

		var isVisibleWV=browser.isVisibleWithinViewport('#zero-opacity');
		console.log(isVisibleWV);

		var isVisibleWV=browser.isVisibleWithinViewport('h1');
		console.log(isVisibleWV);

		var width=browser.getViewportSize("width");
		console.log(width);
		var height=browser.getViewportSize("height");
		console.log(height);
	});
});