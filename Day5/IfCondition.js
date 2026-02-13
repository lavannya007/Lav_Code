function getAge(birthYear)
{
    let currentYear=2026
   return currentYear-birthYear;
}
  
function voteEligibility(birthYear)
{
    let age=getAge(birthYear)
 if(age>=18){
    console.log("eligible");
     
 }else{
    console.log("noteligible");
    
 }

}
voteEligibility(2020)


// check if age is 18 or above 
// if true he is eligible
// if false he is not eligible


// rank
// Find the Rank, IF mark 0 to 39 -- Fail
// Mark = 40 to 60 -- Thrid class
// Mark = 61 to 80 -- Second class
// Mark = 81 to 100 -- First Class

