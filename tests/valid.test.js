const request = require("supertest");
const app = require("../app");

beforeEach(() => {
    const dbConnection = require('../database/database');
    dbConnection();
});
  
afterEach(() => {
    const mongoose = require('mongoose');
    mongoose.connection.close();
});

describe("Test the root path", () => {
    test("It should response 200", () => {
        const param = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        };
        return request(app)
        .post("/")
        .send(param)
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    }, 30000);
  });