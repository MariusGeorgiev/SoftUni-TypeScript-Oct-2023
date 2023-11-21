function sumOfNtoM(n: string, m: string): void {

    let nNum = Number(n);
    let mNum = Number(m);

    let sum = 0

    for(let i = nNum; i <= mNum; i++) {

        sum += i
    }

    console.log(sum);
    

}

sumOfNtoM('-8', '20')

