import { useContext, useState } from "react"
import { Context } from "../Context"

export default function Image(props){
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, cartItems, addItemToCart} = useContext(Context)
    let isItemAdded = false
    isItemAdded = cartItems.some(el => el.img.id === props.img.id)
    return(
        <div 
            className={`${props.className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img alt={props.img.url} src={props.img.url} className="image-grid"/>
            {(hovered || props.img.isFavorite) && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>}
            {(!isItemAdded && hovered) && <i className="ri-add-circle-line cart" 
                onClick={() => addItemToCart({className: props.className, img: props.img})}></i>}
            {(isItemAdded) && <i className="ri-shopping-cart-fill cart"
                onClick={() => addItemToCart({className: props.className, img: props.img})}></i>}
        </div>
    )
}
