

module.exports.calculateFreight = (baseTax, weight, dimensions, distance, companyType) => {
    let totalFreight;
    
    if (weight > 30)
        baseTax += 10;
    if (dimensions > 50)
        baseTax += 50;
    
    totalFreight = baseTax * distance;

    if (companyType === 'c')
        totalFreight += getInterstateTaxation();   

    return totalFreight;

}

function getInterstateTaxation(region) {
    switch (region) {
        case 'SOUTH':
            return 28;
        case 'SOUTH-EAST':
            return 30;
        case 'CENTER-EAST':
            return 15;
        case 'NORTH-EAST':
            return 20;
        case 'NORTH':
            return 35;
        
    }
}