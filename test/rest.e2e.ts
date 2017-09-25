import {browser, element, by, protractor} from "protractor";

    describe('Chatbot homepage', function() {
        beforeEach(function() {
                browser.get('http://localhost:8888/home');
                //expect(browser.getCurrentUrl()).toEqual('https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize?response_type=code&client_id=MGZjMzg1Y2UtYWVlZC00&redirect_uri=https%3A%2F%2Fcogprov-test.w3ibm.mybluemix.net%2Fauth%2Fsso%2Fcallback&scope=openid%20openid');
             });
        it('should open the browser with the page', function() {
            //browser.driver.manage().window().setSize(400, 600);
            //browser.get('https://cogprov-test.w3ibm.mybluemix.net/home');
            expect(browser.getTitle()).toEqual('You Rock with DevOps');
            browser.sleep(5000);
        });
    });


    describe('FAQ Page', function(){
        it('should redirecto to the right question when you click on one of them', function(){
            element(by.tagName('input')).sendKeys('This is a DevOps Workshop');
            browser.sleep(4000);
            //browser.findElement(by.id('faq'));
        })
    })
