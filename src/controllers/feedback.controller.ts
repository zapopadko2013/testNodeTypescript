import { Request, Response } from "express";
import { prisma } from "../server";

const feedbackPost = async (req: Request, res: Response) => {
  try {
    // const { title, description,category,author_id } = req.body;
    var   title, description,category,author_id,status ;

    if (typeof req.body.title !== "undefined" && req.body.title !== null) {
      title=req.body.title;
    }
    if (typeof req.body.description !== "undefined" && req.body.description !== null) {
      description=req.body.description;
    }
    if (typeof req.body.category !== "undefined" && req.body.category !== null) {
      category=req.body.category;
    }
    if (typeof req.body.author_id !== "undefined" && req.body.author_id !== null) {
      author_id=req.body.author_id;
    }
    if (typeof req.body.status !== "undefined" && req.body.status !== null) {
      status=req.body.status;
    }

    const newFeedback = await prisma.feedback.create({
      data: {
        title, description,category,author_id,status,
      },
    });
    res.status(200).json(newFeedback);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



const getFeedbacks = async (req: Request, res: Response) => {
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

    


    const Feedbacks = await prisma.feedback.findMany({

      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        status: true ,
        user: {
          select: {
            id: true,
            email: true,
            avatar: true
          }
        } 
      },
      orderBy,
      skip: offset,
      take: limit

    });
    res.status(200).json(Feedbacks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



const getFeedbacksCategory = async (req: Request, res: Response) => {
  try {
    const Feedbacks = await prisma.feedback.findMany({
      select: {
        id: true,
        category: true
      },
      distinct: ['category'] ,
    });
    res.status(200).json(Feedbacks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getFeedbacksStatus = async (req: Request, res: Response) => {
  try {
    const Feedbacks = await prisma.feedback.findMany({
      select: {
        id: true,
        status: true
      },
      distinct: ['status'] ,
    }
    );
    res.status(200).json(Feedbacks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};


const getFeedbacksCategoryFind = async (req: Request, res: Response) => {
  try {

    var   category_ ;

    
    if (typeof req.query.category !== "undefined" && req.query.category !== null) {
      category_=req.query.category;
    }
    

    const Feedbacks = await prisma.feedback.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        status: true,
        user: {
          select: {
            id: true,
            email: true,
            avatar: true
          }
        }
      },
      where: {
        category: String(category_),
      },
    }
    );
    res.status(200).json(Feedbacks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getFeedbacksStatusFind = async (req: Request, res: Response) => {
  try {

    var   status_ ;

    
    if (typeof req.query.status !== "undefined" && req.query.status !== null) {
      status_=req.query.status;
    }

    const Feedbacks = await prisma.feedback.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        status: true,
        user: {
          select: {
            id: true,
            email: true,
            avatar: true
          }
        }
      },
      where: {
        status: String(status_),
      },
    }
    );
    res.status(200).json(Feedbacks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getFeedback = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Feedback = await prisma.feedback.findUnique({
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        status: true,
        user: {
          select: {
            id: true,
            email: true,
            avatar: true
          }
        }
      },
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(Feedback);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateFeedback = async (req: Request, res: Response) => {
  try {
   

    var   title, description,category,author_id,id,status ;
    if (typeof req.body.title !== "undefined" && req.body.title !== null) {
      title=req.body.title;
    }
    if (typeof req.body.description !== "undefined" && req.body.description !== null) {
      description=req.body.description;
    }
    if (typeof req.body.category !== "undefined" && req.body.category !== null) {
      category=req.body.category;
    }
    if (typeof req.body.author_id !== "undefined" && req.body.author_id !== null) {
      author_id=req.body.author_id;
    }
    if (typeof req.body.status !== "undefined" && req.body.status !== null) {
      status=req.body.status;
    }
    if (typeof req.body.id !== "undefined" && req.body.id !== null) {
      id=req.body.id;
    } else {
      return res.status(400).json({ error: "Не найден id в теле данных" });
    }

    const updatedFeedback = await prisma.feedback.update({
      where: {
        id: Number(id),
      },
      data: {
        title, description,category,author_id,status,
      },
    });
    res.status(200).json(updatedFeedback);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteFeedback = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedFeedback = await prisma.feedback.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedFeedback);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};




export default {
	
  feedbackPost,
  getFeedbacks,
  getFeedback,
  updateFeedback,
  deleteFeedback,
  getFeedbacksCategory,
	getFeedbacksStatus,
  getFeedbacksCategoryFind,
  getFeedbacksStatusFind,
  
};
