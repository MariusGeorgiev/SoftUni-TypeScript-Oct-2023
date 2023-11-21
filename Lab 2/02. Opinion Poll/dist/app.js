class Person {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
const input = 'Peter 12';
const personInfo = input.split(" ");
const person = new Person();
person.name = personInfo[0];
person.age = Number(personInfo[1]);
console.log(`${person.name} is ${person.age} years old.`);
//# sourceMappingURL=app.js.map