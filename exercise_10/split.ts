/*
    input = "helloWorld"
    output = ["hello", "World"] // by character uppercase

    input = "johnDoeMiller"
    output = ["john", "Doe", "Miller"]
*/

function splitUpper(str: string) {
  return str.split(/(?=[A-Z])/);
}

console.log(splitUpper("johnDoeMiller"));
