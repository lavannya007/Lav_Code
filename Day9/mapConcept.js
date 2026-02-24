let name1="lavannya"
let charMap=new Map();
for(let i=0;i<name1.length;i++){
    console.log(name1[i]);
    if(charMap.has(name1[i])){
        let val= charMap.get(name1[i])+1;
        charMap.set(name1[i],val)
    }else{
        charMap.set(name1[i],1)

    }
    
    
}
console.log(charMap);
