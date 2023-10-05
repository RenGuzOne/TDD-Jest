const practice = require("./practice");

test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
    expect(practice.capitalize("this is a test")).toBe("This a test");
});

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(practice.reverseString("this is a test")).toBe("tset a si siht");
});