const {
  CPFValidator,
  passwordValidator,
  emailValidator,
  isAPositiveNumber,
} = require("../../src/helpers/validates");
const assert = require("chai").assert;

describe("Validate password", () => {
  it(' "T3sting@" should be true', () => {
    const expectedResult = true;
    assert.equal(passwordValidator("T3sting@"), expectedResult);
  });

  it(' "123456789" should be false', () => {
    const expectedResult = false;
    assert.equal(passwordValidator("123456"), expectedResult);
  });

  it(' "abcdefgh" should be false', () => {
    const expectedResult = false;
    assert.equal(passwordValidator("abcdefgh"), expectedResult);
  });

  it(' "lahe93ge" should be false', () => {
    const expectedResult = false;
    assert.equal(passwordValidator("lahe93ge"), expectedResult);
  });

  it(" !@asdfgh should be false", () => {
    const expectedResult = false;
    assert.equal(passwordValidator("!@asdfgh"), expectedResult);
  });
});

describe("Validate e-mail", () => {
  it('"example@gmail.com"should be true', () => {
    const expectedResult = true;
    assert.equal(emailValidator("example@gmail.com"), expectedResult);
  });

  it('"example.com" should be false', () => {
    const expectedResult = false;
    assert.equal(emailValidator("example.com"), expectedResult);
  });

  it('"example@gmail" should be false', () => {
    const expectedResult = false;
    assert.equal(emailValidator("example@gmai"), expectedResult);
  });

  it('"validemail123" should be false', () => {
    const expectedResult = false;
    assert.equal(emailValidator("validemail123"), expectedResult);
  });
});

describe("Validate CPF", () => {
  it('"12345678909" should be true', () => {
    const expectedResult = true;
    assert.equal(new CPFValidator("12345678909").validate(), expectedResult);
  });

  it('"123.456.789-09" should be true', () => {
    const expectedResult = true;
    assert.equal(new CPFValidator("123.456.789-09").validate(), expectedResult);
  });

  it('"317.741.843-89" should be false', () => {
    const expectedResult = false;
    assert.equal(new CPFValidator("1234567900").validate(), expectedResult);
  });

  it('"11111111111" should be false', () => {
    const expectedResult = false;
    assert.equal(new CPFValidator("11111111111").validate(), expectedResult);
  });

  it("12345678911 should be false", () => {
    const expectedResult = false;
    assert.equal(new CPFValidator(12345678911).validate(), expectedResult);
  });
});

describe("Validate positive number", () => {
  it("1 should be true", () => {
    const expectedResult = true;
    assert.equal(isAPositiveNumber(1), expectedResult);
  });

  it("1000 should be true", () => {
    const expectedResult = true;
    assert.equal(isAPositiveNumber(1000), expectedResult);
  });

  it('"100" should be false', () => {
    const expectedResult = false;
    assert.equal(isAPositiveNumber("100"), expectedResult);
  });

  it("-1 should be false", () => {
    const expectedResult = false;
    assert.equal(isAPositiveNumber(-1), expectedResult);
  });

  it('"A" should be false', () => {
    const expectedResult = false;
    assert.equal(isAPositiveNumber("A"), expectedResult);
  });
});
