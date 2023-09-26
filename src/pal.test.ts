import { palindrome } from ".";

describe('palindrome', () => {
  it("should not have empty string", () => {
    expect(palindrome("")).toBe(false);
  });

});