import { useState, useEffect } from 'react';

interface UseFetchOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: any;
}

export const useFetch = <T>(
    url: string,
    options?: UseFetchOptions
): { data: T | null; error: string | null; loading: boolean } => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    method: options?.method || 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        ...options?.headers,
                    },
                    body: options?.body ? JSON.stringify(options.body) : null,
                });
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options]);

    return { data, error, loading };
};
