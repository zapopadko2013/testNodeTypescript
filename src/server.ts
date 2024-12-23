import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import PostRouter from "./routes/post.route";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';

import cors, { CorsOptions } from "cors";

export const prisma = new PrismaClient();

const app = express();
const port = 8080;

async function main() {

  
 
  const corsOptions: CorsOptions = {
    origin: "http://localhost:8080",
    credentials: true,
   
  };

  app.use(cors(corsOptions)); 

  
  

  app.use(express.json());

  app.use(express.static("public"));

  

  // Register API routes
  app.use("/api/v1", PostRouter);

  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  // swagger(app);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
