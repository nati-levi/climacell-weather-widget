import { useEffect, useState } from 'react';

function getTime() {
    return (new Date()).getTime();
}

const useTime = (refreshCycle = 60000) => {
    // Returns the current time
    // and queues re-renders every `refreshCycle` milliseconds (default: 100ms)

    const [now, setNow] = useState(getTime());

    useEffect(() => {
        // Regularly set time in state
        // (this will cause your component to re-render frequently)
        const intervalId = setInterval(
            () => setNow(getTime()),
            refreshCycle,
        );

        // Cleanup interval
        return () => clearInterval(intervalId);

        // Specify dependencies for useEffect
    }, [refreshCycle, setInterval, clearInterval, setNow, getTime]);

    return now;
};

export { useTime };
