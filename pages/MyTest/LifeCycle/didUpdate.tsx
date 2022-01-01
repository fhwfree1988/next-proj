import {useEffect} from "react";

const componentdUpdate = ()=>{
    useEffect(()=>{
        console.log("Behavior when the component receives new state or props.");
    })

    return <h1>Hello didUpdate</h1>
}

export default componentdUpdate()