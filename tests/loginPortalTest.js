browser
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