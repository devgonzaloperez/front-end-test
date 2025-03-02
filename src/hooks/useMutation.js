import { useState } from "react";

export const useMutation = ({ path, method, onSuccess, onError}) => {

    const [isLoading, setIsLoading] = useState(false);
  
    const completeUrl = `${import.meta.env.VITE_API_BASE_URL}/${path}`;
  
    const mutate = async (body) => {
        try {
            setIsLoading(true);
            const response = await fetch(completeUrl, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            });

            if(!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en la petición');
            }

            const data = await response.json();
            if(onSuccess) onSuccess(data);

        }
        catch (err) {
            if(onError) onError(err.message);
        }
        finally {
            setIsLoading(false);
        }

    };
  
    return { isLoading, mutate };

};