export default function sum(a: number, b: number) {
  return a + b;
}


export function palindrome(str: string) {
  if (str === "") {
    return 'Your input should not be an empty string';
  }

  const reversedString = str.split('').reverse().join('');

  return reversedString;
}