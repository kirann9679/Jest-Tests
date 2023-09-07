const {
  float,
  check,
  ob,
  display,
  subtract,
  multiply,
  add,
  arrayCheck,
} = require("./operations");
test("Multiply 5 with 6 results 30", () => {
  expect(multiply(5, 6)).toBe(30);
});
test("Add 5 with 6 results 30", () => {
  expect(add(5, 6)).toBe(11);
});
test("subtract 5 with 6 results -1", () => {
  expect(subtract(5, 6)).toBe(-1);
});
test("display is good", () => {
  expect(display()).toMatch(/^ok/);
});
test("object check", () => {
  expect(ob()).toEqual({ name: "kiran", age: 24 });
});
test("No zero values", () => {
  expect(check(1, 2, 2)).not.toBe(0);
});
test("float values", () => {
  expect(float(0.9, 0.3)).toBeCloseTo(0.6001);
});
test("checking array elements", () => {
  expect(arrayCheck([1, 2, 3, 5, 8, 9, 10])).toContain(9, 10);
});
