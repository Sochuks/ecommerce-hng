import { createContext, useState, useEffect } from 'react';
import axios from 'axios'

const apiUrl = "https://api.timbu.cloud/products?organization_id=2d806405cea942d6957d08f852e35773&reverse_sort=false&page=1&size=10&Appid=SS3NV9AF5ST85D8&Apikey=f34a0f7e438d402ca47476fd88e4a41820240713101109635612";

export const ProductContext = createContext();

export const ProductProvider = ({children})=>{
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch products
  useEffect(()=>{
          
      const fetchProducts = async()=>{
        try {
          const res = await axios.get(`${apiUrl}`)
          setProducts(res.data.items)

        } catch (error) {
          console.error("Error Fetching Products:", error)

        }finally{
          setLoading(false);
        }
      };

      fetchProducts();    
  },[])

  return <ProductContext.Provider value={{products, loading}}>
          {children}  
        </ProductContext.Provider>
}
