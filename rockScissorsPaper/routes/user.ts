import express from "express";
import { Request, Response } from "express";
import fs from "fs";

const router: express.Router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const { header, mainText, link} = req.body;
  console.log(header, mainText, link);
  fs.writeFile("./test.txt", 
  `${header}\n${mainText}\n${link}`, 
  (e) => {
    if(e) {
      console.error(e);
    }
  });
  res.json({
    header,
    mainText,
    link
  });
});

router.get("/", (req: Request, res: Response) => {
  fs.readFile("test.txt", "utf8", (err, data) => {
    console.log(data);
    res.send(data);
  });
});

export default router;