
import React, { useEffect, useState } from 'react';

const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        // If end is less than 0, return
        if (end <= 0) return;

        // Calculate the increment and interval
        const increment = end / (duration / 50);
        const interval = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCount(Math.floor(start));
        }, 50);

        return () => clearInterval(interval);
    }, [end, duration]);

    // Format number for display
    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'k';
        }
        return num;
    };

    return <div className="font-bold text-[50px] lg:text-[60px] ">{formatNumber(count)}</div>;
};

export default Counter;