import {useState, useEffect, createContext} from "react";

export const ShopContext = createContext({
    cartItems: [],
    subTotal: 0,
    addToCart: (gameId, gameName, gamePrice, gameImg) => {},
    removeFromCart: (gameId) => {},
    clearCart: () => {},
});

function ShopContextProvider({children}){
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    //Load cart items from localStorage when component mounts parse it back from string to object
    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        const storedSubTotal = localStorage.getItem('subTotal');
        console.log("load Stored Items");
        if (storedCartItems){
            setCartItems(JSON.parse(storedCartItems));
        }
        if (storedSubTotal){
            setSubTotal(JSON.parse(storedSubTotal));
        }
        else{
            setCartItems([]);
            setSubTotal(0);
        }

    }, []);

    const addToCart = (gameId, gameName, gamePrice, gameImg) => {
        let newItem = {gameId: gameId, gameName: gameName, gamePrice: gamePrice, gameImg: gameImg}
        setCartItems([...cartItems, newItem]);
        setSubTotal(subTotal => subTotal + parseFloat(gamePrice));
    }

    const removeFromCart = (gameId) => {
        let updatedCartItems = cartItems.filter(cart => cart.gameId !== gameId);
        setCartItems(updatedCartItems);
        const game = cartItems.find(game => game.gameId === gameId);
        setSubTotal(subTotal => subTotal - parseFloat(game.gamePrice));
        updateLocalStorage(updatedCartItems, subTotal - parseFloat(game.gamePrice));
    }

    const clearCart = () => {
        setCartItems([]);
        setSubTotal(0);
        updateLocalStorage([], 0);
    }

    //Update localStorage 
    const updateLocalStorage = (updatedCartItems, updatedSubTotal) => {
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        localStorage.setItem('subTotal', JSON.stringify(updatedSubTotal));
    }

    //Update local storage when cart and total changes, stringify data to store JSON obj to JSON txt to server
    useEffect(() => {
        if (cartItems.length !== 0){
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            localStorage.setItem('subTotal', JSON.stringify(subTotal));
        }
        
    },[cartItems, subTotal]);


    return (
        <ShopContext.Provider value={{cartItems, addToCart, removeFromCart, subTotal, clearCart}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;