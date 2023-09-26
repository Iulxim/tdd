export default function sum(a: number, b: number) {
  return a + b;
}


export function isPalindrome(str: string) {
  if (str === "") {
    return false;
  }
  const strLowerCase = str.replace(/\s/g, '').toLowerCase();
  return strLowerCase === strLowerCase.split('').reverse().join('');
}