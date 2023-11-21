class Car {
    private _brand: string;
    private _model: string;
    private _horsepower: number;

    public get brand(): string {
        return this._brand;
    }

    public set brand(value: string) {
         this._brand = value;
    }

    public get model(): string {
        return this._model;
    }

    public set model(value: string) {
        this._model = value;
    }

    public get horsepower(): number {
        return this._horsepower;
    }

    public set horsepower(value: number) {
        this._horsepower = value
    }
}

const input = "Chevrolet Impala 390";
const carInfo = input.split(" ");

const car = new Car();
car.brand = carInfo[0];
car.model = carInfo[1];
car.horsepower = parseInt(carInfo[2]);

console.log(`The car is: ${car.brand} ${car.model} - ${car.horsepower} HP.`);

