describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
	it("check that the contact us button opens the contact us page", function(done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		});
		browser.url('/');
		var title=browser.getTitle();
		expect(title).to.equal('WebDriverUniversity.com');	
		console.log('Title is: ' + title);

		browser.click("#contact-us");
		var tabsIds=browser.getTabIds();
		console.log(tabsIds);
		browser.switchTab(tabsIds[1]);

		var title2=browser.getTitle();
		expect(title2).to.equal('WebDriver | Contact Us');	

		var url =browser.getUrl();
		expect(url).to.include('Contact-Us','URL Mismatch');	
		browser.close();
	});

	it("check that the login button opens the login portal page", function(done) {
		browser.url('/');
		var title = browser.getTitle();
		title.should.equal('WebDriverUniversity.com');
		console.log('Title is: ' + title);
		browser.click('#login-portal');
		var tabsIds=browser.getTabIds();
		browser.switchTab(tabsIds[1]);

		var title2=browser.getTitle();
		expect(title2).to.equal('WebDriver | Login Portal');	

		var url =browser.getUrl();
		expect(url).to.include('Login-Portal','URL Mismatch');
		browser.close();
	});
});