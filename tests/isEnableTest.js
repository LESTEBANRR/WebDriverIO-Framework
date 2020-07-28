browser.url('Dropdown-Checkboxes-RadioButtons/index.html');
browser.setViewportSize({
	width: 1200,
	height: 700
});
browser.pause(2000);
describe('Test Dropdown-Checkboxes-RadioButtons Page',function(){
	it('Dropdown item orange is disable therefore ahould return false',function(done){		
		var isEnabled=browser.isEnabled("//*[@id=\"fruit-selects\"]/option[2]");
		console.log(isEnabled);
		expect(false).to.equal(isEnabled);
	});
	it('Dropdown item grape is enable therefore ahould return true',function(done){
		var isEnabled=browser.isEnabled("//*[@id=\"fruit-selects\"]/option[4]");
		console.log(isEnabled);
		expect(true).to.equal(isEnabled);
	});
	it('Option 2 is enable therefore ahould return true',function(done){
		var isEnabled=browser.isEnabled("//*[@id=\"checkboxes\"]/label[2]/input");
		console.log(isEnabled);
		expect(true).to.equal(isEnabled);
	});
	it('RadioButton pumkin is enable therefore ahould return true',function(done){
		var isEnabled=browser.isEnabled("//*[@id=\"radio-buttons-selected-disabled\"]/input[3]");
		console.log(isEnabled);
		expect(true).to.equal(isEnabled);
	});
	it('RadioButton cabbage is disable therefore ahould return false',function(done){
		var isEnabled=browser.isEnabled("//*[@id=\"radio-buttons-selected-disabled\"]/input[2]");
		console.log(isEnabled);
		expect(false).to.equal(isEnabled);
	});
});
	