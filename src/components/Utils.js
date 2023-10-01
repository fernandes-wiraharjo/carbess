export function formattedNumber(value) {
    return Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(value);
};

export function generatePrices(startPrice) {
    const maxPrice = 500, prices = [];
    startPrice = startPrice || 50;
    prices.push({id: 25, name: '25 Juta'});
    while ( startPrice <= maxPrice ) {
        prices.push({id: startPrice, name: `${startPrice} Juta`});
        startPrice += 50;
    }   
    return prices;
};

export function generateYears(startYear) {
    const currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 2010;
    years.push({id: startYear, name: startYear});
    while ( startYear < currentYear ) {
        startYear++;
        years.push({id: startYear, name: startYear});
    }   
    return years;
};

export function generateKilometers(startKilometer) {
    const maxKilometer = 500000, kilometers = [];
    startKilometer = startKilometer || 0;    
    while ( startKilometer <= maxKilometer ) {        
        kilometers.push({id: startKilometer, name: formattedNumber(startKilometer)});
        startKilometer += 10000;
    }   
    return kilometers;
};
