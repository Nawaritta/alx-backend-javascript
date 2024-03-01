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

  describe('Cart page', () => {
    it('correct status code when :id is a number', (done) => {
      chai.request(server)
        .get('/cart/10')
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          done();
        });
    });

    it('correct status code when :id is NOT a number', (done) => {
      chai.request(server)
        .get('/cart/notnumber')
        .end((err, res) => {
          chai.expect(res).to.have.status(404);
          done();
        });
    });
});
});