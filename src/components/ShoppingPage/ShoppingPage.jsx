import { useState, useEffect, useRef } from 'react'
import './ShoppingPage.css'
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { Outlet } from "react-router-dom";
import ShopContextProvider from '../ShopContextProvider/ShopContextProvider';
import DropDown from '../DropDown/DropDown';

function ShoppingPage() {

    const newRef = useRef(null);
    const [width, setWidth] = useState(null);


    useEffect(() => {
        const updateWidth = () => {
            if (newRef.current) {
              setWidth(newRef.current.clientWidth);
            }
          };
        
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
          };

      }, []);
    

    return (
        <ShopContextProvider>
            <NavBar/> 
            <div className="main-content" ref={newRef}>
                {width < 780 ? <DropDown/>:  <SideBar/>}
                <Outlet />  
            </div>
            
        </ShopContextProvider>
    )

}


export default ShoppingPage;