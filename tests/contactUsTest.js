var ContactUs_Page= require("../pageObjects/ContactUs_Page.js");

beforeEach(async() =>{
	await browser.url('/Contact-Us/contactus.html');
});
describe('Test Contact Us form WebdriverUni',() =>{

	it('Test1: Should be able to submit a successful submission via contact us form',() =>{
			ContactUs_Page.submitAllInformationViaContactUsForm('Joe','Blogs','joeBlogs@mail.com','How are you', true);
			ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
			expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
	});

	it('Test2: Should not be able to submit a successful submission via contact us form as all fields are required',
		()=>{
			ContactUs_Page.submitAllInformationViaContactUsForm('Jin','Jones',null,null, false);
			expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fieldsare required");
	});
});