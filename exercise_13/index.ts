// import { myFunc } from "./sum"; // manggil dalam direktori
// import {myFunc} from "../sum" // manggil diluar direktori

// console.log(myFunc(10, 5));

import { arrNum } from "./sum";

arrNum.forEach((item) => {
  console.log(item);
  arrNum.push(item + 1);
});
