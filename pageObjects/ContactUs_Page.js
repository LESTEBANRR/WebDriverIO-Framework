class ContactUs_Page{
	get firstName(){return $("[name='first_name']");}
	get lastName(){return $("[name='last_name']");}
	get comments(){return $("textarea");}
	get emailAddress(){return $("[name='email']");}
	get submitButton(){return $("[type='submit']");}

	get successfulSubmissionHeader(){return $("#contact_reply h1");}
	get unsuccessfulSubmissionHeader(){return $("body");}
	get successfulSubmissionHeaderText(){return this.successfulSubmissionHeader.getText();}
	get unsuccessfulSubmissionHeaderText(){return this.unsuccessfulSubmissionHeader.getText();}

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

		if(submission == true){
			this.successfulSubmissionHeader.waitForDisplayed(3000);
			try{
				expect(this.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
			}catch(err){
				console.log('Exception: '+err);
				assert.fail();
			}			
		}
		if(submission == false){
			try{
				expect(this.unsuccessfulSubmissionHeaderText).to.have.string("Error: all fields are required");	
			}catch(err){
				console.log('Exception: '+err);
				assert.fail();
			}
		}
	}
	

}

module.exports = new ContactUs_Page();