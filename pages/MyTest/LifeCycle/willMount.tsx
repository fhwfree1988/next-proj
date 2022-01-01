import React, { useEffect } from "react";

const ComponentWMount = () => {
    useEffect(() => {
        return () => {
            console.log("Behavior right before the component is removed from the DOM.");
        }
    }, []);

    return <h1>Hello World</h1>;
};

export default ComponentWMount