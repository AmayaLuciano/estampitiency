import { createContext, useState } from "react";
import { CartItem, Product } from "../types";

//types

interface props {
     children: JSX.Element | JSX.Element[]
 }

interface CartContextInterface {
     quantity: number
     totalPrice: number
    cart: CartItem[]
    increaseCartQuantity: Function
    decreaseCartQuantity: Function
}

export const CartContext = createContext<CartContextInterface>({
     quantity: 0,
     totalPrice: 0,
    cart: [],
    increaseCartQuantity: () => {},
    decreaseCartQuantity: () => {}
})



export const CartProvider = ({children}: props) => {
    const [cart, setCart] = useState<CartItem[]>([])
    const [quantity, totalPrice] = cart.reduce(function (accu, val) {
        accu[0] += val.quantity
        accu[1] += val.quantity * val.product.price
        return accu
    }, [0, 0])
   

    const increaseCartQuantity = (product:Product) => {
        const addedProduct = cart.find(item => item.product.id === product.id)
        if(addedProduct){
            setCart(cart.map(item => {
                if (item.product.id === product.id){
                return {quantity: ++item.quantity, product}
                }
                else {
                    return {...item}
                }
            }))
        } else {
            setCart([...cart, {product, quantity: 1}])
        }
        console.log(cart)

    }

    const decreaseCartQuantity = (product: Product) => {
        const addedProduct = cart.find(item => item.product.id === product.id)
        if(addedProduct?.quantity === 1){
            setCart(cart.filter(item => item.product.id !== product.id))
        } else {
           setCart(cart.map(item => {
                if (item.product.id === product.id){
                    return {product, quantity: --item.quantity}
                } else{
                    return {...item}
                }
            }))
        }
        console.log(cart)
    }

    return (
        <CartContext.Provider value={{ increaseCartQuantity, decreaseCartQuantity, cart, quantity, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}


