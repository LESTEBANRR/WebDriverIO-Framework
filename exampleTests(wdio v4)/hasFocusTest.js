describe('Test Dropdown-Checkboxes-RadioButtons Page',function(){
	browser.url('Dropdown-Checkboxes-RadioButtons/index.html');

	it('Should be able to focus on checkbox button elements',function(done){

		browser.click("//div[@id='checkboxes']//input[@value='option-1']");
		browser.pause(2000);
		var checkboxOne=browser.hasFocus("//div[@id='checkboxes']//input[@value='option-1']");
		console.log('Checkbox button one has a value of '+checkboxOne);
		expect(checkboxOne, 'The Checkbox (one) Should have focus!').to.be.true;

		var checkboxTwo=browser.hasFocus("//div[@id='checkboxes']//input[@value='option-3']");
		console.log('Checkbox button two has a value of '+checkboxTwo);
		expect(checkboxTwo, 'The Checkbox (two) Should have focus!').to.be.false;

	});
});