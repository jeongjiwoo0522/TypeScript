interface RSP {
  (firstOne: number, secondOne: number): number;
}

class calcPercent {
  static decidePercent(): number {
    const persent = Math.floor(Math.random() * 100);
    return persent;
  }
  static randomValue(): number {
    return Math.floor(Math.random() * 3);
  }
}

// 1: fist win
// 2: second win
// 0: same

// 0: 가위
//1: 바위
//2: 보
const RSPAlgorithm: RSP = (firstOne: number, secondOne: number): number => {
  if(firstOne === secondOne) { // 3
    return 0;
  } else if(firstOne === 0 && secondOne === 2) { // 1
    return 1;
  } else if(firstOne === 2 && secondOne === 0) { // 1
    return 2;
  } else if(firstOne < secondOne){ // 2
    return 2;
  } else if(firstOne > secondOne) { // 2
    return 1;
  } else {
    return 10;
  }
}

const whoIsWiner: RSP = (firstOne: number, secondOne: number): number => {
  return RSPAlgorithm(firstOne, secondOne);
}

export { RSP };
export { calcPercent };
export { whoIsWiner };
