import { Request, Response } from "express";
import { prisma } from "../server";


const userPost = async (req: Request, res: Response) => {
  try {
    // const { email, password,avatar } = req.body;
    var   email, password,avatar ;
    if (typeof req.body.email !== "undefined" && req.body.email !== null) {
      email=req.body.email;
    }
    if (typeof req.body.password !== "undefined" && req.body.password !== null) {
      password=req.body.password;
    }
    if (typeof req.body.avatar !== "undefined" && req.body.avatar !== null) {
      avatar=req.body.avatar;
    }
    
    // console.log(req);

    const newUserPost = await prisma.user.create({
      data: {
        email,
        password,
		avatar,
      },
    });
    res.status(200).json(newUserPost);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const Users = await prisma.user.findMany();
    res.status(200).json(Users);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const User = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(User);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateUserPart = async (req: Request, res: Response) => {
  try {
    
    var   email, avatar,id ;
    if (typeof req.body.email !== "undefined" && req.body.email !== null) {
      email=req.body.email;
    }    
    if (typeof req.body.avatar !== "undefined" && req.body.avatar !== null) {
      avatar=req.body.avatar;
    }
    if (typeof req.body.id !== "undefined" && req.body.id !== null) {
      id=req.body.id;
    } else {
      return res.status(400).json({ error: "Не найден id в теле данных" });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email, avatar
      },
    });
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    
    var   email, password,avatar,id ;
    if (typeof req.body.email !== "undefined" && req.body.email !== null) {
      email=req.body.email;
    }
    if (typeof req.body.password !== "undefined" && req.body.password !== null) {
      password=req.body.password;
    }
    if (typeof req.body.avatar !== "undefined" && req.body.avatar !== null) {
      avatar=req.body.avatar;
    }
    if (typeof req.body.id !== "undefined" && req.body.id !== null) {
      id=req.body.id;
    } else {
      return res.status(400).json({ error: "Не найден id в теле данных" });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        email, avatar,password
      },
    });
    res.status(200).json(updatedUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(deletedUser);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const deleteAllUser = async (req: Request, res: Response) => {
  try {
    const deletedUsers = await prisma.user.deleteMany();
    res.status(200).json(deletedUsers);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};



export default {
	
  userPost,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  deleteAllUser,
  updateUserPart,
	
  
};
