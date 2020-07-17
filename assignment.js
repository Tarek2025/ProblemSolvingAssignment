//feetToMile
function feetToMile(feet){
    var mile=feet/5280;

    return mile;
}
var mile1=feetToMile(1);
console.log(mile1);
var mile2=feetToMile(83733);
console.log(mile2);

//brickCalculator
function brickCalculator(hight){
    var brick;
    if(hight<=10){
        brick=hight*15*1000;
    }
    else if(hight<=20){
        brick=150000+(hight-10)*12*1000;
    }
    else{
        brick=270000+(hight-20)*10*1000;
    }

    return brick;
}

var building1=brickCalculator(8);
console.log(building1);

var building2=brickCalculator(17);
console.log(building2);

var building3=brickCalculator(35);
console.log(building3);