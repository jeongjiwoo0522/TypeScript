type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if(easing === "ease-in") {

    } else if(easing === "ease-out") {

    } else if(easing === "ease-in-out") {

    } else {

    }
  }
}

let button = new UIElement();

button.animate(0, 0, "ease-in-out");
button.animate(0, 0, "ease-out");
//button.animate(0, 0, "uneasing"); error throw 

function rollDice(): 1 | 2 | 3 {
  return (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;
}

const result = rollDice(); 
console.log(result);
