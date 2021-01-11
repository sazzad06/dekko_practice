
var car= function(water,driver){
    
    this.glass;
    this.driver=driver;
    this.drive=function (speed,time){
        console.log(speed*time);
    };

}
var mycar=new car(10,"ninja")
var mycar2=new car(20,"sazzad")
//var mycar3=new car(50,"avee")
mycar.drive(20,50);
mycar.drive(1000,10);