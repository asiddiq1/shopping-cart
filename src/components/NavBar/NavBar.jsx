import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext} from "react";
import { ShopContext } from '../ShopContextProvider/ShopContextProvider';
import SearchBar from './SearchBar/SearchBar';
import CartSidePanel from './ShoppingCart/CartSidePanel';
import { Link } from "react-router-dom";


library.add(faCartShopping)



function NavBar() {

    const {cartItems} = useContext(ShopContext);
    const [shoppingHover, setShoppingHover] = useState(false);
    let hoverTimeout;


    function handleMouseOver() {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            setShoppingHover(true);
        }, 300); 
    };  

    function handleMouseOut() {
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            setShoppingHover(false);
        }, 300); 
        // setShoppingHover(false);
    };
    
    return (
        <>
        <nav className='navbar' id="navbar">
            <div className="navbar-content">
                <Link to="/" style={{textDecoration: 'none', color: 'white'}}><div className='logo-name'>Game <span className="shoppe">Shoppe</span></div></Link>
                <SearchBar/>
                <div className='shopping-cart'>
                    <FontAwesomeIcon className="shoppingIcon" icon={faCartShopping} onMouseOver={handleMouseOver}/>
                    {cartItems.length > 0 &&
                    <div className='counter-bubble'>
                        <div className="count">
                            {cartItems.length}
                        </div>
                    </div>}
                </div>
                <CartSidePanel isOpen={shoppingHover} mouseOut={handleMouseOut} mouseOver={handleMouseOver}/>
            </div>
            
        </nav>
        </>
    )
}

export default NavBar;