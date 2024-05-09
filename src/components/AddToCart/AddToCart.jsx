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
        console.log(gameId);
        event.preventDefault();
        
        const inCart = cartItems.some(item => item.gameId === gameId)
        if (!isAdded && !inCart){
            console.log("checks here");
            addToCart(gameId, gameName, gamePrice, gameImg);
        }
        else if (isAdded){
            addToCart(gameId, gameName, gamePrice, gameImg);
            console.log(cartItems);
            setIsAdded(!isAdded);
        }
        else{
            removeFromCart(gameId);
            console.log(cartItems);
            setIsAdded(!isAdded);

        }
        //check here is isAdded is false again if it is remove item from cart...
    }

    return <button onClick={handleAdded} className={isAdded ? `${className}` : 'added-to-cart'}>{isAdded ? 'Add to cart +' : 'Added to cart ✔' }</button>
    



}

export default AddToCart;