class TestData {
    getValidUser() {
        return {
            username: 'testUser',
            password: '123456',
            firstName: 'Test',
            lastName: 'User',
            address: 'test address',
            city: 'test city',
            state: 'test state',
            zipCode: 'zip123',
            phoneNumber: '1234',
            ssn: '123'
        };
    }

    getInvalidUser() {
        return {
            username: 'blablabla',
            password: 'abcdefgh'
        };
    }

    getTestUrl() {
        return 'https://parabank.parasoft.com/parabank/index.htm';
    }

    getTransferDetails(){
        return {
            transferAmount: '100',
            fromAccount: '12345',
            toAccount: '67890'
        }
    }
}

module.exports = TestData;
