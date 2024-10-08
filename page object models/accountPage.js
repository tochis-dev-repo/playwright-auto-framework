const BasePage = require('./basePage');

class AccountPage extends BasePage {
    constructor(page) {
        super(page);
        this.accountOverviewHeader = 'h1:has-text("Accounts Overview")';
        this.accountListTable = '#accountTable';
        this.accountBalance = '.balance';
    }

    async verifyAccountOverviewPage() {
        await this.waitForSelector(this.accountOverviewHeader);
        return await this.isVisible(this.accountOverviewHeader);
    }

    async getAccountBalances() {
        await this.waitForSelector(this.accountListTable);
        const balances = await this.page.$$eval(this.accountBalance, accounts => 
            accounts.map(account => account.innerText.trim()));
        return balances;
    }
}

module.exports = AccountPage;
