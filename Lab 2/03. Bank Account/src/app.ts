class BankAccount {
    private static interestRate = 0.02;
    private static nextId = 1;
    private id: number;
    private balance: number;

    constructor() {
        this.id = BankAccount.nextId++;
        this.balance = 0;
    }

    public static setInterestRate(rate: number): void {
        BankAccount.interestRate = rate;
    }

    public getInterest(): number {
        return this.balance * BankAccount.interestRate;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }
}

const accounts: BankAccount[] = [];
let numAccounts = 0;


const input = prompt("Create");
    const tokens = input.split(" ");

while (true) {
    const input = prompt("Enter a command:");
    const tokens = input.split(" ");

    if (tokens[0] === "Create") {
        accounts[numAccounts++] = new BankAccount();
        console.log(`Account ID${accounts[numAccounts - 1].id} created`);
    } else if (tokens[0] === "Deposit") {
        const id = parseInt(tokens[1]) - 1;
        const amount = parseFloat(tokens[2]);
        accounts[id].deposit(amount);
        console.log(`Deposited ${amount.toFixed(2)} to ID${accounts[id].id}`);
    } else if (tokens[0] === "SetInterest") {
        const rate = parseFloat(tokens[1]);
        BankAccount.setInterestRate(rate);
    } else if (tokens[0] === "GetInterest") {
        const id = parseInt(tokens[1]) - 1;
        const years = parseInt(tokens[2]);
        const interest = accounts[id].getInterest() * years;
        console.log(interest.toFixed(2));
    } else if (tokens[0] === "End") {
        break;
    }
}