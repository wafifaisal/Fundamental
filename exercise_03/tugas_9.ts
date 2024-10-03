const int1 = 19;
const int2 = 52;
const int3 = 18;

if (int1 <= int2 && int1 <= int3) {
    if (int2 <= int3) {
        console.log(int1, int2, int3);
    } else {
        console.log(int1, int3, int2);
    }
} else if (int2 <= int1 && int2 <= int3) {
    if (int1 <= int3) {
        console.log(int2, int1, int3);
    } else {
        console.log(int2, int3, int1);
    }
} else {
    if (int1 <= int2) {
        console.log(int3, int1, int2);
    } else {
        console.log(int3, int2, int1);
    }
}