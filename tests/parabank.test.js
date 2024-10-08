const { test, expect } = require('@playwright/test');
const TestData = require('../test-data/testData'); 
const RegisterPage = require('../page object models/registerPage');  
const LoginPage = require('../page object models/loginPage');  
const AccountPage = require('../page object models/accountPage');

// Initialize the TestData class
const testData = new TestData();
let isUserRegistered = false; 

test.describe('Parabank Test Scenarios', () => {
    test.beforeEach(async ({ page }) => {
        if (!isUserRegistered) {
            const registerPage = new RegisterPage(page);
            const validUser = testData.getValidUser();

            await registerPage.navigateTo('https://parabank.parasoft.com/parabank/register.htm');
            await registerPage.fillRegistrationForm(validUser);
            await page.waitForTimeout(5000);
            const usernameAlreadyExists = await registerPage.isTextPresent('This username already exists');
            if(!usernameAlreadyExists){
                const isAccountPageVisible = await registerPage.verifyAccountOverviewPage();
                expect(isAccountPageVisible).toBeTruthy();   
                await registerPage.logout();
            }

            isUserRegistered = true;
        }
    });

    test('should not allow user to login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const invalidUser = testData.getInvalidUser();
        const testUrl = testData.getTestUrl();

        // Navigate to the login page
        await loginPage.navigateTo(testUrl);

        // Attempt login with invalid credentials
        await loginPage.login(invalidUser.username, invalidUser.password);

        // Verify that an error message is shown
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('The username and password could not be verified');  // Adjust based on the actual error message
    });

    test('should allow valid user to login and verify account page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const accountPage = new AccountPage(page);
        const validUser = testData.getValidUser();
        const testUrl = testData.getTestUrl();

        // Navigate to the login page
        await loginPage.navigateTo(testUrl);

        // Login with valid credentials
        await loginPage.login(validUser.username, validUser.password);

        // Verify that the account overview page is visible
        const isAccountPageVisible = await accountPage.verifyAccountOverviewPage();
        expect(isAccountPageVisible).toBeTruthy();
    });
});
