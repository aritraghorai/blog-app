import { Router } from "express";
import CommentRouter from "./Comment.route.js";
import ArticleController from "../controllers/article.controler.js";

const router = Router();

router.route("/").get(ArticleController.getAllArticle);
router.route("/:name").get(ArticleController.getArticleByName);

router.use("/:articleName/comment", CommentRouter);

export default router;
