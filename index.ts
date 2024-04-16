import inquirer from "inquirer";


let yourBalance=30000;
let yourPin=5544;

const balanceCheck=await inquirer.prompt([{
    type:"number",
    name: 'balance',
    message: `Enter the pin.... `,
}])
if(balanceCheck.balance===yourPin){
    console.log("Access granted. Welcome to the ATM service")

    const atmMachine= await inquirer.prompt([{
        message:"Select the operation you want to perform",
        type:"list",
        name:'operation',
        choices:["Withdraw","FastWithdraw","CheckBalance",]
    }]);
    
    if(atmMachine.operation==="Withdraw"){
        let  withdrawAmount = await inquirer.prompt([
            {
                name:"amount",
                message: "How much do you want to withdraw??",
                type:"number"
            }   
        ]);

        if(withdrawAmount.amount>yourBalance)
      {
          console.log("Insufficient Balance");
      }else{
       var withdrawbalance= yourBalance-=withdrawAmount.amount;
       console.log(`Your remaining balance is ${withdrawbalance}`)}
       
    }
    
    else if(atmMachine.operation==="FastWithdraw"){
         let  fastWithdrawAmount=await inquirer.prompt([{
                type:"list",
                name:"fastWithdraw",
                message:"What kind of Fast Withdrawal do you wish for?",
                choices:['5000','10000','15000','20000','25000']
         }])
         if(fastWithdrawAmount.fastWithdraw==="5000"){
            console.log(`You have Fastwithdraw of ${fastWithdrawAmount.fastWithdraw}`)
            var  amountTowithdraw=  yourBalance-=fastWithdrawAmount.fastWithdraw;
            console.log(`Your remaining balance is ${amountTowithdraw}`)
         }

         else if(fastWithdrawAmount.fastWithdraw==="10000"){
            console.log(`You have Fastwithdraw of ${fastWithdrawAmount.fastWithdraw}`)
            var  amountTowithdraw=  yourBalance-=fastWithdrawAmount.fastWithdraw;
            console.log(`Your remaining balance is ${amountTowithdraw}`)
        }else if(fastWithdrawAmount.fastWithdraw==="15000"){
            console.log(`You have Fastwithdraw of ${fastWithdrawAmount.fastWithdraw}`)
            var  amountTowithdraw=  yourBalance-=fastWithdrawAmount.fastWithdraw;
        console.log(`Your remaining balance is ${amountTowithdraw}`)}
            else if(fastWithdrawAmount.fastWithdraw==="20000"){
                console.log(`You have Fastwithdraw of ${fastWithdrawAmount.fastWithdraw}`)
                var  amountTowithdraw=  yourBalance-=fastWithdrawAmount.fastWithdraw;
                console.log(`Your remaining balance is ${amountTowithdraw}`)}
                else if(fastWithdrawAmount.fastWithdraw==="25000"){
                    console.log(`You have Fastwithdraw of ${fastWithdrawAmount.fastWithdraw}`)
                    var  amountTowithdraw=  yourBalance-=fastWithdrawAmount.fastWithdraw;
                    console.log(`Your remaining balance is ${amountTowithdraw}`)}
                }
                
    else if(atmMachine.operation==="CheckBalance"){
        console.log(`Your Balance is  ${yourBalance}`)}
          
}else{
console.log("Access Denied")
}