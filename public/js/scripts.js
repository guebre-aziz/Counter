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
