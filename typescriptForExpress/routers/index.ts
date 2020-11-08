import express from "express";
import { Request, Response } from "express";
import { LottoNumberSetAndMakeArray } from "../lotto/lottoNumbers";
import { resultLotto } from "../lotto/lottoNumbers";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("index page");
});

// draw
// prize

router.post("/lotto", async (req: Request, res: Response) => {
  const lottoNumberInterface = req.body;
  const lottoNumberClass: LottoNumberSetAndMakeArray = new LottoNumberSetAndMakeArray(
    parseInt(lottoNumberInterface.first),
    parseInt(lottoNumberInterface.second),
    parseInt(lottoNumberInterface.third),
    parseInt(lottoNumberInterface.fourth),
    parseInt(lottoNumberInterface.fifth)
  );
  const prizeLottoNumbers: number[] = req.session?.prizeLottoNumbers;
  const drawLottoNumbers: number[] = lottoNumberClass.makeArray();
  res.status(200).json({
    message: await resultLotto(prizeLottoNumbers, drawLottoNumbers),
    prizeLottoNumbers,
  });
});

export default router;