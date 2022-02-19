function costPer100(kwhPer100km, costPerKwh, electricalRange, litresPer100km, costPerlitre) {
    var electricalCostPer100km = GetCostPer100kmForEnergy(kwhPer100km, costPerKwh);
    var fuelCostPer100km = GetCostPer100kmForEnergy(litresPer100km, costPerlitre);

    var combinedCostPer100km = (electricalCostPer100km / 100 * electricalRange) + (fuelCostPer100km / 100 * (100 - electricalRange));

    // console.log("Calculated: " + combinedCostPer100km);
    // console.log("With toFixed(4): " + parseFloat(combinedCostPer100km).toFixed(4));

    return parseFloat(combinedCostPer100km).toFixed(4);
}

function totalCost(kwhPer100km, costPerKwh, litresPer100km, costPerlitre, distance) {
    var electricalCostPer100km = GetCostPer100kmForEnergy(kwhPer100km, costPerKwh);
    var fuelCostPer100km = GetCostPer100kmForEnergy(litresPer100km, costPerlitre);
    var avg = (electricalCostPer100km + fuelCostPer100km) / 2;
    var costForDistance = avg / 100 * distance;

    // console.log("Calculated: " + costForDistance);
    // console.log("With toFixed(4): " + parseFloat(costForDistance).toFixed(4));

    return parseFloat(costForDistance).toFixed(4);
}

function GetCostPer100kmForEnergy(energyUsedPer100, costPerEnergyUnit) {
    return energyUsedPer100 * costPerEnergyUnit;
}

//var fuelRange

//test1, erwartetes Ergebnis: 6,1751 €/100km
// kwhPer100km = 6.1;
// costPerKwh = 0.39;
// electricalRange = 30;
// litresPer100km = 4.7;
// costPerlitre = 1.66;

//test2
// kwhPer100km = 10.5;
// costPerKwh = 0.39;
// electricalRange = 30;
// litresPer100km = 4;
// costPerlitre = 1.66;