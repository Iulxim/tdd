import { isPalindrome } from ".";

describe('palindrome', () => {
  it("should not have empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("wow should be a palindrom", () => {
    expect(isPalindrome("wow")).toBe(true);
  });

  it("mom should be a palindrom", () => {
    expect(isPalindrome("mom")).toBe(true)
  });

  it("bill should not be a palindrom", () => {
    expect(isPalindrome("bill")).toBe(false);
  })

  it("should check for casing", () => {
    expect(isPalindrome("Mom")).toBe(true)
  })

});