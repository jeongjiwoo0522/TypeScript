class ArrayList<T> {
  private arrayList: (T | number)[] = [];
  public add(indexOrValue: T | number, value?: T) {
    if(typeof indexOrValue === "number") {
      this.arrayList.splice(indexOrValue, 0, value!);
    } else {
      this.arrayList.push(indexOrValue);
    }
  }
  public remove(index: number) {
    this.arrayList.splice(index, 1);
  }
  public addAll(elements: T[]) {
    this.arrayList = [...this.arrayList, ...elements];
  }
  public get(index: number): T | number {
    return this.arrayList[index];
  }
  public clear() {
    this.arrayList = [];
  }
  public isEmpty(): boolean {
    if(this.arrayList.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  public set(index: number, value: T) {
    this.arrayList[index] = value;
  }
  public toArray(): (T | number)[] {
    return this.arrayList;
  }
  public size(): number {
    return this.arrayList.length;
  }
}

const aList: ArrayList<string> = new ArrayList<string>();

console.log(aList);

aList.add("a");
aList.add("b");
aList.add("c");
console.log(aList.toArray());

aList.add(1, "hi");
console.log(aList.toArray());

aList.remove(1);
console.log(aList.toArray());

aList.addAll(["d", "e"]);
console.log(aList.toArray());

console.log(aList.get(2));

console.log(aList.size());  
aList.clear();
console.log(aList.toArray());
console.log(aList.isEmpty());