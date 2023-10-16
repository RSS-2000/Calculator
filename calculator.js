let sum = '';
let znack = '';
let a = '';
let b = '';
let sign = '';
let screen = '';
let out_sreen = '';

function functOnclick(znack) {
  if (b === "" && sign === "" && znack !== '=' && znack !== '/' && znack !== 'x' && znack !== "%" && znack !== '**' && znack !== "+" && znack !== "-") {
    a += znack;
    out_sreen = a;
  }
  if (znack === "-" || znack === "+" || znack === "/" || znack === "x" || znack === '**' || znack === '%' && b === '' && a !== '') {
    sign = znack;
    out_sreen = sign;
  }
  if (a !== '' && sign !== '' && znack !== '=' && znack !== '/' && znack !== 'x' && znack !== "%" && znack !== '**' && znack !== "+" && znack !== "-") {
    b += znack;
    out_sreen = b;
  }

  if (znack === '=' && a !== '' && b !== '') {
    if (sign === "+") {
      sum = +a + +b;
    } else if (sign == "-") {
      sum = a - b;
    } else if (sign == "x") {
      sum = a * b;
    } else if (sign == "/") {
      sum = a / b;
    } else if (sign == '%') {
      sum = a % b;
    } else if (sign == '**') {
      sum = a ** b
    } else { sum = "Error +-/x " };
    out_sreen = sum;
    a = sum;
    b = '';
  }

  console.log("a: " + a);
  console.log("b: " + b);
  console.log("c: " + sign)
  console.log(sum)
  myFun(out_sreen)

}

function myFun(out_sreen) {
  screen = out_sreen;
  document.querySelector('.screen_aut').innerHTML = screen;
}

function clear_ac() {
  sum = '';
  znack = '';
  a = '';
  b = '';
  sign = '';
  screen = '';
  out_sreen = '';
  document.querySelector('.screen_aut').innerHTML = 0;
};












