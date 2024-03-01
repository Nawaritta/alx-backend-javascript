const { expect } = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');
chai.use(chaiHttp);

describe('Index page', () => {

  it('correct status code', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('correct result', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
