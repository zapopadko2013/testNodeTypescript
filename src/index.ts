import express, {  Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import PostRouter from "./routes/post.route";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';

import cors, { CorsOptions } from "cors";
import { Server } from "http";
import app from "./server";
import prisma from "./server";





const port = 8080;

  
app.listen(port, () => {
  
    console.log(`Server is listening on port ${port}`);
});






