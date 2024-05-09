import { platformIcons } from "./platformIcons";

function getPlatforms(platformArr){
    let platformSet = new Set()
    for(let i = 0; i < platformArr.length; i++) {
        if ((platformArr[i] in platformIcons)){
            platformSet.add(platformIcons[platformArr[i]]);
        }
    }
    return Array.from(platformSet);
}

export default getPlatforms;