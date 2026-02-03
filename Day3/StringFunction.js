var username="lavannya"
console.log(username.toUpperCase());
console.log(username.length);
console.log(username.charAt(3));
console.log(username.slice(0,5));
console.log(username.concat("rangan"));
console.log(username.includes("z"));
console.log(username.includes("y"));
console.log(username.endsWith("am"));
console.log(username.endsWith("nya"));
console.log(username.startsWith("sha"));
console.log(username.startsWith("lav"));
var places="beach,park,temple"
console.log(places.split(","));
console.log(places.split(",")[1]);
console.log(places.split(",")[2]);
var country="  india  "
console.log(country);
console.log(country.trim());
console.log(country.trimEnd());
console.log(country.trimStart());
console.log(country.repeat(3));
console.log(country.replace("  India  ", "US"));
var program = "I love Java and work as Java Developer"
console.log(program.replace("Java","Python")); // finds the first char and replaces with he gn char
console.log(program.replaceAll("Java","Python"));　// 2nd string replaces the 1st one 
let digit = 20 
console.log(typeof(digit));
console.log(typeof(digit.toString()));// changes to strng
let countryCode = "91"
let a=5
console.log(countryCode);
console.log(countryCode+1); // just attach the gn no
console.log(a+1); // just attach the gn no
console.log(parseInt(countryCode)+1);// parseint means changing the string to integer so it takes as no
console.log(typeof (countryCode));
console.log(typeof parseInt(countryCode)); //parsint takes no as string