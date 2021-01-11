//variable declaration :
var myage=10;
console.log(myage);

const avee = "avee";
console.log(avee);
var myage=30
console.log(myage)
//veriable addition
var newage=10;
var previousage=20;
var newageaddition=newage+previousage
console.log(newageaddition);
var newAgeAddition = (previousage + newage);
console.log(newAgeAddition);
//addition with string 
var myno = 100;
var myString = "string";
var myNumberString = (myno + myString);
console.log(myNumberString);
//multiply with string with string
var myNumberStringMultipy = (myno * myString);
console.log(myNumberStringMultipy);
// devide with string and number
var myNumberStringDevide = (myno / myString);
console.log(myNumberStringDevide);
// addition of strings
var myStr1 = "sazzad";
var myStr2 = "mahmud";
var myTotalStr = (myStr1 + myStr2);
console.log(myTotalStr);
//shortcut of operation
//var myage=10,
//var mylastage=23;
//console.log(myage+=mylastage);
console.log(newage++);
console.log(newage);
document.write(newage);

//boolean
var myBoolean1 = true;
console.log(myBoolean1);

var myboolean2=false;
console.log(myboolean2);

console.log(5<7);
console.log(7<5);

//boolean function
console.log(Boolean(1<10));
console.log(Boolean(10>20));
console.log(Boolean(50<100));
console.log(Boolean(5));

console.log(Boolean(""));

// if else condition

var myname=true;
if (myname){
    console.log("Yes I am Student!!");

} else{
    console.log("I am not student");
}
/////////////////////////
var myage=false;
if(myage){
    console.log("yes i am student");

} 
else{console.log("no i am student")}
//////////////////////////
var myNum = 10;
if (myNum==10){
    console.log("my num is equal to 10");
} else{
    console.log("my num is not equal to 10");
}
///////////////////////////
var mySchool = "chittagong";
var myCollege = "chittagong";
if(mySchool==myCollege)
{
    console.log("i am right");

}
else{
    console.log("i am wrong");
}
///////////////////////////////
var mySchool = "chittagong";
var myCollege = "Dhaka";
if(mySchool==myCollege)
{
    console.log("i am right");

}
else{
    console.log("i am wrong");
}
///////////////////////////////
var myNum = 101;
if (myNum==10){
    console.log("my num is equal to 10");
} else if(myNum<100){
    console.log("my num is less than 100");
} else if(myNum>100){
    console.log("my num greater than 100");
} else{
    console.log("my num is not valid");
}
///////////////////////////////////
//var age=10;
//while(age>9){

  //  console.log("age is correct");
    //age++
//}
//document.write("stop")
////////////////////////////////////
//var myAge = 15;
//while(myAge<=25){
  //  console.log("my age is under 25");
   // myAge++;

//}
//document.write("stop loop please");

for (i=1;i<9;i++)
{
    console.log(i);
}

////////////////
var newTag = document.getElementsByTagName("a");

for (tag=3; tag<=newTag.length; tag++){
    console.log("here is console tag" + tag);
    document.write("here is the doc tag" + tag);

}
//////////////////
function getAverage(a,b){
    var average = (a+b)/2;
    var newAverage = (a*b)/2;
    var udatedAverage = newAverage/average;
    
    console.log(newAverage);
    console.log(average);
    console.log(udatedAverage);
}
getAverage(10,10)
///////////////////
function myage(){
   var age=100;
   console.log(age);
}

/////////////////////////
function getResult(bangla,english){
    var result = bangla + english;
    console.log(result);
    return result;
}

var myResult = getResult(87,76);
console.log("total result of my exam " + myResult);

///////////////////////////////
function getCgpa(bangla,english,math,physics){
    var averageCgpa = (bangla + english + math + physics)/getCgpa.length;
    console.log("cgpa length:" + getCgpa.length);
    console.log(averageCgpa);
    return averageCgpa;

}
getCgpa(4,3,4,2);
var myCgpa = getCgpa(4,3,4,2);
console.log("my cgpa is " + myCgpa);
////////////////////////////////////
function getResult(bangla,english,math,physics){
    var average=(bangla+english+math+physics)/getResult.length;
    console.log("cgpa length" +getResult.length)
    console.log(average);
    return average;

}

getCgpa=getResult(10,30,50,60)
console.log("my cgpa:" + getCgpa)

//////////////////////////////////////////////
var number1 = 11.33;
var number2 = 34.44;
console.log(Math.round(11.33));
var number1=Math.round(10.3000);
console.log(number1);
var numBerPi = Math.PI;
console.log(numBerPi);
///////////////////////////////////////////////
//multiply with number and string
var appleNumber = 10;
var appleName = "apple";

var multiplyApple = (10*"apple");
// its return NaN
console.log(multiplyApple)
///////////////////////////////
var a="apple";
var b=10
if(isNaN==a)
{
    console.log("a is true")

}
else{
    console.log("a is false")

}

////////////////////////////////
var myString = ("hello");
console.log(myString);
console.log(myString.length);
console.log(myString.length);
//console.log(myString.indexof("l"));
console.log("index number of l: " + myString.indexOf("l"));
///////////////////////////////////
var myString3 = ("Hello I'am Tamjid");
if (myString3.indexOf(("Shuvo")!==-1)){
    console.log("avee");
}else{
    console.log("tamjid");
}
///////////////////////////////////
if (myString3.indexOf("Tam")==-1){
    console.log("index of avee"+myString3.indexOf("Tam"));
}
else{
    console.log("index are not valid");
}
///////////////////////////////////
var myName = "Aynul Islam Tamjid";
var myNameSlice = myName.slice(4);
console.log(myName);
console.log(myNameSlice);
///////////////////////////////////
var myNameDoubleSlice = myName.slice(3,8);
console.log(myNameDoubleSlice);
//////////////////////////////////
//its replce by zero and converto string to array
var myClass = "one, two, three, four";
console.log(myClass.replace("one","zero").split(","));
var myClass2="two, Three,Four,Five";
console.log(myClass2.replace("Three","One").split(","));
var myClass3="seven,eight,nine,ten";
console.log(myClass3.replace("seven","one").split(","));
//////////////////////////////////////////////////////
console.log(myClass.startsWith("o"));
console.log(myClass.valueOf());
console.log(myClass.lastIndexOf("o"));
///////////////////////////////////
var myNewArray = [1,5,11,7,2,56,6,true,"hello","bye",false,[12,454,45]];
console.log(myNewArray);
console.log(myNewArray.length);
console.log(myNewArray.sort());
console.log(myNewArray.reverse());
////////////////////////////
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "sazzad";
myCar.brand = "mazda";
console.log(myCar);
console.log(myCar.driver);
////////////////////////////
var mySalary = {
    name:"aynul",
    employee_id: "DGT-000143",
    
    salary:function(basic,house_rent,food,travel){
        console.log("my salary is :" + (basic+house_rent+house_rent+food+travel));
    },

    totalSalary: function(basic, house_rent, food, travel){
        return parseInt(basic+house_rent+travel+food);
    }

};
console.log(mySalary.totalSalary(12000,2000,1000,2000));
console.log( (mySalary));
//////////////////////////////////////////////
var mysalary ={
    name : "sazzad",
    Dept : DataTransferItem,
    totalSalary :function(basic,house_rent, food ,travel){
        return (basic+house_rent+food+food+travel)

    },
    salary:function(basic,house_rent,food,travel){
        console.log("my salary is :" + (basic+house_rent+food+travel));
    }

}
console.log(mysalary.name);
console.log(mysalary.totalSalary(100,2000,200,3000));
console.log(mysalary.salary(10,20,30,40))
//////////////////////////////////////////
var keys = Object.keys(mySalary);
console.log(keys);
var values = Object.values(mySalary);
console.log( values);
/////////////////////////////////////
var myRe = new RegExp('d(b+)d', 'g');
var myExp = myRe.exec('cdbbdbsbz');
console.log(myExp);
///////////////////////////////////
var myRe = new RegExp('d(b+)d', 'g');
var myExp = myRe.exec('cdbbdbsbz');
console.log(myExp);
////////////////////////
var str = "Visit W3Schools";
var patt = /w3schools/i;
var result = str.match(patt);
console.log(result);
/////////////////////////
var str = "Is this all there is?";
var patt1 = /is/g;
var result = str.match(patt1);
console.log(result);
/////////////////////////
var str = "Is this all there is?";
  var patt1 = /is/gi;
  var result = str.match(patt1);
  console.log(result);
  ///////////////////////
  var str = "\nIs th\nis it?";
  var patt1 = /^is/m;
  var result = str.match(patt1);
  console.log(result);
  ///////////////////////////
  var str = "\nIs th\nis h\nis?";
  var patt1 = /^is/gm;
  var result = str.match(patt1);
  console.log(result);
  /////////////////////////////////
  var str = "Is this all there is?";
  var patt1 = /[^h]/g;
  var result = str.match(patt1);
  console.log(result);