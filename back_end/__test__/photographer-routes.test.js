const app = require("../app");
const request = require("supertest");

describe('Test photographer routes', () => {
    it("should return 200 if it works", async () => {
        const res = await request(app).get('/api/photographers');
        expect(res.statusCode).toEqual(200)
    })
    it("should return 200 if it works", async () => {
        const res = await request(app).get('/api/photographers/95961/wedding/');
        expect(res.statusCode).toEqual(200)
    })
    //TO DO: Need better route handling test cases here 
})
