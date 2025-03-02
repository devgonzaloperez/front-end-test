export const capitalizeWords = (sentence) => {
    if(!sentence) return "";
    return sentence
        .toLowerCase() 
        .split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" "); 
};