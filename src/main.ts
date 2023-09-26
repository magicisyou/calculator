window.addEventListener("DOMContentLoaded", () => {
  let key1: HTMLElement | null = document.getElementById("key1");
  if (key1 != null) {
    key1.onclick = () => {
      keyPress("1");
    };
  }
  let key2: HTMLElement | null = document.getElementById("key2");
  if (key2 != null) {
    key2.onclick = () => {
      keyPress("2");
    };
  }
  let key3: HTMLElement | null = document.getElementById("key3");
  if (key3 != null) {
    key3.onclick = () => {
      keyPress("3");
    };
  }
  let key4: HTMLElement | null = document.getElementById("key4");
  if (key4 != null) {
    key4.onclick = () => {
      keyPress("4");
    };
  }
  let key5: HTMLElement | null = document.getElementById("key5");
  if (key5 != null) {
    key5.onclick = () => {
      keyPress("5");
    };
  }
  let key6: HTMLElement | null = document.getElementById("key6");
  if (key6 != null) {
    key6.onclick = () => {
      keyPress("6");
    };
  }
  let key7: HTMLElement | null = document.getElementById("key7");
  if (key7 != null) {
    key7.onclick = () => {
      keyPress("7");
    };
  }
  let key8: HTMLElement | null = document.getElementById("key8");
  if (key8 != null) {
    key8.onclick = () => {
      keyPress("8");
    };
  }
  let key9: HTMLElement | null = document.getElementById("key9");
  if (key9 != null) {
    key9.onclick = () => {
      keyPress("9");
    };
  }
  let key0: HTMLElement | null = document.getElementById("key0");
  if (key0 != null) {
    key0.onclick = () => {
      keyPress("0");
    };
  }
  let keyPlus: HTMLElement | null = document.getElementById("key-plus");
  if (keyPlus != null) {
    keyPlus.onclick = () => {
      keyPress("+");
    };
  }
  let keyMinus: HTMLElement | null = document.getElementById("key-minus");
  if (keyMinus != null) {
    keyMinus.onclick = () => {
      keyPress("-");
    };
  }
  let keyDivide: HTMLElement | null = document.getElementById("key-divide");
  if (keyDivide != null) {
    keyDivide.onclick = () => {
      keyPress("/");
    };
  }
  let keyMult: HTMLElement | null = document.getElementById("key-mult");
  if (keyMult != null) {
    keyMult.onclick = () => {
      keyPress("*");
    };
  }
  let keyClear: HTMLElement | null = document.getElementById("key-clear");
  if (keyClear != null) {
    keyClear.onclick = () => {
      clearDisplay();
    };
  }
  let keyBack: HTMLElement | null = document.getElementById("key-back");
  if (keyBack != null) {
    keyBack.onclick = () => {
      backspace();
    };
  }
  let keyDot: HTMLElement | null = document.getElementById("key-dot");
  if (keyDot != null) {
    keyDot.onclick = () => {
      keyPress(".");
    };
  }
  let keyResult: HTMLElement | null = document.getElementById("key-result");
  if (keyResult != null) {
    keyResult.onclick = () => {
      result();
    };
  }
  let keyBracketOpen: HTMLElement | null =
    document.getElementById("key-bracket-open");
  if (keyBracketOpen != null) {
    keyBracketOpen.onclick = () => {
      keyPress("(");
    };
  }
  let keyBracketClose: HTMLElement | null =
    document.getElementById("key-bracket-close");
  if (keyBracketClose != null) {
    keyBracketClose.onclick = () => {
      keyPress(")");
    };
  }
});

let expression: string = "";

function update() {
  let display: HTMLElement | null = document.getElementById("display");
  if (display != null) {
    display.innerHTML = expression;
  }
}

function keyPress(keyValue: string) {
  expression += keyValue;
  update();
}

function clearDisplay() {
  expression = "";
  update();
}

function backspace() {
  expression = expression.substring(0, expression.length - 1);
  update();
}

function result() {
  let num = eval(expression);
  let display: HTMLElement | null = document.getElementById("display");
  if (display !== null && num != undefined) {
    expression = num;
    display.innerHTML = num;
  }
}
