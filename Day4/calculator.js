//no parameter void
function add()
{
let i=10
let j=20
let sum=i+j
console.log(sum);
}
add()


//parameter void with hard value
function sub_1(i=15,j=5)
{
let sub=i-j
console.log(sub);


}
sub_1()

// parameter with default value
function mul(i=25,j=25)
{
    let mul=i*j
    console.log(mul);
    
} 
mul()
//or with 1 value,defaulty substitute 1st value 
mul(1)
//or with 2 values,overwrites both values
mul(1,2)

function div() //return 
{
let i=54
let j=2
let div=i/j
console.log(div);
return div
}
div()

//no parametr return no
function percentage()
{
    let i=109
    let j=2
    let percentage=i%j
    console.log(percentage);
    return percentage
} 
percentage()