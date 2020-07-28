var ContactUs_Page= require("./pageObjects/ContactUs_Page.js");

beforeEach(function(){
	browser.url('/Contact-Us/contactus.html');
});
describe('Test Contact Us form WebdriverUni',function(){

	function setFirstName(first_name){
		return ContactUs_Page.firstName.setValue(first_name);
	}
	function setLastName(last_name){
		return ContactUs_Page.lastName.setValue(last_name);
	}
	function setEmailAddress(email){
		return ContactUs_Page.emailAddresss.setValue(email);
	}
	function setComments(message){
		return ContactUs_Page.comments.setValue(message);
	}
	function clickSubmitButton(){
		return ContactUs_Page.submitButton.click();
	}

	function confirmSuccessfulSubmission(){
		var validateSubmissionHeader=browser.waitUntil(function(){
			return ContactUs_Page.successfulSubmissionHeader.getText() == "Thank You for your Message!";
		}, 3000);
		expect(validateSubmissionHeader, 'Successful Submission Message does not exists!').to.be.true;
	}
	function confirmUnsuccessfulSubmission(){
		/*
		var validateSubmissionHeader=browser.waitUntil(function(){
			return ContactUs_Page.unsuccessfulSubmissionHeader.getText() == "Error: all fields are required";
		}, 3000);
		*/
		expect( ContactUs_Page.unsuccessfulSubmissionHeader.getText() ).to.include("Error: all fields are required");
	}

	contactusDetails.forEach(function(contactDetail){
		it('Should be able to submit a successful submission via contact us form',function(done){
			setFirstName('Joe');
			setLastName('Blogs');
			setEmailAddress(contactDetail.email);
			setComments(contactDetail.body);
			clickSubmitButton();
			confirmSuccessfulSubmission();
		});
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
			setFirstName('Mike');
			setLastName('Woods');
			setEmailAddress('mike_woods@mail.com');
			clickSubmitButton();
			confirmUnsuccessfulSubmission();
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
			setFirstName('Sarah');
			setEmailAddress('sarah_woods@mail.com');
			clickSubmitButton();
			confirmUnsuccessfulSubmission();
	});
	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
			setFirstName('Jin');
			setLastName('Jones');
			clickSubmitButton();
			confirmUnsuccessfulSubmission();
	});
});