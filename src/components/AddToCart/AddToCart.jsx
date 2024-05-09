import {useState, useContext, useEffect} from 'react';
import { ShopContext } from '../ShopContextProvider/ShopContextProvider';



function AddToCart({className, gameId, gameName, gamePrice, gameImg}){
    const {addToCart, removeFromCart, cartItems} = useContext(ShopContext);

    const [isAdded, setIsAdded] = useState(true);

    useEffect(()=> {
        const inCart = cartItems.some(item => item.gameId === gameId)
        if (inCart){
            setIsAdded(!isAdded);
        }
    }, [])

    const handleAdded = (event) => {
        event.preventDefault();
        
        const inCart = cartItems.some(item => item.gameId === gameId)
        if (!isAdded && !inCart){
            addToCart(gameId, gameName, gamePrice, gameImg);
        }
        else if (isAdded){
            addToCart(gameId, gameName, gamePrice, gameImg);
            setIsAdded(!isAdded);
        }
        else{
            removeFromCart(gameId);
            setIsAdded(!isAdded);

        }
        //check here is isAdded is false again if it is remove item from cart...
    }

    return <button onClick={handleAdded} className={isAdded ? `${className}` : 'added-to-cart'}>{isAdded ? 'Add to cart +' : 'Added to cart ✔' }</button>
    



}

export default AddToCart;