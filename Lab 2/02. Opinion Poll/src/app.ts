class Person {
    private _name: string;
    private _age: number;

    public get name(): string {
        return this._name
    }

    public set name(value: string) {

        this._name = value
    }

    public get age(): number {
        return this._age
    }

    public set age(value: number) {

        this._age = value
    }


}

const input = 'Peter 12'
const personInfo = input.split(" ")

const person = new Person() 
person.name = personInfo[0]
person.age = Number(personInfo[1])

console.log(`${person.name} is ${person.age} years old.`);
