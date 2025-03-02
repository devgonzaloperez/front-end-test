export const useLocalStorage = () => {

    const isJsonString = (string) => {
        try{
            JSON.parse(string);
        } 
        catch(e){
            console.log(e);
            return false;
        }
        return true;
    };

    const writeLocalStorageItem = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const readLocalStorageItem = (key) => {
        const item = localStorage.getItem(key);
        if(isJsonString(item)){
            return JSON.parse(localStorage.getItem(key));
        }
        return item;
    };
 
    const removeLocalStorageItem = (key) => {
        localStorage.removeItem(key);
    };

    const cleanLocalStorage = () => { 
        localStorage.clear();
    };

    return {
        writeLocalStorageItem, 
        readLocalStorageItem, 
        removeLocalStorageItem, 
        cleanLocalStorage
    }

};