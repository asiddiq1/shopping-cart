import { useContext} from "react";
import { ShopContext } from "../../ShopContextProvider/ShopContextProvider";
import './Cart.css';
import { Link } from "react-router-dom";

function Cart(){
    const {cartItems, subTotal, removeFromCart, clearCart} = useContext(ShopContext);


    return (
        <div className="checkout-container"> 
                {subTotal > 0 &&
                <div className="checkout-cartItems">
                    {cartItems.map((item, index) => (
                        <div className="item" key={item.gameId}>
                            <div className="checkout-cartItem-container">
                                <div className="checkout-cartItem-info">
                                    <img className="checkout-cartImg" src={item.gameImg} alt={item.gameName} />
                           
                                    <div className="cartItem-name">{item.gameName}</div>
                                    <div className="cartItem-price">{item.gamePrice}</div>
                                    <div className="checkout-removeItem" onClick={() => removeFromCart(item.gameId)}><svg xmlns="http://www.w3.org/2000/svg" width="15px" height="auto" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></div>  
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    ))
                    }
                    </div>}
                    <div className="checkout-side-container">
                        <div className="checkout-cart-header">
                            <div className="checkout-cartLength">{cartItems.length === 0 ? 'Your shopping cart is empty': `Items in cart: ${cartItems.length}`}</div>
                        </div> 
                        { subTotal > 0 && <div className="subtotal-checkout">Subtotal: ${subTotal.toFixed(2)}</div> &&
                        <Link to="/shop/checkout"><button onClick={() => clearCart()}className="checkout-btn">Checkout</button></Link>
                        }
                    </div>

                  
                

        </div>
    )
}


export default Cart;