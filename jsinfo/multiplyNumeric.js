let testOb = {
  first: "soup",
  second: 500,
}

function multiplyNumeric(obect) {
  for (props in obect) {
    if (typeof obect[props] === 'number') {
      obect[props] = (obect[props] * 2);
    }
  }
}

multiplyNumeric(testOb);

console.log(testOb);
