//const type: string | number | boolean = "hello"
const type:any = "hello"
if( typeof type == "string"){
    console.log("1")
}else if (typeof type == "number"){
    console.log("2")
}else{
    console.log("3")
}


// const type:any = "hello"
// const typeinput :string = typeof type 
// console.log(typeinput == "string" ? 1 : typeinput == "number" ? 2 :3)
