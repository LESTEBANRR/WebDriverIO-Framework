class ContactUs_Page{
	get firstName(){return $("[name='first_name']");}
	get lastName(){return $("[name='last_name']");}
	get comments(){return $("textarea");}
	get emailAddress(){return $("[name='email']");}
	get submitButton(){return $("[type='submit']");}
	
	setFirstName(first_name){
		return this.firstName.setValue(first_name);
	}
	setLastName(last_name){
		return this.lastName.setValue(last_name);
	}
	setEmailAddress(email){
		return this.emailAddress.setValue(email);
	}
	setComments(message){
		return this.comments.setValue(message);
	}
	clickSubmitButton(){
		return this.submitButton.click();
	}

	submitAllInformationViaContactUsForm(first_name,last_name,email,message,submission){
		if(first_name){
			this.setFirstName(first_name);
		}
		if(last_name){
			this.setLastName(last_name);
		}
		if(email){
			this.setEmailAddress(email);
		}
		if(message){
			this.setComments(message);
		}
			this.clickSubmitButton();
		if(submission == 'true'){
			this.confirmSuccessfulSubmission();
		}
		if(submission == 'false'){
			this.confirmUnsuccessfulSubmission();
		}
	}

	confirmSuccessfulSubmission(){
		var successfulSubmissionSelector="#contact_reply h1";
		var validateSubmissionHeader=browser.waitUntil(function(){
			return browser.getText(successfulSubmissionSelector) == "Thank You for your Message!";
		}, 3000);
		expect(validateSubmissionHeader, 'Successful Submission Message does not exists!').to.be.true;
	}

	confirmUnsuccessfulSubmission(){
		/*
		var unsuccessfulSubmissionSelector="body";
		var validateSubmissionHeader=browser.waitUntil(function(){
			return browser.getText(unsuccessfulSubmissionSelector) == "Error: all fields are required";
		}, 3000);
		*/
		expect( this.unsuccessfulSubmissionHeader.getText() ).to.include("Error: all fields are required");
	}

}

module.exports = new ContactUs_Page();