import { Request, Response } from "express";
import { prisma } from "../server";



const upvotPost = async (req: Request, res: Response) => {
  try {
    
    var post_id, author_id
    if (typeof req.body.post_id !== "undefined" && req.body.post_id !== null) {
      post_id=req.body.post_id;
    }  else {
      return res.status(400).json({ error: "Не найден post_id в теле данных" });
    }
    if (typeof req.body.author_id !== "undefined" && req.body.author_id !== null) {
      author_id=req.body.author_id;
    } else {
     return res.status(400).json({ error: "Не найден author_id в теле данных" });
    }


    const count = await prisma.upvot.count({
      where: {
        post_id: post_id,
        author_id: author_id,
      }
    })

    if (count>0) {
      return res.status(400).json({ error: "Уже есть такие данные author_id,post_id в базе данных" });
    }

    const newUpvot = await prisma.upvot.create({
      data: {
        post_id ,author_id,
      },
    });
    res.status(200).json(newUpvot);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



const getUpvotF = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Upvot = await prisma.upvot.findMany({
      select: {
        id: true,
        post_id: true,
        author_id: true,
        user: {
          select: {
            id: true,
            email: true,
            avatar: true
          }
        },
        feedbeek: {
          select: {
            id: true,
            title: true,
            description: true,
            category: true,
            status: true
          }
        }
      },
      where: {
        post_id: Number(id),
      },
    });
    res.status(200).json(Upvot);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getUpvotU = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Upvot = await prisma.upvot.findMany({
      select: {
        id: true,
        post_id: true,
        author_id: true,
        user: {
          select: {
            id: true,
            email: true,
            avatar: true
          }
        },
        feedbeek: {
          select: {
            id: true,
            title: true,
            description: true,
            category: true,
            status: true
          }
        }
      },
      where: {
        author_id: Number(id),
      },
    });
    res.status(200).json(Upvot);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



const getUpvotCount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;   


    const Upvot = await prisma.upvot.count({
      where: {
        post_id: Number(id),
      }
    })

  res.status(200).json({post_id: id, count: Upvot});
  } catch (e) {
    res.status(500).json({ error: e });
  }
};


export default {
	
  upvotPost,
  getUpvotF,
  getUpvotU,
  getUpvotCount,
  
	
  
};


