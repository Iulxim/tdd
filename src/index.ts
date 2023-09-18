export default function sum(a: number, b: number) {
  return a + b;
}


export function palindrome(str: string) {
  if (str === "") {
    return 'Your input should not be an empty string';
  }
  const trimmedString = str.trim();
  const lowerCaseString = trimmedString.toLowerCase();

  return lowerCaseString;
}