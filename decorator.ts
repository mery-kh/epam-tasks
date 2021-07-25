abstract class Car {
    public description: string;
    public countOfDoors: number;
    public power: number;
    public price: number;
    public abstract cost(): number;
    public getDescription(): string {
        return this.description;
    };
}
abstract class CarOptions extends Car {
    decoratedCar: Car;
}
// ------------------------------ Cars ------------------------------
class BMW extends Car{
    public description = "BMW";
    public countOfDoors = 2;
    public power = 500;
    public cost(): number {
        return 77000;
    }
}
// ------------------------------ Options ------------------------------
class CarColor extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
        this.price = this.decoratedCar.cost();
    }
    public setColor(color:string): string {

        (color === 'red') ? this.price = this.decoratedCar.cost() + 300 : (color === 'black') ? this.price = this.decoratedCar.cost() + 460 : (color === 'silver') ? this.price = this.decoratedCar.cost() + 520 : this.price = this.decoratedCar.cost() + 0
        return color;
    }
    public cost(): number {
        return this.price;
    }
    public getDescription(): string {
        return `${this.decoratedCar.getDescription()} with color ${this.setColor('red')} decorated`;
    }
}
class CarEngine extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
        this.price = this.decoratedCar.cost();
    }
    public setEngine(eng:string):string{
        (eng === 'Hybrid') ? this.price = this.decoratedCar.cost() + 15000 :  this.price = this.decoratedCar.cost() + 6000;
        return eng;
    }
    public cost(): number {
        return this.price;
    }
    public getDescription(): string {
        return `${this.decoratedCar.getDescription()} and your car has ${this.setEngine('Oil based')} engine,`;
    }
}
class CarDoors extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
        this.price = this.decoratedCar.cost();
    }
    public getDoors(doors:number):number{
        doors === 4 ? this.price =  this.decoratedCar.cost() + 6100 : this.price =  this.decoratedCar.cost() + 4200;
        return doors;
    }
    public cost(): number {
        return  this.price;
    }
    public getDescription(): string {
        return `${this.decoratedCar.getDescription()} with ${this.getDoors(4)} doors`;
    }
}
class CarPower extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    public getPriceFromPower(): number {
        return this.power > 600 ? this.decoratedCar.cost() + 710 : this.decoratedCar.cost() + 520;
    }
    public cost(): number {
        return this.getPriceFromPower();
    }
    public getDescription(): string {
        return `${this.decoratedCar.getDescription()} and price is ${this.cost()}$`;
    }
}
let bmw = new BMW();
bmw = new CarColor(bmw);
bmw = new CarEngine(bmw);
bmw = new CarDoors(bmw);
bmw = new CarPower(bmw);
console.log(bmw.getDescription());