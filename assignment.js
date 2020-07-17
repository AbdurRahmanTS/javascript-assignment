// Feet to Mile Convert

function feetToMile(feet){
    var mile = feet / 5280;
    mile = mile.toFixed(6);
    return mile;
}

  
  
// Wood Calculator 
  
function woodCalculator(chair, table, bed){
    var woodOfChair = chair * 1;
    var woodOfTable = table * 3;
    var woodOfBed = bed * 5;
    var totalWood = woodOfChair + woodOfTable + woodOfBed;
    return totalWood;
}
 
  
  
// Brick Calculator
  
function brickCalculator(floor){
    if(floor <= 10){
        var tenFloor = floor;
        var total = tenFloor * 15 * 1000;
    }
    else if(floor <= 20){
        var tenFloor = 10;
        var twentyFloor = floor - tenFloor;
        var tenFloorTotal = tenFloor * 15 * 1000;
        var twentyFloorTotal = twentyFloor * 12 * 1000;
        var total = tenFloorTotal + twentyFloorTotal;
    }
    else{
        var tenFloor = 10;
        var twentyFloor = 10;
        var twentyUpFloor = floor - 20;
        var tenFloorTotal = tenFloor * 15 * 1000;
        var twentyFloorTotal = twentyFloor * 12 * 1000;
        var twentyUpFloorTotal = twentyUpFloor * 10 * 1000;
        var total = tenFloorTotal + twentyFloorTotal + twentyUpFloorTotal;
    }
    return total;
}


// Tiny Friends

function tinyFriends(name){
    var smallName = name[0];
    var smallNameQty = smallName.length;
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        var elementQty = element.length;
        if (elementQty < smallNameQty){
            smallName = element;
        }
    }
    return smallName;
}
