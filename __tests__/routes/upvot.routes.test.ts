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

describe("Upvot routes", () => {
  test("Создание голосования", async () => {
    

     const res = await request(app).post("/api/v1/upvot/create").send(

      {
    
        "post_id": 1,
        "author_id": 2        
         
      }

     );
    console.log(res.body);
    
    expect(res.body).toEqual({
      "error": "Уже есть такие данные author_id,post_id в базе данных"
  }); 
    
       
 
  });

  test("Проверка выбора голосований по предложению", async () => {
    

    const res = await request(app).get("/api/v1/upvot/getf/1");
    console.log(res.body);
    
    expect(res.body).toEqual([
      {
          "id": 2,
          "post_id": 1,
          "author_id": 2,
          "user": {
              "id": 2,
              "email": "1",
              "avatar": "2"
          },
          "feedbeek": {
              "id": 1,
              "title": "3",
              "description": "4",
              "category": "Функциональность",
              "status": "Запланировано"
          }
      },
      {
          "id": 3,
          "post_id": 1,
          "author_id": 1,
          "user": {
              "id": 1,
              "email": "11453",
              "avatar": "2245"
          },
          "feedbeek": {
              "id": 1,
              "title": "3",
              "description": "4",
              "category": "Функциональность",
              "status": "Запланировано"
          }
      }
  ]);
    
       
 
  });

  test("Проверка выбора голосований по пользователю", async () => {
    

    const res = await request(app).get("/api/v1/upvot/getu/1");
    console.log(res.body);
    
    expect(res.body).toEqual([
      {
          "id": 3,
          "post_id": 1,
          "author_id": 1,
          "user": {
              "id": 1,
              "email": "11453",
              "avatar": "2245"
          },
          "feedbeek": {
              "id": 1,
              "title": "3",
              "description": "4",
              "category": "Функциональность",
              "status": "Запланировано"
          }
      }
  ]);
    
       
 
  });

  test("Проверка количествоа голосований по предложению", async () => {
    

    const res = await request(app).get("/api/v1/upvot/getcount/1");
    console.log(res.body);
    
    expect(res.body).toEqual({
      "post_id": "1",
      "count": 2
  });
    
       
 
  });
});


