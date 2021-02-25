import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';
// criar as migrations de teste --> runMigrations()
describe("Users", () => {
  beforeAll(async() => {
    const connection = await createConnection();
    await connection.runMigrations();
  })
  it("Should be able to create a new user", async () => {
    const response = await request(app).post("/users")
    .send({
      email: "erikaskarda@yahoo.com",
      name: "Erika Skarda"
    });

    expect(response.status).toBe(201);
  });

  it("Should not be able to create a user with exixsts email", async () => {
    const response = await request(app).post("/users")
    .send({
      email: "erikaskarda@yahoo.com",
      name: "Erika Skarda"
    });

    expect(response.status).toBe(400);
  });
})