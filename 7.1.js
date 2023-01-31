

const postomat = ["nul","null", "null", "A001DFX0", "null"];
let userDetails = {
    balance: 100,
    smsCode:"A001DFX0",
    smsText:"Your parcel in a #4 box'"
};

for(let i =0; i< postomat.length; i++) {
    if (postomat[i] === userDetails.smsCode) {
        userDetails.balance = userDetails.balance - 100
   console.log(`You recived your parcel from the box #4 and your balans  
   is ${userDetails.balance -100} rub`)
    }
    else {
     console.log ("The code is faild")
    } 
}


// let userDetails = {
//     balance: 100,
//     smsCode:"A001DFX0",
//     smsText:"Your parcel in a #4 box'"
// };

// if (userDetails.smsCode === "A001DFX0") {
//     console.log(`You recived your parcel from the box #4 and your balans  is ${userDetails.balance -100} rub`)
// } else {
//     console.log ("The code is faild")
// }
