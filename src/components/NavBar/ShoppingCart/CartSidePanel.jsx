import "./CartSidePanel.css"
import { useContext} from "react";
import { ShopContext } from "../../ShopContextProvider/ShopContextProvider";
import AddToCart from "../../AddToCart/AddToCart";
import { Link } from 'react-router-dom';

function CartSidePanel({isOpen, mouseOut, mouseOver, path}){
    const {cartItems, subTotal, removeFromCart} = useContext(ShopContext);
    return (

            <div className={`cart-sidepanel ${isOpen ? 'show' : 'hide'}`} onMouseOut={mouseOut} onMouseOver={mouseOver}>
                <div className="cart-header">
                    <div className="cartLength">{cartItems.length === 0 ? 'Your shopping cart is empty': `Items in cart: ${cartItems.length}`}</div>
                    <div className="close-x" onClick={mouseOut}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                    </div>
                </div> 
                
                
                {subTotal > 0 &&
                <div className="cartItems">
                    {cartItems.map((item, index) => (
                        <div className="item" key={item.gameId}>
                            <div className="checkout-cartItem-info">
                                <img className="cartImg" src={item.gameImg} alt={item.gameName} />
                                <div className="cartItem-name">{item.gameName}</div>
                            </div>
                            <div className="cartItem-name">{item.gamePrice}</div>
                            <button className="removeItem" onClick={() => removeFromCart(item.gameId)}>Remove</button>
                        </div>
                    ))
                    }
                </div>}

                <div className="cart-bottom-links">
                    <div className="subtotal">{ subTotal > 0  && `Subtotal: ${subTotal.toFixed(2)}`}</div>
                    <button className="return-shopping" onClick={mouseOut}>Return to shopping</button>
                    {subTotal > 0 && 
                    <Link to="/shop/cart"><button onClick={mouseOut} className="view-cart">View Cart</button></Link>}
                </div>

            </div>
    );
    
}

export default CartSidePanel;