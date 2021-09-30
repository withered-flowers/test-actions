const { assert } = require("console");
const request = require("supertest");
const app = require("../app.js");

describe("GET /", function () {
  it("response with Hello World", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        assert(response.body.msg, "Hello World");
      });
  });
});
