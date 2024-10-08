# playwright-auto-framework

This is a simple test framework for testing a sample site using the **Page Object Model (POM)** and the test tool **Playwright**.  
This framework demonstrates how I would approach testing the UI for a sample site:  
[https://parabank.parasoft.com/](https://parabank.parasoft.com/)

The test plan can be found here:  
[https://docs.google.com/document/d/10kO67dXNY0nEJZ69d5qghw/edit?usp=sharing](https://docs.google.com/document/d/10kO67sX_aasz64DamK5mc6CIx0zXNY0nEJZ69d5qghw/edit?usp=sharing)

---

## Project Structure

The framework uses the **Page Object Model (POM)** to organize test files and separate page-specific methods from test logic. Below is the structure of the project:


### **Folder and File Descriptions:**

1. **/tests/parabank.test.js**:  
   This file contains the test cases for:
   - User registration
   - User login
   - Account verification
   - Fund transfer operations

2. **/page object models/**:
   - **basePage.js**: Defines common methods such as navigation, clicking, typing, and checking text visibility. Other page objects inherit from this base class.
   - **loginPage.js**: Contains methods for logging into the site (e.g., entering username, password, and clicking login).
   - **registerPage.js**: Contains methods for handling user registration (e.g., filling out the registration form, submitting, and verifying).
   - **accountPage.js**: Manages interactions with the account overview page, such as verifying account balances or navigating to account details.
   - **transferPage.js**: Handles operations related to fund transfers between accounts.

3. **/test-data/testData.js**:  
   This file contains test data, such as:
   - Valid/invalid user credentials
   - URLs
   - Account details for fund transfers

---

## How to Run the Tests

### **Prerequisites**:
Ensure you have the following installed on your machine:
- **Node.js** (version 14 or higher)
- **Playwright** (automatically installed with the project dependencies)

### **Setup**:

1. **Clone the repository and install playwright**:
   ```bash
   "follow the instructions to clone the repo"
   cd playwright-auto-framework

   npm install
   npx playwright install

2. **Run Playwright**:
npx playwright test

To see the results:
npx playwright show-report