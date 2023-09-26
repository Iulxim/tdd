export default function sum(a: number, b: number) {
  return a + b;
}


export function isPalindrome(str: string) {
  if (str === "") {
    return false;
  }
  const noSpacesRegExp = str.replace(/\s/g, ''); 
  const strLowerCase = noSpacesRegExp.toLowerCase();
  return strLowerCase === strLowerCase.split('').reverse().join('');
}