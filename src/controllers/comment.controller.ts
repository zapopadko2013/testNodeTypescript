import { Request, Response } from "express";
import { prisma } from "../server";

const commentPost = async (req: Request, res: Response) => {
  try {
    // const { content, author_id,post_id,parent_comment_id } = req.body;
    var content, author_id,post_id,parent_comment_id

    if (typeof req.body.content !== "undefined" && req.body.content !== null) {
      content=req.body.content;
    }
    if (typeof req.body.author_id !== "undefined" && req.body.author_id !== null) {
      author_id=req.body.author_id;
    }
    if (typeof req.body.post_id !== "undefined" && req.body.post_id !== null) {
      post_id=req.body.post_id;
    }
    if (typeof req.body.parent_comment_id !== "undefined" && req.body.parent_comment_id !== null) {
      parent_comment_id=req.body.parent_comment_id;
    }

    const newComment = await prisma.comment.create({
      data: {
        content, author_id,post_id,parent_comment_id ,
      },
    });
    res.status(200).json(newComment);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



const getComments = async (req: Request, res: Response) => {
  try {
    var _page, _limit, _sort, _order;

    if (typeof req.query.page !== "undefined" && req.query.page !== null) {
      _page=req.query.page;
    }
    if (typeof req.query.limit !== "undefined" && req.query.limit !== null) {
      _limit=req.query.limit;
    }
    if (typeof req.query.sort !== "undefined" && req.query.sort !== null) {
      _sort=req.query.sort;
    }
    if (typeof req.query.order !== "undefined" && req.query.order !== null) {
      _order=req.query.order;
    }
    const limit = +(_limit ?? 20);
    const offset = (+(_page ?? 1) -1 ) * limit;
    const sort = (_sort ?? 'id').toString();
    const order = _order ?? 'asc';

    const orderBy = {[sort]: order};

    const Comments = await prisma.comment.findMany({
      select: {
        id: true,
        content: true,
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
      orderBy,
      skip: offset,
      take: limit
      
    });
    res.status(200).json(Comments);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Comment = await prisma.comment.findUnique({
      
      select: {
          id: true,
          content: true,
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
        id: Number(id),
      },
    });
    res.status(200).json(Comment);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateComment = async (req: Request, res: Response) => {
  try {
    var content, author_id,post_id,parent_comment_id, id
 
    if (typeof req.body.content !== "undefined" && req.body.content !== null) {
      content=req.body.content;
    }
    if (typeof req.body.author_id !== "undefined" && req.body.author_id !== null) {
      author_id=req.body.author_id;
    }
    if (typeof req.body.post_id !== "undefined" && req.body.post_id !== null) {
      post_id=req.body.post_id;
    }
    if (typeof req.body.parent_comment_id !== "undefined" && req.body.parent_comment_id !== null) {
      parent_comment_id=req.body.parent_comment_id;
    }
    if (typeof req.body.id !== "undefined" && req.body.id !== null) {
      id=req.body.id;
    } else {
      return res.status(400).json({ error: "Не найден id в теле данных" });
    }

    const updatedComment = await prisma.comment.update({
      where: {
        id: Number(id),
      },
      data: {
        content, author_id,post_id,parent_comment_id ,
      },
    });
    res.status(200).json(updatedComment);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedComment = await prisma.comment.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedComment);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};




export default {
	
  commentPost,
  getComments,
  getComment,
  updateComment,
  deleteComment,
  
	
  
};
