const expect = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('return a resolved promise with data when success is true', () => getPaymentTokenFromAPI(true).then((response) => {
    expect(response).to.deep.equal({ data: 'Successful response from the API' });
  }));
});
