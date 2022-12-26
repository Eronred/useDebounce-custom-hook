import { useState, useEffect } from 'react';

export const useDebounce = (value, debounceTimeout) => {

    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value)
        }, debounceTimeout);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, debounceTimeout]);

    return debouncedValue;
}