const { assert } = require("console");
const request = require("supertest");
const { User } = require("../models/index");
const app = require("../app.js");

beforeAll(async () => {
  await User.create({
    email: "Testing",
    password: "123123123",
  });
});

afterAll(async () => {
  await User.destroy({ truncate: true });
});

describe("GET /", function () {
  it("response with Hello World", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        assert(response.body.msg, "Hello World");
        done();
      })
      .catch((err) => done(err));
  });
});

describe("GET /user", function () {
  it("response with Array of object Users", function (done) {
    request(app)
      .get("/user")
      .expect(200)
      .then((response) => {
        expect(response.body.data).toEqual(
          expect.arrayContaining([
            {
              email: "Testing",
              password: "123123123",
            },
          ])
        );
        done();
      })
      .catch((err) => done(err));
  });
});
