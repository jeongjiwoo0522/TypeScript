import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import { Request, Response, NextFunction } from "express";

import indexRouter from "./routers/index";
import userRouter from "./routers/user";

const app: express.Application = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "NOT FOUND",
  });
});

app.listen(3000);
