import { createContext,children, useState } from "react";

export let MyStore = createContext()

export let MyStoreProvider = ({children})=>{

    console.log("Context Rendering")

    const [count, setCount] = useState(0)
    
    return <MyStore.Provider value={{count,setCount}}>{children}</MyStore.Provider>
}