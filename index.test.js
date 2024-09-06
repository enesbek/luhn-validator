const { luhnValidate } = require("./index");

test("validates correct Luhn numbers", () => {
  expect(luhnValidate("4532015112830366")).toBe(true); 
  expect(luhnValidate("1234567812345670")).toBe(true); 
});

test("fails invalid Luhn numbers", () => {
  expect(luhnValidate("4532015112830367")).toBe(false); 
  expect(luhnValidate("1234567812345671")).toBe(false); 
  expect(luhnValidate("12")).toBe(false); 
});
