let number=13;
let factor=0;
    for(i=1;i<=number;i++){
        if(number%i==0){
            factor++;
        }
    }if(factor==2){
console.log("it's a prime Number")
}else{
console.log("it's not a prime Number")
}