import request from "supertest";

import app from "../../src/server";
import axios from "axios"

import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import PostRouter from "../../src/routes/post.route";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../../swagger';

import cors, { CorsOptions } from "cors";
import find from 'find-process';

describe("User routes", () => {
  test("Проверка выбора пользователя", async () => {
    

    const res = await request(app).get("/api/v1/user/get/1");
    console.log(res.body);
    
    expect(res.body).toEqual({
      "id": 1,
      "email": "11453",
      "password": "3345",
      "avatar": "2245",
      "created_at": "2024-12-19T08:04:03.105Z"
    });
    
       
 
  });
});
