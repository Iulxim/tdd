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

  it("should check if sentences like 'Was It A Rat I Saw' is palindrome", () => {
    expect(isPalindrome("Was It A Rat I Saw")).toBe(true)
  })

  it("should check if sentences like 'Never Odd or Even' is palindrome", () => {
    expect(isPalindrome("Never Odd or Even")).toBe(true);
  })

});