export default function sum(a: number, b: number) {
  return a + b;
}


export function palindrome(str: string, reverse = false) {
  if (str === "") {
    return 'Your input should not be an empty string';
  }
  const trimmedString = str.trim();
  const lowerCaseString = trimmedString.toLowerCase();
  if (reverse) {
    return lowerCaseString.split("").reverse().join("");
  }
  return lowerCaseString;
}