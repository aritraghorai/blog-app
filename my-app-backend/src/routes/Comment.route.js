import { Router } from "express";
import commentControler from "../controllers/comment.controler.js";
import { userExtractMiddleware } from "../middleware/userExtract.middleware.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(commentControler.getAllComments)
  .post(userExtractMiddleware, commentControler.addNewComment);

export default router;
