export default function sum(a: number, b: number) {
  return a + b;
}


export function isPalindrome(str: string) {
  if (str === "") {
    return false;
  }
  return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}