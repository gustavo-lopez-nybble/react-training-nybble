import { useEffect, useState } from "react";

type DataType<T> = T | null;
type ErrorType = Error | null;

interface Output<T> {
    data: DataType<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>( url : string): Output<T> => {

    const [data, setData] = useState<DataType<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    const fetchData = async ({ signal }: { signal: AbortSignal }) => {
            
        try {

            setLoading(true);
            const response = await fetch(url, { signal });

            if (!response.ok)
                throw new Error('An error has occurred');

            const result: T = await response.json();
            setData(result);

        } catch (error) {
            if ((error as Error).name === 'AbortError')
                console.log('Fetch aborted');
            else
                setError(error as Error);
              
        } finally {
            setLoading(false);

        }
    }

    useEffect(() => {

        const controller = new AbortController();
        
        fetchData(controller);

        return () => controller.abort();        

    }, [url]);

    return { data, loading, error };
}

