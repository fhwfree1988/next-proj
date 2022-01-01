import {useEffect} from "react";

//https://blog.carbonfive.com/replacing-component-lifecycle-methods-with-react-hooks/
//https://www.opcito.com/blogs/lifecycle-methods-and-hooks-in-react
const component= ()=>{
    useEffect(()=>{
        console.log("Behavior before the component is added to the DOM");
    },[])

    return <h1>Hello didMount</h1>
}