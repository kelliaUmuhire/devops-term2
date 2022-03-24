const Token = require("../model/Token");
const setUp = require("./helper/setup");
// require("../model/db");
const expect = require("chai").expect,
  request = require("supertest"),
  app = require("../index");

setUp();
describe("POST: Generate new token", () => {
  it("New Token", (done) => {
    let data_to_send = { meter: 123456, money: 100 };
    request(app)
      .post("/api/token")
      .send(data_to_send)
      .then((res) => {
        expect(res.statusCode).to.equal(201);
        expect(res.body).to.include({ meter_num: 123456 });
        done();
      })
      .catch((err) => done(err));
  });
});

describe("GET: /:id Token Info", () => {
  // let data_to_send = { meter: 123456, money: 100 };
  it("Existing Token", (done) => {
    request(app)
      .get("/api/token/10089373")
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.include({ meter_num: 123456 });
        done();
      })
      .catch((err) => done(err));
  });

  it("Non existing Token", (done) => {
    request(app)
      .get("/api/token/12345678")
      .then((res) => {
        expect(res.statusCode).to.equal(404);
        expect(res.body).to.deep.equal({ msg: "Token not found" });
        done();
      })
      .catch((err) => done(err));
  });

  it("Invalid Token", (done) => {
    request(app)
      .get("/api/token/string")
      .then((res) => {
        expect(res.statusCode).to.equal(400);
        done();
      })
      .catch((err) => done(err));
  });
});
