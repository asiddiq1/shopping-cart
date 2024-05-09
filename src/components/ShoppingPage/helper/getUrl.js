function getUrl(startDate="", endDate="", ordering = false, page){

    let res = ""
    const apiKey = "0bd7afa3efc240588897a488541c3836";
    const url = `https://api.rawg.io/api/games?key=${apiKey}`;
    if (startDate){
        res += "&dates="
        res += startDate
    }
    if (endDate){
        res += ','
        res += endDate
    }

    if (ordering){
        res += "&ordering=-rating"
    }

    res += `&page=${page}`;

    return url + res;

}

export default getUrl;