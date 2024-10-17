//Callback adalah metode untuk membuat suatu function sebagai argumen untuk memanggil function lain

function displayer(something: any) {
  console.log(something);
}

function multiplyer(num: number) {
  console.log(num * 2);
}

function calculator(a: number, b: number, callback: (x: any) => void) {
  callback(a * b);
}
calculator(10, 5, multiplyer);
