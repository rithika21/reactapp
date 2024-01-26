import { useEffect,useState } from "react";
const About=()=>{
    const [tabName,setTabname]=useState("you are free from cold Don't take any pills to avvoid sideeffects")
    const updateTablet=()=>{
        setTabname("Welcome to cold club take this tablet Citricin cure it");
    }
    const updateTablet1=()=>{
        setTabname("Welcome to fever club take this tablet Citricin cure it");
    }
    const updateTablet2=()=>{
        setTabname("Welcome to seizure club take this tablet Citricin cure it");
    }
    useEffect(()=>{
        console.log("side effect");
    },[tabName])
    return(
        <div>
            <h1>{tabName}</h1> 
            <button onClick={updateTablet}>Click me if you get cold</button>
            <button onClick={updateTablet1}>Click me if you get fever</button>
            <button onClick={updateTablet2}>Click me if you get epilepsy</button>
        </div>
    )
}
export default About;