import React,{useContext} from 'react'
import { MyStore, MyStoreProvider } from '../components/MyContext'

const Home = () => {

  console.log("Home Rendering")

  //  let {count,setCount} = useContext(MyStore);
   
    console.log("Home rendering....")

  return (
    <div>
      <h1>Homepage</h1>
      <button >Increment</button>
      <h1></h1>
    </div>
  )
}

export default Home
