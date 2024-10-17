// console.log("Task 1")
// setTimeout(()=> console.log("Task 2"), 3000)
// console.log("Task 3")

//sinkronus jadi berurutan lagi
const tryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Task 2");
    } else {
      reject("Task 2 Error");
    }
  }, 3000);
});

const myFunc = async () => {
  // gara gara ini ada async()
  console.log("Task 1");
  await tryPromise // dan ada await
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  //.finally(() => console.log("Finally Done"));
  console.log("Task 3");
};

// myFunc();

// const tryPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve("Task 2");
//       } else {
//         reject("Task 2 Error");
//       }
//     }, 3000);
//   });

//asinkronus tidak berurutan
//   const myFunc = () => {
//     console.log("Task 1");
//      tryPromise
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err))
//       //.finally(() => console.log("Finally Done"));
//     console.log("Task 3");
//   };

//   myFunc();

//CARA TRY CATCH (Sinkronus)
const tryCatch = async () => {
  try {
    console.log("Task 1");
    const res = await tryPromise;
    console.log(res);
    console.log("Task 3");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("finally done");
  }
};

//tryCatch();

const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};
getData();
