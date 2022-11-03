import { useContext } from "react"
import { Context } from "../Context"

export default function CartItem(props){
    const {deleteCartItem} = useContext(Context)
    let price = props.item.id * 5
    price = price.toLocaleString("en-US", {style: "currency", currency: "INR"})
    function styleDeleteIcon(value,id){
        if(value){
            document.getElementById(`deleteItem${id}`).classList.add("ri-delete-bin-fill")
            document.getElementById(`deleteItem${id}`).classList.remove("ri-delete-bin-line")
        }else{
            document.getElementById(`deleteItem${id}`).classList.add("ri-delete-bin-line")
            document.getElementById(`deleteItem${id}`).classList.remove("ri-delete-bin-fill")
        }
    }
    return(
        <div className="cart-item">
            <img src={props.item.url} />
            <p>Price : {price}</p>
            <i id={`deleteItem${props.item.id}`}
                className="ri-delete-bin-line delete-icon" 
                onClick={()=>deleteCartItem(props.item.id)} 
                onMouseEnter ={()=> styleDeleteIcon(true,props.item.id)}
                onMouseLeave ={()=> styleDeleteIcon(false,props.item.id)}></i>
        </div>
    )
}