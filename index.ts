#! /usr/bin/env node
import inquirer from "inquirer"
const answer=await inquirer.prompt([{message: "Enter First Number",type: "number",name: "num1"},
{message: "Enter Second Number",type: "number",name:"num2"},
{message:"Select Operation you want to perform: ",type:"list",name:"operator",choices:["Add","Sub","Div","Mul"]}
])
if(answer.operator === "Add"){
    console.log(`==> ${answer.num1} + ${answer.num2} = ${answer.num1+answer.num2}`)
}
else if(answer.operator === "Sub"){
    console.log(`==> ${answer.num1} - ${answer.num2} = ${answer.num1-answer.num2}`)
}
else if(answer.operator === "Div"){
    console.log(`==> ${answer.num1} / ${answer.num2} = ${answer.num1/answer.num2}`)
}
else console.log(`==> ${answer.num1} * ${answer.num2} = ${answer.num1*answer.num2}`)