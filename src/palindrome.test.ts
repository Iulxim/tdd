import { palindrome } from ".";

describe('palindrome', () => {
  it("should not have empty string", () => {
    expect(palindrome("")).toBe("Your input should not be an empty string");
  });
});