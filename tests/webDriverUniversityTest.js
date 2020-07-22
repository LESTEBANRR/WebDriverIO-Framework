describe("Verify whether  webdriveriouniversity link on homepage works correctly",
	function(){
		it("Check taht the contact us button opens the contact us page",
			function(done){
				return browser
				.setViewportSize({
					width:1200,
					height: 700
				})
				.url('http://www.webdriveruniversity.com/')
				.getTitle().then(function(title){
					console.log('Title is: '+title);
				})
				.click("#contact-us")
				.pause(3000);
			});
		it("Check taht the login button opens the Login page",
			function(done){
				return browser
				.setViewportSize({
					width:1200,
					height: 700
				})
				.url('http://www.webdriveruniversity.com/')
				.click('#login-portal')
				.getTitle().then(function(title){
					console.log('Title is: '+title);
				})
				.pause(3000);
			});
	});