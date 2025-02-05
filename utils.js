function sum(num1,num2,num3)
{
    return num1+num2+num3;
}
function avgs(num1,num2,num3){
     const avg=sum(num1,num2,num3)/3
    return avg
}
function avgsqrt(num1,num2,num3){
    const avgsqrt=Math.sqrt(avgs(num1,num2,num3))
    return avgsqrt
}
const obj={avgs,avgsqrt};
module.exports=obj;