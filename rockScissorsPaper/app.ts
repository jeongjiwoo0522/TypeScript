import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";

import { Request, Response, NextFunction } from "express";
import { calcPercent } from "./rockScissorsPaper";
import indexRouter from "./routes";

const app: express.Application = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "secret"
}));
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  req.session!.percent = calcPercent.decidePercent();
  next();
});

app.use("/", indexRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "NOT FOUND",
  });
});

app.listen(8000);


