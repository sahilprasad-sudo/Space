import React,{useContext, useEffect} from 'react'
import axios from 'axios'
import MyStore from '../context/MyContext'
import ProductsCard from '../components/ProductsCard'

const Home = () => {

    let {productsData,setProductsData}= useContext(MyStore)

    let getProductsData = async () => {
        try{
            let res = await axios("https://fakestoreapi.com/products")
            setProductsData(res.data)
            console.log(res.data)
        }
        catch(error){
            console.log("Errors",error)
        }
    }

   

    useEffect(() => {
      getProductsData()
    }, [])
    

  return (
    <div className='p-2 grid grid-cols-4 gap-4'>
      {
        productsData.map((val)=>{
          return <ProductsCard key={val.id} product={val}/>
        })
      }
    </div>
  )
}

export default Home
