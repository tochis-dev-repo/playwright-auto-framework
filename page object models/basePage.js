class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async type(selector, text) {
        await this.page.fill(selector, text);
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async isVisible(selector) {
        return await this.page.isVisible(selector);
    }

    async waitForSelector(selector) {
        await this.page.waitForSelector(selector);
    }

    async selectDropdown(selector, value) {
        await this.page.selectOption(selector, value);
    }

    async waitForTimeout(timeout) {
        await this.page.waitForTimeout(timeout);
    }

    //searches for text anywhere on the page
    async isTextPresent(text) {
        const bodyText = await this.page.locator('body').innerText();
        return bodyText.includes(text);
    }
}

module.exports = BasePage;
