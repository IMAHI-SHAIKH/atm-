#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pinCode",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pinCode === myPin) {
    console.log("welcome to your account!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaing balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is:  ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "cash",
                type: "list",
                choices: [1000, 2000, 5000, 7000, 8000]
            }
        ]);
        if (myBalance <= fastCashAns.cash) {
            let balance2 = myBalance - fastCashAns.amount;
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("wrong pinCode");
}
;
