function getDetails()
{
    console.log("I am get Details-");
    
}
getDetails("Lav")
getDetails("Elan")

// Arrow Function
const arrowFun = ()=>{
    console.log("I am Arrow Function-")
}
arrowFun()

function getBankDetails(customerName, callback)
{
    console.log("Welcome, ", customerName);
    callback()
}

getDetails()


getBankDetails("Bala",()=>{ console.log("Iam callback function")} )
getBankDetails("Janani", getDetails)




