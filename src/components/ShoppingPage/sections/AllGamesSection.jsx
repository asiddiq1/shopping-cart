import { useState, useEffect } from 'react';
import GameCard from '../../GameCard/GameCard';
import { platformIcons } from '../helper/platformIcons';
import "../ShoppingPage.css";
import { Link } from 'react-router-dom';
import GamePage from '../../GamePage/GamePage';
import getPlatforms from '../helper/getPlatforms';
import getPrice from '../helper/getPrice';
import useFetchGames from '../helper/fetchGames';
import GridContent from '../helper/GridContent';

function AllGamesSection(){

    // const [allGames, setAllGames] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [hasMore, setHasMore] = useState(false);

    // const [apiUrl, setApiUrl] = useState("");
    
    

    // function fetchApiUrl() {
       
    //     const apiKey = "0bd7afa3efc240588897a488541c3836";
    //     const url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}`;
    //     setApiUrl(url);
    //   }
    

    // useEffect(() => {
    //     fetchApiUrl();
    //   }, []);
      

    
    // function getPlatforms(platformArr){
    //     let platformSet = new Set()
    //     for(let i = 0; i < platformArr.length; i++) {
    //         if ((platformArr[i] in platformIcons)){
    //             platformSet.add(platformIcons[platformArr[i]]);
    //         }
    //     }
    //     return Array.from(platformSet);
    // }

    // function getPrice(gameName){
    //     let hash = 0 
    //     for (let i=0; i < gameName.length; i++){
    //         hash += gameName.charCodeAt(i);
    //     }
    //     let minPrice = 5
    //     let maxPrice = 30
    //     let range = maxPrice - minPrice

    //     const randomPrice = (hash % range) + minPrice + 0.99;
    //     return randomPrice.toFixed(2);
    // }

    // useEffect(() => {
    //     async function storeAllGames(){
    //       try{
    //         setLoading(true);
    //         const apiUrl = "0bd7afa3efc240588897a488541c3836";
    //         const response = await fetch(`https://api.rawg.io/api/games?key=${apiUrl}&page=${page}`, {mode:'cors'});
    //         if (!response.ok){
    //           throw new Error("Failed to fetch data")
    //         }

    //         const data = await response.json();
    //         setLoading(false);
    //         const games = data.results.map(game => ({
    //             id: game.id,
    //             name: game.name,
    //             backgroundImage: game.background_image,
    //             price: getPrice(game.slug),
    //             platforms: getPlatforms(game.platforms.map(platform => 
    //                 platform.platform.slug
    //             ))
    //         }));
    //         if (page > 1){
    //             setAllGames(prevGames => [...prevGames, ...games]);
    //         }
    //         else{
    //             setAllGames(games);
    //         }
    //         setHasMore(games.length > 0);
    //       } catch (error)
    //       {
    //         setError("A network error has occurred");
    //       }
    //       finally{
    //         setLoading(false);
    //       }
    //     }
    //     storeAllGames();
    //   }, [page]);

      const [page, setPage] = useState(1);
      const { loading, error, games, hasMore } = useFetchGames({page: page});
      const handleScroll = () => {
        if (!loading && hasMore){
      
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                setPage(prevPg => prevPg + 1);
          
            }
        }
    }

    window.addEventListener("scroll", handleScroll);

    return(
        <GridContent loading={loading} error={error} games={games} page={page} title="All Games" hasMore={hasMore} />
        // <div className='content-container'>
        //     <h1 className="section-name">All Games</h1>
        //     <div className="game-container">
        //         {loading &&
        //             <div className='loading'>
        //                 <div className='loader'></div>
        //             </div>}
        //         {error &&
        //             <div className='error'>A network error occurred</div>
        //         }
        //         {games.map((game) => (       
        //             <Link to={`game/${game.id}`} key={game.id} style={{textDecoration: 'none', color: 'white'}}><GameCard gameName={game.name} gameId={game.id}
        //             gameBackgroundImg={game.backgroundImage} 
        //             gamePrice={game.price} gamePlatforms={game.platforms}/></Link> 
        //         ))}
        //         {loading && page > 1 && <div className='loading'><div className='loader'></div></div>}
                
        //     </div>
        // </div>
    );



    //   return(
    //     <div className='content-container'>
    //         <h1 className="section-name">All Games</h1>
    //         <div className="game-container">
    //             {loading ? (
    //                 <div className='loading'>
    //                     <div className='loader'></div>
    //                 </div>
    //             ) : error ? (
    //                 <div className='error'>A network error occurred</div>
    //             ) : (
    //             allGames.map((game) => (       
    //                 <Link to={`game/${game.id}`} key={game.id} style={{textDecoration: 'none', color: 'white'}}><GameCard gameName={game.name} gameId={game.id}
    //                 gameBackgroundImg={game.backgroundImage} 
    //                 gamePrice={game.price} gamePlatforms={game.platforms}/></Link> 
    //             ))
    //             )}
    //             {loading &&  <div className='loading'><div className='loader'></div></div>}
                
             
                
    //         </div>
    //     </div>


    // );


}

export default AllGamesSection;