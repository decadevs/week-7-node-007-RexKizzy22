const request = require("supertest");
const apps = require("../../bin/www");


describe("POST Circle", () => {
  it("should calculate the area of the circle", async () => {
    const data = {
      shape: "circle",
      dimension: { a: 9 },
    };
    const res = await request(apps).post("/calculate").send(data);

    expect(res.body).toHaveProperty("data");
    expect(res.status).toBe(201);
    expect(res.body.data.area).toBe(254.47);
  });

});

describe("POST Triangle", () => {
    it("should calculate the area of the triangle", async () => {
      const data = {
        shape: "triangle",
        dimension: { a: 9, b: 10, c: 11}
      };
      const res = await request(apps).post("/calculate").send(data);
  
      expect(res.body).toHaveProperty("data");
      expect(res.status).toBe(201);
      expect(res.body.data.area).toBe(42.43);
    });
  
  });

  describe("POST Square", () => {
    it("should calculate the area of the square", async () => {
      const data = {
        shape: "square",
        dimension: { a: 9}
      };
      const res = await request(apps).post("/calculate").send(data);
  
      expect(res.body).toHaveProperty("data");
      expect(res.status).toBe(201);
      expect(res.body.data.area).toBe(81);
    });
  
  });

  describe("POST Rectangle", () => {
    it("should calculate the area of the rectangle", async () => {
      const data = {
        shape: "rectangle",
        dimension: { a: 9, b: 10}
      };
      const res = await request(apps).post("/calculate").send(data);
  
      expect(res.body).toHaveProperty("data");
      expect(res.status).toBe(201);
      expect(res.body.data.area).toBe(90);
    });
  
  });

describe("GET Shapes", () => {
  it("should return an array of data", async () => {
    const res = await request(apps).get("/fetchRecords");

    expect(res.body).toHaveProperty("data");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});
