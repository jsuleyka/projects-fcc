//------------------------------------ Caja registradora --------------------------------//
// Diseña una función checkCashRegister() que acepte el precio de compra como primer
// argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en
// efectivo que tiene la caja (cid) como tercer argumento.

// cid es un arreglo 2D que enumera las monedas disponibles.

// La función checkCashRegister() siempre debe devolver un objeto con una clave status
// y una clave change.

// Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor
//  que el cambio necesario, o si no puedes devolver el cambio exacto.

// Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la
// clave change es igual al cambio que se debe entregar.

// En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a
//  entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave
//  change.

// Unidad Monetaria	Importe
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }

  let changeSum = cash * 100 - price * 100;
  let changeSumCheck = changeSum;
  let change = [];
  let status = '', cidSum = 0;
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

  filteredCid.forEach(elem => {
    let curr = elem[0];
    let currSum = elem[1] * 100;
    let amount = 0;
    cidSum += currSum;
  
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    }

    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return { 'status': status, 'change': change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
