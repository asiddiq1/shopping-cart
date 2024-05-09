import { useContext} from "react";
import { ShopContext } from "../../ShopContextProvider/ShopContextProvider";
import './Cart.css';
import { Link } from "react-router-dom";

function Cart(){
    const {cartItems, subTotal, removeFromCart, clearCart} = useContext(ShopContext);


    return (
        <div className="checkout-container">
                {/* <div className="checkout-cart-header">
                    <div className="cartLength">{cartItems.length === 0 ? 'Your shopping cart is empty': `Items in cart: ${cartItems.length}`}</div>
                </div>  */}
                
                
                {subTotal > 0 &&
                <div className="checkout-cartItems">
                    {cartItems.map((item, index) => (
                        <div className="item" key={item.gameId}>
                            <div className="checkout-cartItem-container">
                                <div className="checkout-cartItem-info">
                                <img className="checkout-cartImg" src={item.gameImg} alt={item.gameName} />
                           
                                <div className="cartItem-name">{item.gameName}</div>
                                <div className="cartItem-price">{item.gamePrice}</div>
                                <div className="checkout-removeItem" onClick={() => removeFromCart(item.gameId)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></div>  
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
                        <div className="subtotal-checkout">Subtotal: ${subTotal.toFixed(2)}</div>
                        <Link to="/shop/checkout"><button onClick={() => clearCart()}className="checkout-btn">Checkout</button></Link>
                     
                    </div>

                  
                

        </div>
    )
}


export default Cart;