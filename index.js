// Code your solution in this file!
    

function distanceFromHqInBlocks(blocks) {
    if (blocks >= 42){
        return blocks - 42;
    } else { 
        return 42-blocks;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks)*264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start-destination) * 264)
}

function calculatesFarePrice(start,destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0
    } else if(feetTravelled > 400 && feetTravelled <= 2000){
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500){
        return 25.00;
    } else if (feetTravelled > 2500) {
        return 'cannot travel that far';
    }
        
}

