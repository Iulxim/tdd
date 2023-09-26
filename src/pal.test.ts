import { isPalindrome } from ".";

describe('palindrome', () => {
  it("should not have empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("wow should be a palindrom", () => {
    expect(isPalindrome("wow")).toBe(true);
  });

});