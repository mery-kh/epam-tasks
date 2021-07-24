abstract class Car{
    public description: string;
    public countOfDoors : number;
    public power : number;
    public abstract setColor(color:string): string;
    public getDescription() : string{
        return this.description;
    };
    public getPriceFromDoorCount() : number{
        return this.countOfDoors;
    };
    public getPriceFromPower() : number{
        return this.countOfDoors;
    };
    public price: number;
    public totalPrice:number[];
    public getPrice(): number{
        return this.totalPrice.reduce((a,b)=> a+b);
    };
    public abstract setEngine(eng:string):string;

}
abstract class CarOptions extends Car {
    decoratedCar: Car;
    public abstract getDescription(): string;
}
// ------------------------------ Cars ------------------------------
class BMW extends Car{
    public description = "BMW";
    public price = 40000;
    public totalPrice = [this.price];
    public countOfDoors = 2;
    public power = 500;
    public setEngine(eng: string): string {
        return eng;
    }
    public setColor(color: string): string {
        return "green";
    }
}
// ------------------------------ Options ------------------------------
class Options extends CarOptions {

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    public setEngine(eng:string):string{
        (eng === 'Hybrid') ? this.decoratedCar.totalPrice.push(15000) : this.decoratedCar.totalPrice.push(6000);
        return eng;
    }
    public getPriceFromDoorCount(): number {
        return this.countOfDoors === 4 ? this.decoratedCar.totalPrice.push(6100) : this.decoratedCar.totalPrice.push(4200);
    }
    public getPriceFromPower(): number {
        return this.power > 600 ? this.decoratedCar.totalPrice.push(710) : this.decoratedCar.totalPrice.push(520);
    }
    public setColor(color:string): string {
        (color === 'red') ? this.decoratedCar.totalPrice.push(300) : (color === 'black') ? this.decoratedCar.totalPrice.push(460) : (color === 'silver') ? this.decoratedCar.totalPrice.push(520) : this.decoratedCar.totalPrice.push(0)
        return color;
    }
    public getPrice(): number {
        this.getPriceFromDoorCount();
        this.getPriceFromPower();
        return this.decoratedCar.totalPrice.reduce((a, b) => a + b);
    }
    public getDescription(): string {
        return `${this.decoratedCar.getDescription()} with color ${this.setColor('black')} decorated and your car has ${this.setEngine('Hybrid')} engine and price is ${this.getPrice()}$`;
    }
}
let bmw = new BMW();
bmw = new Options(bmw);
console.log(bmw.getDescription());