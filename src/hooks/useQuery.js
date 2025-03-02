import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useQuery = ({path, cache = true}) => {

    const {readLocalStorageItem, writeLocalStorageItem} = useLocalStorage();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const completeUrl = `${import.meta.env.VITE_API_BASE_URL}/${path}`;

    const fetchData = async () => {
        try{

            if(cache){
                const cachedData = readLocalStorageItem(completeUrl);
                const isCachedDataExpired = !!cachedData && !!(cachedData.expirationDate < Date.now());
                if(cachedData && !isCachedDataExpired){
                    console.log("Data from cache");
                    setData(cachedData.data);
                    return;
                }
            }
            
            console.log("Data from API");
            const response = await fetch(completeUrl);
            const data = await response.json();
            setData(data);
            const expirationDate = Date.now() + 1000 * 60 * 60;
            writeLocalStorageItem(completeUrl, {data, expirationDate});
            
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setIsLoading(false);
        }

    };

    useEffect(() => {
        fetchData();
    }, [completeUrl]);

    return {
        isLoading,
        data,
        error
    }

};