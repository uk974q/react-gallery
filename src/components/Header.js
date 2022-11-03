import { useContext, useEffect } from "react"
import {Link} from "react-router-dom"
import { Context } from "../Context"
export default function Header(){
    const {cartItems} = useContext(Context)
    // useEffect(() => {
    //  console.log("Check",cartItems.length)   
    // },[cartItems])
    return(
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                {
                    cartItems.length ? (<i className="ri-shopping-cart-fill ri-fw ri-2x"></i>) :
                    (<i className="ri-shopping-cart-line ri-fw ri-2x"></i>)
                }
            </Link>
        </header>
    )
}