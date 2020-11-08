import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import session from "express-session";
import cors from "cors";

import { Request, Response, NextFunction } from "express";

import indexRouter from "./routers/index";

import { makePrizeLottoNumbers } from "./lotto/lottoNumbers";

const app: express.Application = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(session({
  secret: "asdfafsd",
  resave: false,
  saveUninitialized: false,
}));

app.use((req: Request, res: Response, next: NextFunction) => {
  if(req.session?.prizeLottoNumbers) {
    next();
  } else {
    req.session!.prizeLottoNumbers = makePrizeLottoNumbers();
    console.log(req.session?.prizeLottoNumbers);
    next();
  }
});

app.use("/", indexRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "NOT FOUND",
  });
});

app.listen(3000);
