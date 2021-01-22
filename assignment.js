//github code link: 



/*--------------------------------------------------------------------
                 Kilometer to Meter Conversion
----------------------------------------------------------------------*/



function kilometerToMeter(valueInKilometer){
    var valueInMeter=valueInKilometer*1000;  //1 kilometer=1000 meter
       
        if(valueInMeter>0){
                return valueInMeter;
            }

            else if (valueInMeter==0){
                return "Distance is Zero";   //Since 0 km = 0 meter
            }

            else if(valueInMeter < 0){
                return "Distance Can not be Negative";  //Since Distance can not be -ve number
            }

            else{
                return "Please Enter Any Number to get the result in Meter unit";  //this alert will show in output if you don't pass any number as input
            }
        
}

var valueInMeterUnit=kilometerToMeter(3);
console.log(valueInMeterUnit);




/*--------------------------------------------------------------------
                   Budget Calculation
----------------------------------------------------------------------*/


function budgetCalculator (watch,mobile,laptop){
    
    if(watch>0 && mobile>0 && laptop>0){
        var totalBudget=watch*50+mobile*100+laptop*500;  //mechanism: the amount of watch, mobile, and laptop are multiplied by their respective price
        return totalBudget;
    }

    else if (watch==0 || mobile == 0 || laptop==0){   //this alert will show in output if you pass 0  one or two or three times as input. 
    
       return "One or Two or All Three Values are Zero ";  
    }
 
    else if (watch < 0 || mobile < 0 || laptop< 0){
        return "One or Two or All Three Values are Negative";  //this alert will show in output if you pass One or Two or All Three number in negative value  as input. 
     }

    else{
        return "Please Input 3 number to get the Total Cost"; //this alert will show in output if you don't pass any number as input
    } 
}

var totalCost=budgetCalculator(1,2,1);
console.log(totalCost);






/*--------------------------------------------------------------------
                   Hotel Cost Calculation
----------------------------------------------------------------------*/


function hotelCost (duration){

            var cost= 0;
            if(duration>0 && duration <=10){
                cost= duration*100;            //mechanism: 1 -10 days cost = number of days*daily cost(100 taka)
                return cost;
            }

            else if(duration>0 &&  duration<=20){
                var oneToTenDays=10*100;              //mechanism: 1 -10 days cost = number of days*daily cost(100 taka)
                var remainingDays=duration-10;
                var elevenToTwentyDays=remainingDays*80; //mechanism: 11 -20 days cost = number of days*daily cost(80 taka)
                cost= oneToTenDays + elevenToTwentyDays;  
                return cost;
            }

            else if(duration>0){
                var oneToTenDays=10*100;      //mechanism: 1 -10 days cost = number of days*daily cost(100 taka)
                var elevenToTwentyDays=10*80  //mechanism: 11 -20 days cost = number of days*daily cost(80 taka)
                var remainingDays=duration-20;
                var twentyOneToInfinityDays=remainingDays*50; //mechanism: 20+ days cost = number of days*daily cost(50 taka)
                cost= oneToTenDays+ elevenToTwentyDays + twentyOneToInfinityDays;
                return cost;
            } 

            else if (duration==0){
                return "Zero";        // Since 0 day Stay in Hotel = Cost 0
            }

            else if (duration<0){
                return "Time Duration Can not be Negative"; // Since Stay in Hotel can not be -ve number
            }
            
            else{
                return "Please Input 1 number to get the Hotel Cost"; //this alert will show in output if you don't pass any number as input
           } 
            
}

var hotelTotalCost = hotelCost(30);
console.log(hotelTotalCost);






/*--------------------------------------------------------------------
                   Mega Friend's Name Selection 
----------------------------------------------------------------------*/

function megaFriend(friendsName){

        var length = 0;
        var longestName;
        
        for (var i = 0; i < friendsName.length; i++) {
                if (friendsName[i].length > length) {
                    var length = friendsName[i].length;
                    longestName = friendsName[i];     //mechanism: Longest Word in a array is calculated here by comparing string length   

                }
            }
    
    return longestName;
    
    }
    
    var friendsName=["Sakil Forazi","Shuvasis Das","Rathin Guho","Shakil Shariar","Ajgor Ahmed","Lokesh Das"];
    var longestNameSelection=megaFriend(friendsName);
    console.log(longestNameSelection);

