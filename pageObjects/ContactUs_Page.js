class ContactUs_Page{
	get firstName(){return $("[name='first_name']");}
	get lastName(){return $("[name='last_name']");}
	get comments(){return $("textarea");}
	get emailAddress(){return $("[name='email']");}
	get submitButton(){return $("[type='submit']");}
	get successfulSubmissionHeader(){return $("#contact_reply h1");}
	get unsuccessfulSubmissionHeader(){return $("body");}

	function setFirstName(first_name){
		return this.firstName.setValue(first_name);
	}
	function setLastName(last_name){
		return this.lastName.setValue(last_name);
	}
	function setEmailAddress(email){
		return this.emailAddress.setValue(email);
	}
	function setComments(message){
		return this.comments.setValue(message);
	}
	function clickSubmitButton(){
		return this.submitButton.click();
	}

	function confirmSuccessfulSubmission(){
		var validateSubmissionHeader=browser.waitUntil(function(){
			return this.successfulSubmissionHeader.getText() == "Thank You for your Message!";
		}, 3000);
		expect(validateSubmissionHeader, 'Successful Submission Message does not exists!').to.be.true;
	}
	function confirmUnsuccessfulSubmission(){
		/*
		var validateSubmissionHeader=browser.waitUntil(function(){
			return this.unsuccessfulSubmissionHeader.getText() == "Error: all fields are required";
		}, 3000);
		*/
		expect( this.unsuccessfulSubmissionHeader.getText() ).to.include("Error: all fields are required");
	}
}

module.exports = new ContactUs_Page();