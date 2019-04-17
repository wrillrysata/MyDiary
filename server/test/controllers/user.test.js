import chaiHttp from "chai-http";
import chai, { expect } from "chai";
import request from "request";
import app from "../../server";

const should = chai.should();
chai.use(chaiHttp);
// sign up user test suite
describe("POST /api/v1/auth/signup", () => {
  it("Should return a json web token after successful signup", done => {
    const newUser = {
      userName: 'jonsnow',
      email: "snow@gmail.com",
      password: "123456",
    };
    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(newUser)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).should.be.a("object");
        expect(res.body).should.have.property("token");
      });
    done();
  });
});
// sign in user test suite
describe("POST /api/v1/auth/signin", () => {
  it("should return 404 for non existing user", done => {
    const FakeUser = {
      userName: "Bob",
      password: "123456"
    };
    chai
      .request(app)
      .post("/api/v1/auth/signin")
      .send(FakeUser)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).should.be.a("object");
        // expect(res.body).should.have.property("message");
      });
    done();
  });
});
