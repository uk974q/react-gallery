import { useContext, useState } from "react"
import CartItem from "../components/CartItem"
import { Context } from "../Context"

export default function Cart(){
    const {cartItems, clearCart} = useContext(Context)
    const [orderPlaced, setOrderPlaced] = useState(false)
    // console.log("Cart",cartItems)
    let total = 0
    const cartItemElements = cartItems.map(el => {
        total += (el.img.id*5)
        return <CartItem key={el.img.id} item={el.img}  />
    })
    // setTotalPrice(total)
    // console.log("Total",total, typeof total)
    function handleCheckout(){
        document.getElementById("checkoutBtn").textContent ="Ordering..."
        setTimeout(()=>{
            clearCart()
            setOrderPlaced(true)
        },2000)
    }
    return(
        <main className="cart-page">
            { !orderPlaced ? 
                (
                    <section>    
                        <h1>Checkout</h1>
                        <div className="cart-list">
                            {cartItemElements}
                        </div>
                        <p className="total-price">Total cost: {total.toLocaleString("en-US", {style: "currency", currency: "INR"})}</p>
                        <button id="checkoutBtn" className="btn" onClick={handleCheckout}
                            disabled={!cartItems.length}>Checkout</button>
                    </section>
                ) :
                (
                    <section>
                        <h1>Congratulations! Order Placed</h1>
                    </section>
                )}
        </main>
    )
}