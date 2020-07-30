beforeEach(function(){
	browser.url('Dropdown-Checkboxes-RadioButtons/index.html');
});

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons',function(){
	it('Dropdown item Java is selected therefore should return true',function(done){
		var isSelected=browser.isSelected("//*[@id=\"dropdowm-menu-1\"]/option[1]");
		console.log(isSelected);
		expect(true).to.equal(isSelected);
	});
	it('Dropdown item Maven is not selected therefore should return false',function(done){
		var isSelected=browser.isSelected("//*[@id=\"dropdowm-menu-2\"]/option[2]");
		console.log(isSelected);
		expect(false).to.equal(isSelected);
	});
	it('Option 2 is not selected therefore should return false',function(done){
		var isSelected=browser.isSelected("//*[@id=\"checkboxes\"]/label[2]/input");
		console.log(isSelected);
		expect(false).to.equal(isSelected);
	});
	it('Option 3 is selected therefore should return true',function(done){
		var isSelected=browser.isSelected("//*[@id=\"checkboxes\"]/label[3]/input");
		console.log(isSelected);
		expect(true).to.equal(isSelected);
	});
	it('Radio Button Pumpkin is selected therefore should return true',function(done){
		var isSelected=browser.isSelected("//*[@id=\"radio-buttons-selected-disabled\"]/input[3]");
		console.log(isSelected);
		expect(true).to.equal(isSelected);
	});
});