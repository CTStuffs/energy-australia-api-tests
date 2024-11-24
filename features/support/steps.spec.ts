const { Given, When, Then } = require('@cucumber/cucumber');
const supertest = require('supertest');
const request = supertest('https://eacp.energyaustralia.com.au/codingtest/api/v1');
const assert = require('assert');
const Ajv = require("ajv");
const ajv = new Ajv();
const schema = require("./festivalSchema.json");
const testData = require("./festivalData.json");

Given('I am a user', () => {
 // would perform any authentication or pre-testing actions here
})

When('I send a GET request to {string}', async function (req) {
 this.response = await request.get(req)
})

When('I send a POST request to {string}', async function (req) {
    this.response = await request.post(req)
})

When('I send a DELETE request to {string}', async function (req) {
    this.response = await request.delete(req)
})

Then('the API should respond with status code {int}', async function (code) { //Same function for two scenarios 1 and 3
    assert.equal(this.response.status, code)
})

Then('the response should match schema', async function () {
    assert.ok(this.response.body)
    assert.ok(ajv.validate(schema, this.response.body))
})

Then('the response should contain correct data', async function () {
    assert.ok(this.response.body)
    console.log(this.response.body)
    assert.equal(this.response.body,testData)
})

Then('the response should contain following headers', async function (table) {
    
    assert.ok(this.response.body)
    let hash = table.rowsHash();
    for (let key in hash) {
        assert.equal(this.response.headers[key], hash[key]);
    }
})