function calc(kwhPer100km, costPerKwh, electricalRange, litresPer100km, costPerlitre)
{
	//var fuelRange;
	
	//test1, erwartetes Ergebnis: 6,1751 €/100km
	// kwhPer100km = 6.1;
	// costPerKwh = 0.39;
	// electricalRange = 30;
	// litresPer100km = 4.7;
	// costPerlitre = 1.66;

	// kwhPer100km = parseFloat(kwhPer100km);
	// costPerKwh = parseFloat(costPerKwh);
	// electricalRange = parseFloat(electricalRange);
	// litresPer100km = parseFloat(litresPer100km);
	// costPerlitre = parseFloat(costPerlitre);

	var electricalCostPer100km = kwhPer100km * costPerKwh;
	var fuelCostPer100km = litresPer100km * costPerlitre;
	var combinedCostPer100km = (electricalCostPer100km / 100 * electricalRange) + (fuelCostPer100km / 100 * (100 - electricalRange));

	console.log("Calculated: " + combinedCostPer100km);
	console.log("With toFixed(4): " + parseFloat(combinedCostPer100km).toFixed(4));
	
	return parseFloat(combinedCostPer100km).toFixed(4);	
}

	//test2
	// kwhPer100km = 10.5;
	// costPerKwh = 0.39;
	// electricalRange = 30;
	// litresPer100km = 4;
	// costPerlitre = 1.66;