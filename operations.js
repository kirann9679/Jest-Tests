function multiply(a, b) {
  return a * b;
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function display() {
  return "ok..working";
}
function ob() {
  return { name: "kiran", age: 24 };
}
function check(a, b, c) {
  return a + b - c;
}
function float(a, b) {
  return a - b;
}
function arrayCheck(x) {
  return x.filter((x) => x > 6);
}
module.exports = {
  arrayCheck,
  float,
  check,
  ob,
  display,
  multiply,
  add,
  subtract,
};
