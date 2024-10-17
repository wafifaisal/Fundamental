//bagus untuk ujian
const data: any[] = [
  () => [["andi", "budi"], false],
  [() => [10, 11, 12], 13],
  {
    num: [1, 2, 3],
    count() {
      return "hello world";
    },
  },
  () => () => {
    return {
      great(str: string) {
        return `Hello ${str}`;
      },
    };
  },
];

console.log(data[0]()[0][1]); //budi
console.log(data[3]()().great(data[0]()[0][1])); // Hello budi
console.log(data[1][0]()); // 11
console.log(data[1][0]()[2]); // 12
