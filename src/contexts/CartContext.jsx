import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
  // Cart
  const[cart, setCart] = useState([])
  // Cart Amount
  const [itemAmount, setItemAmount] = useState(0);
  // Cart Total
  const [total, setTotal] = useState(0)
  
  //CALCULATE TOTAL
  useEffect(()=>{
      const total = cart.reduce((accumulator, currentItem)=>{
        const price = parseFloat(currentItem.current_price[0]?.NGN[0] || 0);
        return accumulator + price * currentItem.amount;  
      }, 0);

      setTotal(total);
  }, [cart]);

  //UPDATE CART AMOUNT
  useEffect(()=>{
        if(cart){
          const amount = cart.reduce((accumulator, currentItem)=>{
            return accumulator + currentItem.amount;
          }, 0);
          setItemAmount(amount)
        }
  }, [cart])
 
  //ADD TO CART
  const addToCart = (product, id )=>{
    const newItem = {...product, amount: 1};
    // check if item is already in the cart
    const cartItem = cart.find((item)=>{
      return item.id === id;
    });
    // if cart item was already in the cart
    if (cartItem){
      const newCart = [...cart].map(item=>{
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1}
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem])
    }
  };

  // REMOVE FROM CART
  const removeFromCart =(id)=>{
    const newCart = cart.filter((item)=>{
      return item.id !== id;
    });
    setCart(newCart);

  }

  // CLEAR CART
  const clearCart = () =>{
    setCart([]);
  }

  // INCREASE AMOUNT
  const increaseAmount=(id)=>{
    const cartItem = cart.find((item)=>{
      return item.id === id;
    });
    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1}
        }
        return item;
      })
      setCart(newCart)
    }
    
  }

  // DECREASE AMOUNT
  const decreaseAmount = (id) =>{
    const cartItem = cart.find((item) => {
        return item.id === id;
    });
    if(cartItem){
      const newCart = cart.map((item) =>{
        if (item.id === id){
          return {...item, amount: cartItem.amount - 1}
        } else{
          return item;
        }
      });
      setCart(newCart);
    }
    if(cartItem.amount < 2 ){
        removeFromCart(id);
      }
    
  } 



return <CartContext.Provider 
          value={{
            cart, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            increaseAmount,
            decreaseAmount,
            itemAmount,
            total
            }}>
          {children}
      </CartContext.Provider>
};

export default CartProvider