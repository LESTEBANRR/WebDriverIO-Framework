var request=require('sync-request');

browser.addCommand("submitDataViaContactUsForm", function(first_name,last_name,email,message){
	if(first_name){
		browser.setValue("[name='first_name']",first_name);
	}
	if(last_name){
		browser.setValue("[name='last_name']",last_name);
	}
	if(email){
		browser.setValue("[name='email']",email);
	}
	if(message){
		browser.setValue("[name='message']",message);
	}
	browser.click("[type='submit']");
});

beforeEach(function(){
	browser.url('/Contact-Us/contactus.html');
});
describe('Test Contact Us form WebdriverUni',function(){
	var res=request('GET','http://jsonplaceholder.typicode.com/posts/1/comments');
	var contactusDetails=JSON.parse(res.getBody().toString('utf8'));

	contactusDetails.forEach(function(contactDetail){
		it('Should be able to submit a successful submission via contact us form',function(done){
			browser.submitDataViaContactUsForm('Joe','Blogs',contactDetail.email,contactDetail.body);

			var successfulMessage=browser.isExisting('#contact_reply h1');
			expect(successfulMessage,'The Message doesn\'t exists').to.be.true;

			var successfulSubmission=browser.getText('#contact_reply h1');
			expect(successfulSubmission).to.equal('Thank You for your Message!');
		});
	});
	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
		browser.setValue("[name='first_name']",'Mike');
		browser.setValue("[name='last_name']",'Woods');
		browser.setValue("[name='email']",'mike_woods@mail.com');
		browser.click("[type='submit']");

		var successfulMessage=browser.isExisting('#contact_reply h1');
		expect(successfulMessage,'The Message doesn\'t exists').to.be.false;
	});
	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
		browser.setValue("[name='first_name']",'Sarah');
		browser.setValue("[name='email']",'sarah_woods@mail.com');
		browser.click("[type='submit']");

		var successfulMessage=browser.isExisting('#contact_reply h1');
		expect(successfulMessage,'The Message doesn\'t exists').to.be.false;
	});
	it('Should not be able to submit a successful submission via contact us form as all fields are required',
		function(done){
		browser.setValue("[name='first_name']",'Jin');
		browser.setValue("[name='last_name']",'Jones');
		browser.click("[type='submit']");

		var errorText=browser.getText('body');
		expect(errorText).to.include('Error: all fields are required');

		var errorText=browser.isVisible('body');
		expect(errorText,'Error message is not visible').to.be.true;
	});
});