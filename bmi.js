class BMI {
    
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    //method
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}
//object created
let myBMI = new BMI(2, 100);
console.log(myBMI.calculateBMI());