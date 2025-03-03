export const generateRandomNumberFromString = (min, max, string) => {
    const hashValue = string?.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hashValue % (max - min + 1)) + min;
};