function printAndSum(first: number, second: number): void {

    let start = Number(first);
    let end = Number(second)

    let sum = 0
    let allNums = []

    for(let i = start; i <= end; i++) {
        sum += i
        allNums.push(i)

    }

    console.log(allNums.join(" "));
    console.log(sum);
    
    
}

// printAndSum(5,10)
//printAndSum(0,26)
 printAndSum(50,60)