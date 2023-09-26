import { isPalindrome } from ".";

describe('palindrome', () => {
  it("should not have empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

});