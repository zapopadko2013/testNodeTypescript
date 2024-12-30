

import axios from "axios"
import cors, { CorsOptions } from "cors";
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import PostRouter from "../src/routes/post.route";

import app from "../src/server";

describe("Server.ts tests", () => {
  
  test("Проверка прохождения тестов", async () => {

    
    expect(3).toBe(3);
  

    
    
  });  
});
