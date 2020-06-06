import { useState, useEffect } from 'react';

function useFetch({ url}) {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => {
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
