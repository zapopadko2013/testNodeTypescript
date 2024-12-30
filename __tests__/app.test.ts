
import request from "supertest";
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import PostRouter from "../src/routes/post.route";
import cors, { CorsOptions } from "cors";
import axios from "axios";

import app from "../src/server";
import find from 'find-process';





describe("Test app.ts", () => {
  test("Проверка не тех маршрутов", async () => {

  
    const res = await request(app).get("/");
     console.log(res.body);
     
     expect(res.body).toEqual({
      "error": "Route / not found"
    }); 
    
    
  });  
});
