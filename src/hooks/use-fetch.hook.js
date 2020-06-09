import { useState, useEffect } from 'react';

/**
 * A hook that fetches the given <url>.
 */
function useFetch({ url }) {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((res) => {
                setResponse(res);
                setLoading(false);
            })
            .catch(() => {
                setHasError(true);
                setLoading(false);
            })
    }, [url]);

    return [response, loading, hasError]
}

export { useFetch };
