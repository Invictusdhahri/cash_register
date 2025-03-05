const btn=document.getElementById("purchase-btn");
const output=document.getElementById("change-due");
const price=19.5;
const cid=[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]
const value=[0.01,0.05,0.1,0.25,1,5,10,20,100];

function check(){
    let cash=0;
    for(let i=0;i<cid.length;i++){
        cash+=cid[i][1];
    }
    const input=document.getElementById("cash").value;
    if (input<price){
        alert("Customer does not have enough money to purchase the item");
    }
    else if (input ==price){
        output.innerHTML="No change due - customer paid with exact cash";   
    }
    else{
        
        let price_left=input-price;
        // console.log("price left is :",price_left)
        let msg="";
        let i=cid.length-1;
        let count=0;
        while(price_left>=0 &&i>=0){

            // console.log('yo');
            if(price_left>=value[i] && cid[i][1]>0){
                price_left-=value[i];
                price_left=Math.round(price_left*100)/100;
                cid[i][1]-=value[i];
                count++;   
                     
            }
            else{
                if (count>0){
                    let x=count*value[i];
                msg+=`${cid[i][0]} : $${x}`+"\n";
            }
                count=0;
                i--;
            }
        }

        console.log("msg is :",msg);
        console.log(cash,price_left);
        if(cash<price_left ){
            console.log('Status: INSUFFICIENT_FUNDS');
            output.innerHTML="Status: INSUFFICIENT_FUNDS";
        }
        else if(cash==price_left){
            console.log('Status: CLOSED \n'+msg);
            output.innerHTML="Status: CLOSED"+msg;
        }
        else{
            console.log('Status: OPEN \n'+msg);
            output.innerHTML="Status: OPEN "+msg;    
        }
    }



}


btn.addEventListener('click',check)