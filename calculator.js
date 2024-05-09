const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".input");
const displayOutput = document.querySelector(".output");

let input = "";
let result = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const value = key.dataset.key;
    //selects each key and gives it the value of the data-key we set in the html

    if (value == "clear") {
      input = "";
      result = "";
      updateDisplay();
    } else if (value == "=") {
      try {
        result = calculate(input);
        if (result == "Infinity") {
          result = "Math Error : can't divide by 0";
        }
      } catch (error) {
        result = "ERROR";
      }

      updateDisplay();
    } else if (value == "backspace") {
      input = input.slice(0, -1);
      updateDisplay();
    } else if (value == "brackets") {
      if (
        input.indexOf("(") == -1 ||
        (input.indexOf("(") !== -1 &&
          input.indexOf(")") !== -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")"))
        //if the opening bracket doesnt exist or if a set of brackets do exist and the last bracket was a closing bracket then do this
      ) {
        input += "(";
        updateDisplay();
      } else if (
        (input.indexOf("(") !== -1 && input.indexOf(")") == -1) ||
        (input.indexOf("(") !== -1 &&
          input.indexOf(")") !== -1 &&
          input.lastIndexOf("(") > input.lastIndexOf(")"))
        //if an opening bracket does exist and a closing bracket doesnt exist or a set of brackets do exist and the last bracket is an opening bracket then do the following
      ) {
        input += ")";
        updateDisplay();
      }
    } else {
      input += value;
      updateDisplay();
    }
  });
});

function updateDisplay() {
  displayInput.textContent = input;
  displayOutput.textContent = result;
}

function calculate(calculation) {
  return eval(calculation);
}

document.addEventListener("keydown", (ev) => {
  if (ev.key == "Enter") {
    result = calculate(input);
    updateDisplay();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key == "Backspace") {
    input = input.slice(0, -1);
    updateDisplay();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key == "*") {
    input += "*";
    updateDisplay();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key == "/") {
    input += "/";
    updateDisplay();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key == "%") {
    input += "%";
    updateDisplay();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key == "+") {
    input += "+";
    updateDisplay();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key == "-") {
    input += "-";
    updateDisplay();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key == ".") {
    input += ".";
    updateDisplay();
  }
});
