function convert(str: string) {
  const getcolumn = str
    .split("")
    .reduce((alpha2, alpha1) => alpha2 * 26 + parseInt(alpha1, 36) - 9, 0); // akumulator dimulai dari angka 0
  return getcolumn;
}

console.log(convert("AAA"));
