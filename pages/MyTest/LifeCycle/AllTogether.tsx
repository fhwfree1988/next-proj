import React, { useEffect } from "react";

const AllTogether = () => {
    useEffect(() => {
        const intervalId = setInterval(() => {
            document.title = `Time is: ${new Date()}`;
        }, 10);

        return () => {
            document.title = "Time stopped.";
            clearInterval(intervalId);
        }
    }, []);

    return <h1>What time is it?</h1>;
};

export default AllTogether;