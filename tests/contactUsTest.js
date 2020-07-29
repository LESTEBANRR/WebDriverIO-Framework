var ContactUs_Page= require("../pageObjects/ContactUs_Page.js");

beforeEach(async() =>{
	await browser.url('/Contact-Us/contactus.html');
});
describe('Test Contact Us form WebdriverUni',() =>{

	it('Test1: Should be able to submit a successful submission via contact us form',() =>{
			ContactUs_Page.submitAllInformationViaContactUsForm('Joe','Blogs','joeBlogs@mail.com','How are you', true);
	});

	it('Test2: Should not be able to submit a successful submission via contact us form as all fields are required',
		()=>{
			ContactUs_Page.submitAllInformationViaContactUsForm('Jin','Jones',null,null, false);
	});
});