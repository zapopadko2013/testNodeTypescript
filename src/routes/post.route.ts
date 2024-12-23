import express from "express";
import UserController from "../controllers/user.controller";
import FeedbackController from "../controllers/feedback.controller";
import CommentController from "../controllers/comment.controller";
import UpvotController from "../controllers/upvot.controller";


const router = express.Router();


router.post("/user/create", UserController.userPost);
router.get("/user/getall", UserController.getUsers);
router.get("/user/get/:id", UserController.getUser);
router.put("/user/update", UserController.updateUser);
router.delete("/user/delete/:id", UserController.deleteUser);
router.delete("/user/deleteall", UserController.deleteAllUser);
router.put("/user/updatepart", UserController.updateUserPart);


router.post("/feedback/create", FeedbackController.feedbackPost);
router.get("/feedback/getall", FeedbackController.getFeedbacks);
router.get("/feedback/get/:id", FeedbackController.getFeedback);
router.put("/feedback/update", FeedbackController.updateFeedback);
router.delete("/feedback/delete/:id", FeedbackController.deleteFeedback); 
router.get("/feedback/getcategory", FeedbackController.getFeedbacksCategory);
router.get("/feedback/getstatus", FeedbackController.getFeedbacksStatus);
router.get("/feedback/getcategoryfind", FeedbackController.getFeedbacksCategoryFind);
router.get("/feedback/getstatusfind", FeedbackController.getFeedbacksStatusFind);


router.post("/comment/create", CommentController.commentPost);
router.get("/comment/getall", CommentController.getComments);
router.get("/comment/get/:id", CommentController.getComment);
router.put("/comment/update", CommentController.updateComment);
router.delete("/comment/delete/:id", CommentController.deleteComment); 

router.post("/upvot/create", UpvotController.upvotPost);
router.get("/upvot/getf/:id", UpvotController.getUpvotF);
router.get("/upvot/getu/:id", UpvotController.getUpvotU);
router.get("/upvot/getcount/:id", UpvotController.getUpvotCount);


export default router;
