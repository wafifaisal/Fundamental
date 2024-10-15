function myFunc(s: string, t: string) {
  s.toLowerCase();
  t.toLowerCase();
  for (let i = 0; i < t.length; i++) {
    if (s.includes(t.charAt(i))) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(myFunc("anagram", "nagaram"));
