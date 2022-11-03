import React, {useEffect, useState} from "react"
const Context = React.createContext()

function ContextProvider(props){
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then(res => setAllPhotos(res))
    },[])

    function toggleFavorite(id){
        setAllPhotos(oldPhotos => (
            oldPhotos.map(el => {
                if(el.id === id){
                    el.isFavorite = !el.isFavorite
                }
                return el
            })
        ))
    }

    function addItemToCart(item){
        setCartItems(items => {
            let index = items.findIndex(el => el.img.id === item.img.id)
            // console.log("Index",index)
            if(index >= 0){
                items.splice(index,1)
                return [...items]
            }else{
                return [...items,item]
            }
        })
    }

    function deleteCartItem(id){
        setCartItems(items => {
            let index = items.findIndex(el => el.img.id === id)
            if(index >= 0){
                items.splice(index,1) 
            }
            return [...items]
        })
    }

    function clearCart(){
        setCartItems([])
    }

    return(
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addItemToCart, deleteCartItem, clearCart}}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}