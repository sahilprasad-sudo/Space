import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios';
import Navbar from './components/Navbar';
import ProductCards from './components/ProductCards';
import CartScreen from './pages/CartScreen';
import { MyStore } from './context/MyContext';

const App = () => {

  const {setCartItems,setIsCartOpen,isCartOpen,cartItems} = useContext(MyStore)

const [productsData, setProductsData] = useState([])
console.log(ProductCards)

const getProductsData = async () =>{
  try{
    let res= await axios("https://fakestoreapi.com/products")
    // response ke andar saara data h jisme actual data  data k andar h 
    setProductsData(res.data);
    console.log(res.data)
  }
  catch(error){
    console.log("Error in API",error)
  }
}

useEffect(() => {
  getProductsData()
}, [])


  return (
    <div className='h-screen flex flex-col'>
      <Navbar />
      {/* <ProductCards/> */}

      {
        isCartOpen?(<div className='h-screen grid grid-cols-4 gap-4 p-4'>
        <CartScreen  cartItems={cartItems}/>
      </div>):(<div className='grid grid-cols-4 gap-4 p-4'>
        {
          productsData.map((elem)=>{

            let isInCart = cartItems.find((val)=>
              val.id === elem.id
            )

            return <ProductCards key={elem.id} product={elem} setCartItems={setCartItems} isInCart={isInCart}/>
          })
        }
      </div>)
      }

    </div>
  )
}

export default App
