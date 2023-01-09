// Code your solution in this file!
const returnFirstTwoDrivers = (list = []) => list.slice(0,2);
const returnLastTwoDrivers = (list = []) => list.slice(list.length-2,list.length);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    const applyMultiplierToFare = function (fare) {
        return multiplier * fare;
    }
    return applyMultiplierToFare;
}

function fareDoubler(fare){
    return fare *= 2;
}

function fareTripler(fare){
    return fare *= 3;
}

function selectDifferentDrivers(arrayOfDrivers, selectionMethod){
    return selectionMethod(arrayOfDrivers);
};