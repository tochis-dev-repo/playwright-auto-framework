const BasePage = require('./basePage');

class TransferPage extends BasePage {
    constructor(page) {
        super(page);
        this.amountInput = 'input[name="amount"]';
        this.fromAccountDropdown = 'select[name="fromAccountId"]';
        this.toAccountDropdown = 'select[name="toAccountId"]';
        this.transferButton = 'input[value="Transfer"]';
        this.successMessage = '.success';
    }

    async enterTransferDetails(amount, fromAccount, toAccount) {
        await this.type(this.amountInput, amount);
        await this.selectDropdown(this.fromAccountDropdown, fromAccount);
        await this.selectDropdown(this.toAccountDropdown, toAccount);
    }

    async clickTransfer() {
        await this.click(this.transferButton);
    }

    async transferFunds(amount, fromAccount, toAccount) {
        await this.enterTransferDetails(amount, fromAccount, toAccount);
        await this.clickTransfer();
    }

    async getSuccessMessage() {
        return await this.getText(this.successMessage);
    }
}

module.exports = TransferPage;
