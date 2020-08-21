interface carSpec {
    carBrand: string;
    price: number;
    maxSpeed: number;
}

interface car {
    carBrand: string;
    currentSpeed: number;
    _price: number;
    maxSpeed: number;
    isOn: boolean;
    distance: number;
}

class Car {
    carBrand: string;
    currentSpeed: number = 0;
    _price: number;
    maxSpeed: number;
    isOn: boolean = false;
    distance: number = 0;

    static getSpecs(car: car) {
        console.log(`The specs of ${car.carBrand}:`);
        console.table(car);
    }

    constructor(spec: carSpec) {
        this.carBrand = spec.carBrand;
        this._price = spec.price;
        this.maxSpeed = spec.maxSpeed;
    }

    get price(): number {
        return this._price;
    }

    set price(newPrice: number) {
        this._price = newPrice;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.currentSpeed = 0;
    }

    accelerate(value: number) {
        if (this.isOn) {
            if (value + this.currentSpeed <= this.maxSpeed) {
                this.currentSpeed = this.currentSpeed + value;
            } else console.warn("Can't accelerate, max speed will be exeeded!");
        } else console.log("the car isn't turned on");
    }

    decelerate(value: number) {
        if (this.isOn) {
            if (this.currentSpeed - value >= 0) {
                this.currentSpeed = this.currentSpeed - value;
            } else console.warn("Can't decelerate, max speed will be exeeded!");
        } else console.log("the car isn't turned on");
    }

    drive(hours: number) {
        if (this.isOn) {
            this.distance = this.distance + hours * this.currentSpeed;
        } else console.log("the car isn't turned on");
    }
}



const volga = new Car({ carBrand: "Volga", price: 555, maxSpeed: 140 });

Car.getSpecs(volga);

volga.turnOn();
volga.accelerate(50);
volga.drive(2);

Car.getSpecs(volga);
// maxSpeed: 140, currentSpeed: 50, isOn: true, distance: 100

volga.decelerate(20);
volga.drive(1);
volga.turnOff();

Car.getSpecs(volga);
// maxSpeed: 140, currentSpeed: 0, isOn: false, distance: 130

volga.price = 777;
console.log(volga.price); // 777
