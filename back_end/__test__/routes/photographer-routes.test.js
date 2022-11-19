const app = require("../../app");
const request = require("supertest");

describe('ROUTES: Should test basic route functionality', () => {
    it("should return 200 if it works", async () => {
        const res = await request(app).get('/api/photographers');
        expect(res.statusCode).toEqual(200)
    })
    it("should return 200 if it works", async () => {
        const res = await request(app).get('/api/photographers/95961/wedding/');
        expect(res.statusCode).toEqual(200)
    })
    it("should return 400 if there is bad input", async () => {
        const res = await request(app).get('/api/photographers/95/we/');
        expect(res.statusCode).toEqual(400)
    })
})

