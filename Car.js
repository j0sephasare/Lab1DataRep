class Vehicle{
    //constructor for  make model year
constructor(make,model,year){
this.make = make;
this.model = model;
this.year = year;
}
//console log for making the car
information(){
console.log(`Make: ${this.make}`);
console.log(`model:${this.model}`);
console.log(`year: ${this.year}`);
}
}
//class that extends vehicle 
class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model,year);
        this.doors = doors;
    }
    //information calling on information above
    information(){
        super.information();
        console.log(`Doors: ${this.doors}`);
    }
}
//outputs to console  with door included
let myCar = new Car('VW','Golf',2000,5);
myCar.information();