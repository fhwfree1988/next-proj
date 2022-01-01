import {useEffect} from "react";

const component = ()=>{
    useEffect(()=>{
        console.log("Behavior when the component receives new state or props.");
    })

    return <h1>Hello didUpdate</h1>
}