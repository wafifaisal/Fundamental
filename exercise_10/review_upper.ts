function myFunc(str: string) {
  const letter = str.replace(/[\s/0-9]/g, "");
  const lower = str.replace(/[A-Z]/g, "");
  return [lower.length, letter.length - lower.length];
}

console.log(myFunc("B4ndung"));
console.log(myFunc("Hello Purwadhika"));
