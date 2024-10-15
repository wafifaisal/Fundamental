function convert(str: string) {
  const column = str
    .split("")
    .reduce((alpha2, alpha1) => alpha2 * 26 + parseInt(alpha1, 36) - 9, 0); // akumulator dimulai dari angka 0
  return column;
}

console.log(convert("AAA"));
