var convertWeight = function (number, unit){
  if(unit === "kilos"){
    return number*2.20462 + ' ' + "kilos";
  }else if(unit === "pounds"){
    return number*0.45392 + ' ' + "pounds";
  }
};

// step 3: make a Math.roundTo function for answer that rounds to specificied position
Math.roundTo = functions(number, positions) {
  Number(Math.round(Number(number + "e" + positions)) + "e" + positions * -1);
};

console.log(convertWeight(100, "kilos"));
