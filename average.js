function getaverage()
{   
    sum=0;
    for(i=0;i<10;i++)
    {
     sum=sum+i/2;
    }

    console.log(sum);
    return sum;
}
var result=getaverage()
function getResult()
{
    console.log("result is "+ result)
}
getResult();

