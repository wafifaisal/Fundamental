/* input str = "Purwadhika Bandung"
    n = 10
    output : "Purwadhika..."

    str = "Purwadhika Bandung"
    n = 15
    output: "Purwadhika Band..."
*/

function Maxchart(str:string,n:number){
    const arr : string[] = str.split("")
    // console.log(arr.length)
    if (arr.length > n){
        return console.log(arr.splice(0, n).join("") + "...")
    } else{
        return console.log(arr.join(""))
    }

}
Maxchart("Purwadhika Bandung",10)



//str.substring(0,n) // untuk string
//str.slice(0,n) // untuk string
//str.splice(0,n)// untuk string[]