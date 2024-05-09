import { useState, useEffect, useRef } from 'react'
import './ShoppingPage.css'
import NavBar from '../NavBar/NavBar';
import { platformIcons } from './helper/platformIcons';
import GameCard from '../GameCard/GameCard';
import SideBar from '../SideBar/SideBar';
import { Outlet } from "react-router-dom";
import ShopContextProvider from '../ShopContextProvider/ShopContextProvider';
import { useContext } from 'react';
import { ShopContext } from '../ShopContextProvider/ShopContextProvider';
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
    

    function getPlatforms(platformArr){
        let platformSet = new Set()
        for(let i = 0; i < platformArr.length; i++) {
            if ((platformArr[i] in platformIcons)){
                platformSet.add(platformIcons[platformArr[i]]);
            }
        }
        return Array.from(platformSet);
    }

    function getPrice(gameName){
        let hash = 0 
        for (let i=0; i < gameName.length; i++){
            hash += gameName.charCodeAt(i);
        }
        let minPrice = 5
        let maxPrice = 30
        let range = maxPrice - minPrice

        const randomPrice = (hash % range) + minPrice + 0.99;
        return randomPrice.toFixed(2);

    }


    // useEffect(() => {
    //     async function storeAllGames(){
    //       try{
            
    //         const apiUrl = "0bd7afa3efc240588897a488541c3836";

    //         const response = await fetch(`https://api.rawg.io/api/games?key=${apiUrl}`);
    //         if (!response.ok){
    //           throw new Error("Failed to fetch data")
    //         }
            
    //         const data = await response.json();
    //         const games = data.results.map(game => ({
    //             id: game.id,
    //             name: game.name,
    //             backgroundImage: game.background_image,
    //             price: `$${getPrice(game.slug)}`,
    //             platforms: getPlatforms(game.platforms.map(platform => 
    //                 platform.platform.slug
    //             ))
    //         }));
         
    
    //         setAllGames(games);
    //       } catch (error)
    //       {
    //         console.log("Error fetching data", error);
    //       }
    //     }
    //     storeAllGames();
    //   }, []);

    //   console.log(allGames);
    return (
        <ShopContextProvider>
            {/* <style>{'body{background-image: none; background-color: black;}'}</style> */}
            <NavBar/> 
            <div className="main-content" ref={newRef}>
                {width < 780 ? <DropDown/>:  <SideBar/>}
                <Outlet />
           
                {/* <div className="sidebar">
                    <ul>
                        <li>All Games</li>
                        <ul>New Releases
                            <li>Last 30 days</li>
                            <li>This Week</li>
                            <li>Next week</li>
                        </ul>
                    </ul>
                </div> */}
                {/* <div className="game-container">
                    {allGames.map((game, index) => {
                        return (
                         
                            <GameCard gameName={game.name} gameId={game.id} 
                            gameBackgroundImg={game.backgroundImage} 
                            gamePrice={game.price} gamePlatforms={game.platforms}/>
                            // <div className="card" key={game.id} >
                            //     <div className="card-content">
                            //         <div className="card-img">
                            //             <img src={game.backgroundImage} alt={game.name} />
                            //         </div>
                            //         <div className="card-info">
                            //             <div className="add-and-price">
                            //                 <button className='addBtn'>Add to cart +</button>
                            //                 <div className="price">{game.price}</div>
                            //             </div>
                            //             <div className="platforms">
                            //                 <div className='platform-container' key={`${game.name}-platform`}>
                            //                 {game.platforms.map((plt, platformIndex) => (
                            //                     <div className={`platform ${game.name}-${plt.title}`} key={`${game.name}-${plt.title}`}>{plt.icon}</div>
                            //                     ))}
                            //                 </div>
                            //             </div>
                            //             <div className="game-name">
                            //                 {game.name}
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        );

                    })}
                </div> */}
                
            </div>
            

        </ShopContextProvider>
    )

}


export default ShoppingPage;