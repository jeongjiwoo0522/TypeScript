import express from "express";
import { Request, Response } from "express";
import { whoIsWiner, calcPercent } from "../rockScissorsPaper";
const router: express.Router = express.Router();

router.post("/whoIsWinner", (req: Request, res: Response) => {
  const userValueString: string = req.body.value;
  let userValue: number;
  switch (userValueString) {
    case "가위":
      userValue = 0;
      break;
    case "바위":
      userValue = 1;
      break;
    case "보":
      userValue = 2;
      break;
    default:
      userValue = 10;
  }
  let message: string;
  let value: string;
  const ComputerValue: number = calcPercent.randomValue();
  switch(ComputerValue) {
    case 0:
      value = "가위";
      break;
    case 1:
      value = "바위";
      break;
    case 2:
      value = "보";
      break;
    default:
      value = "없어";
  }
  switch(whoIsWiner(userValue, ComputerValue)) {
    case 0:
      message = `비겼다`;
      break;
    case 1:
      message = `이겼다`;
      break;
    case 2:
      message = `졌다`;
      break;
    default:
      message = `몰라`;
  }
  res.json({
    value,
    message,
  })
});


export default router;