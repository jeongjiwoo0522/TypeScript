import * as _ from "lodash";

class Startup {
  public static main(): number {
    const group = _.groupBy(['one', 'two', 'three'], 'length');
    console.log(group);
    return 0;
  };
};

Startup.main();

interface context {
  name: string;
}

class name implements context {
  constructor(
    public name: string
  ) {
    this.x = null;
  }
  public x: string | number | null;
}

const newName: context = {
  name: "ksfd",
};