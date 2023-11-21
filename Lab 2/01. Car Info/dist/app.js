class Car {
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get horsepower() {
        return this._horsepower;
    }
    set horsepower(value) {
        this._horsepower = value;
    }
}
const input = "Chevrolet Impala 390";
const carInfo = input.split(" ");
const car = new Car();
car.brand = carInfo[0];
car.model = carInfo[1];
car.horsepower = parseInt(carInfo[2]);
console.log(`The car is: ${car.brand} ${car.model} - ${car.horsepower} HP.`);
//# sourceMappingURL=app.js.map