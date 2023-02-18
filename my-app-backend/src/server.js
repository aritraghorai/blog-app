import express from "express";
import connectDb from "./utils/db.js";
import ArticleRouter from "./routes/Article.route.js";
import cors from "cors";
import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const credentials = JSON.parse(
  fs.readFileSync(path.resolve("authFirebase.json"))
);

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();

app.use(cors());
app.use(express.json());
connectDb();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.use("/api/article", ArticleRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
