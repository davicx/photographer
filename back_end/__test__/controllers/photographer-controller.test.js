const app = require("../../app");
const request = require("supertest");

describe('CONTROLLER: Test photographer controller', () => {
    it("Testing the main photographer controller which should return 30 photographers", async () => {
        const res = await request(app).get('/api/photographers');
        const photographerResponse = res.body;
        expect(photographerResponse.photographerData.length).toEqual(30)
    })
    it("Testing the photographer controller search function which should return 1 photographer", async () => {
        const res = await request(app).get('/api/photographers/95961/wedding/');
        const photographerResponse = res.body;
        expect(photographerResponse[0].id).toEqual(6426)
    })
})
