function hitungBMI (weight: number, height : number) {
    
    const bmi = weight / (height ** 2);
    
    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

const result = hitungBMI(89, 1.75); // kg & meter
console.log(result); 