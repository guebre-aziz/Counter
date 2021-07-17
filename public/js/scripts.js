// Creating MAIN DIV
let elemMainDiv = document.createElement("div");
    elemMainDiv.className = "mainDiv";
    document.body.append(elemMainDiv);

// Creating Counter text div
let elemCounterTextDiv = document.createElement("div");
    elemCounterTextDiv.className = "counterTextDiv";
    elemMainDiv.append(elemCounterTextDiv);

// Creating Counter text
let elemCounterText = document.createElement("p");
    elemCounterText.setAttribute("id", "counterTextId");
    elemCounterTextDiv.prepend(elemCounterText);

// Creating buttons div
let elemButtonsDiv = document.createElement("div");
    elemButtonsDiv.setAttribute("id", "buttonsDivId");
    elemCounterTextDiv.append(elemButtonsDiv);

// Start Creating buttons in buttons div (elemButtonsDiv)
    // Creating reset button
    let elemResetButton = document.createElement("button");
        elemResetButton.textContent = "Reset";
        elemResetButton.id = "resetButtonId";
        elemResetButton.className = "resetButton";
        elemButtonsDiv.prepend(elemResetButton);

    // Creating plus button
    let elemButtonPlus = document.createElement("button");
        elemButtonPlus.textContent = "+";
        elemButtonPlus.id = "buttonPlusId";
        elemButtonPlus.className = "myButton";
        elemButtonsDiv.append(elemButtonPlus);

    // Creating minus button
    let elemButtonMinus = document.createElement("button");
        elemButtonMinus.textContent = "-";
        elemButtonMinus.id = "buttonMinusId";
        elemButtonMinus.className = "myButton";
        elemButtonsDiv.append(elemButtonMinus);

    // Creating input field
    let elemRefValue = document.createElement("input");
        elemRefValue.id = "refValueId";
        elemRefValue.type = "number";
        elemButtonsDiv.append(elemRefValue);

// End Creating buttons in elemButtonsDiv

refValueId.value = 1;       // set default operation reference value to 1
counterTextId.innerHTML = 0; // set default couter value to 0
let result = 0;

function calculate(){
  let operationValue = refValueId.value;
  if (event.target.id == "buttonPlusId"){
    result += +operationValue;
  }
  if (event.target.id == "buttonMinusId"){
    result -= +operationValue;
  }
  if (event.target.id == "resetButtonId"){
    result = 0;
  }
  counterTextId.innerHTML = result;
};

document.addEventListener("click", calculate);
