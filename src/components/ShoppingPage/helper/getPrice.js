function getPrice(gameName){
    let hash = 0 
    for (let i=0; i < gameName.length; i++){
        hash += gameName.charCodeAt(i);
    }
    let minPrice = 5
    let maxPrice = 30
    let range = maxPrice - minPrice

    const randomPrice = (hash % range) + minPrice + 0.99;
    return randomPrice.toFixed(2);
}

export default getPrice;