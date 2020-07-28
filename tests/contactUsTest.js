var ContactUs_Page= require("../pageObjects/ContactUs_Page.js");

beforeEach(function(){
	browser.url('/Contact-Us/contactus.html');
});
describe('Test Contact Us form WebdriverUni',function(){

	it('Should be able to submit a successful submission via contact us form',function(done){
			ContactUs_Page.submitAllInformationViaContactUsForm('Joe','Blogs','joeBlogs@mail.com','How are you', true);
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
			ContactUs_Page.submitAllInformationViaContactUsForm('Mike','Woods','mike_woods@mail.com',null, false);
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
			ContactUs_Page.submitAllInformationViaContactUsForm('Sarah',null,'sarah_woods@mail.com',null, false);
	});
	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
			ContactUs_Page.submitAllInformationViaContactUsForm('Jin','Jones',null,null, false);
	});
});