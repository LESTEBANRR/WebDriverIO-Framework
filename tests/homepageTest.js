//const { expect } = require("chai");

const { assert } = require("chai");

describe("Test webdriveruni homepage",()=>{
    it("Validate whether the webdriver uni homepage title is correct",()=>{
        browser.maximizeWindow();
        browser.url('./');
        const title=browser.getTitle();
        try{
            expect(title).to.equal('WebDriverUniversity.com');
        }catch(err){
            console.log("Exception: "+err);
            assert.fail();
        }
        
    });
});