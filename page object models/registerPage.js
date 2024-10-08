const BasePage = require('./basePage');

class RegisterPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Locators for registration fields
        this.firstNameInput = 'input[name="customer.firstName"]';
        this.lastNameInput = 'input[name="customer.lastName"]';
        this.addressInput = 'input[name="customer.address.street"]';
        this.cityInput = 'input[name="customer.address.city"]';
        this.stateInput = 'input[name="customer.address.state"]';
        this.zipCodeInput = 'input[name="customer.address.zipCode"]';
        this.phoneNumberInput = 'input[name="customer.phoneNumber"]';
        this.ssnInput = 'input[name="customer.ssn"]';
        this.usernameInput = 'input[name="customer.username"]';
        this.passwordInput = 'input[name="customer.password"]';
        this.confirmPasswordInput = 'input[name="repeatedPassword"]';
        this.registerButton = 'input[value="Register"]';

        // Locators for account user logout
        this.logoutLink = 'a[href="/parabank/logout.htm"]';
    }

    // Fill out registration form
    async fillRegistrationForm(user) {
        await this.type(this.firstNameInput, user.firstName);
        await this.type(this.lastNameInput, user.lastName);
        await this.type(this.addressInput, user.address);
        await this.type(this.cityInput, user.city);
        await this.type(this.stateInput, user.state);
        await this.type(this.zipCodeInput, user.zipCode);
        await this.type(this.phoneNumberInput, user.phoneNumber);
        await this.type(this.ssnInput, user.ssn);
        await this.type(this.usernameInput, user.username);
        await this.type(this.passwordInput, user.password);
        await this.type(this.confirmPasswordInput, user.password);
        await this.click(this.registerButton);
    }

    async verifyAccountOverviewPage() {
        return await this.isVisible(this.logoutLink);
    }

    async logout() {
        await this.click(this.logoutLink);
    }
}

module.exports = RegisterPage;
