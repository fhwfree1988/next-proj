import React, { useEffect } from "react";

const ComponentdidUBP = ({ foo }) => {
    useEffect(() => {
        console.log("Behavior when the value of 'foo' changes.");
    }, [foo]);

    return <h1>Hello World</h1>;
};

export default ComponentdidUBP;