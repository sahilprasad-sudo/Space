import React, { useContext, useState,useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { MyStore, MyStoreProvider } from './components/MyContext'

const App = () => {

  // let {count,setCount} = useContext(MyStore);

 

     

      const [count, setCount] = useState(0)
      const [toggle, setToggle] = useState(false)
       useEffect(()=>{
    console.log("Hey")
  },[toggle])

      

  return (

    
    <div>
      <h1>count is ={count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setToggle((prev)=>!prev)}>Change Toggle State</button>
      
      <Contact/>
      
    </div>
  )
}

export default App
