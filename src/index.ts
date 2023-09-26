export default function sum(a: number, b: number) {
  return a + b;
}


export function isPalindrome(str: string) {
  if (str === "") {
    return false;
  }
  return str === str.split('').reverse().join('');
}