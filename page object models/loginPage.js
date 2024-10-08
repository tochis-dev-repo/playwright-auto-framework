const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        // selectors for login page
        this.usernameInput = '#username';  
        this.passwordInput = '#password';
        this.loginButton = 'input[value="Log In"]';
        this.errorMessage = '.error';
    }

    async enterUsername(username) {
        await this.type(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.type(this.passwordInput, password);
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }
}

module.exports = LoginPage;
