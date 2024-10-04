const letter: string = "Hello@ Stu?dent Purwa4dhika"
console.log(letter.replace(/[^a-zA-Z\s]/g, ""))

// \s artinya spasi
// [^a-zA-Z] a-z kapital dan non kapital only (^ artinya negasi)
// /g secara global
//, "" pindahkan ke string kosong

// [^a-zA-Z0-9] artinya a-z kapital dan non kapital juga 0-9 dimasukin

// kalo karakternya saja [a-zA-Z\s]/g,"" sehingga output "@ ? 4"