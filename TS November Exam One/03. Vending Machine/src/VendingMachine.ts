import { Drink } from "./Drink";

export class VendingMachine{

    buttonCapacity: number;
    drinks: Drink[];
    getCount: number;

    
    constructor(buttonCapacity: number,) {

        this.buttonCapacity = buttonCapacity;
        this.drinks = []
        this.getCount = 0
    }


    
    addDrink(drink: Drink): void {
        if(this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink)
            this.getCount ++;
        }

    }

    removeDrink(name: string): boolean {

        let index = this.drinks.findIndex((d) => d.name === name)

        if(index !== -1) {
            this.drinks.splice(index, 1)
            this.getCount -= 1
            return true;

        }

        return false;

    }

    getLongest(): string {

        let drink = this.drinks[0]

        for( let i = 1; i < this.drinks.length; i++) {
            if(this.drinks[i].volume > drink.volume) {
                drink = this.drinks[i]

            }
        }
        
        return drink.toString();

    }

    getCheapest(): string {

        let drink = this.drinks[0]

        for( let i = 1; i < this.drinks.length; i++) {
            if(this.drinks[i].price < drink.price) {
                drink = this.drinks[i]

            }
        }


        return drink.toString();

    }

    buyDrink(name: string): string {

        let index = this.drinks.findIndex((d) => d.name === name)

        if(index !== -1) {
            let drink = this.drinks[index]
         this.drinks.splice(index, 1)
         this.getCount -= 1;
            return drink.toString()

        }

        if(index == -1) {

            return "";
        }
      
    }
    


    report(): string {

        let log = `Drinks available:\n`

        for(let drink of this.drinks) {
            log += `${drink.toString()}\n`
        }

        return log;

    }
}