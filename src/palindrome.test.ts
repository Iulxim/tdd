import { palindrome } from ".";

describe('palindrome', () => {
  it("should not have empty string", () => {
    expect(palindrome("")).toBe("Your input should not be an empty string");
  });

  it("Input should be lowerCase", () => {
    expect(palindrome("PALINdrome")).toBe("palindrome");
  });

  it("should be trimmed for spaces", () => {
    expect(palindrome(" Palindrome ")).toBe("palindrome");
  });

  it("should be reversed", () => {
    expect(palindrome("palindrome")).toBe("emordnilap");
  })
});