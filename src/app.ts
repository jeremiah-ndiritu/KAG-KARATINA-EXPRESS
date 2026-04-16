import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Express} from 'express';
import { checkOrigin } from './config/cors';
import fs from 'fs';
import path from 'path';

import authRouter from './routes/auth/signUpandIn';



const app: Express = express()


app.use(cors(
  {
    origin: checkOrigin,
    credentials: true
  }
))
app.use(cookieParser())
app.use(express.json())

app.use("/api", authRouter);

// Serve uploads statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const sermonsPath = path.join(__dirname, "store", "sermons.json");
const postsPath = path.join(__dirname, "store", "posts.json");
const membersPath = path.join(__dirname, "store", "members.json");

app.get("/", (req, res) => {
  res.send("<h1>App is running</h1>");
});
app.get("/api/sermons", (req, res) => {
  let contents = fs.readFileSync(sermonsPath) as unknown as string;
  res.json({sermons: JSON.parse(contents)});
});
app.get("/api/posts", (req, res) => {
  let buffer = fs.readFileSync(postsPath) as unknown as string;
  res.json({posts: JSON.parse(buffer)});
});


export default app;
