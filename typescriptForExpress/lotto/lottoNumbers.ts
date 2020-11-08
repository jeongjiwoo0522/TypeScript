interface LottoNumbers {
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
};

class Lotto implements LottoNumbers {
  constructor(
    public first: number,
    public second: number,
    public third: number,
    public fourth: number,
    public fifth: number
  ) {} 
  public makeArray (): number[] {
    return [this.first, this.second, this.third, this.fourth, this.fifth];
  }
}

const makePrizeLottoNumbers = (): number[] => {
  let prizeLottoNumbers: number[] = [];
  for(let i=0; i<5; i++){
    prizeLottoNumbers.push(
      Math.floor(Math.random() * (10))
    )
  }
  return prizeLottoNumbers;
}

const resultLotto = async (prizeLottoNumbers: number[], drawLottoNumebrs: number[]): Promise<string> => {
  let prizeCount: number = 0;
  prizeLottoNumbers.forEach((przNum: number, index: number): void => {
    if(przNum === drawLottoNumebrs[index]) {
      prizeCount++;
    }
  });

  switch (prizeCount) {
    case 1:
      return "5등";
    case 2:
      return "4등";
    case 3:
      return "3등";
    case 4:
      return "2등";
    case 5:
      return "1등";
    default:
      return "꽝";
  }
}

export { Lotto as LottoNumberSetAndMakeArray };
export { makePrizeLottoNumbers, resultLotto };
export default LottoNumbers;