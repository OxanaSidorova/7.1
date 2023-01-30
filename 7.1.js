

const postomat = ["nul","null", "null", "4 - your parcle", "null"];

let userDetails = {
    balance: 100,
    smsCode:"A001DFX0",
    smsText:"Your parcel in a #4 box'"
};

if (userDetails.smsCode === "A001DFX0") {
    console.log(`You recived your parcel from the box #4 and your balans  is ${userDetails.balance -100} rub`)
} else {
    console.log ("The code is faild")
}
