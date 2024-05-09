import { useEffect, useState } from "react";
import { platformIcons } from "../helper/platformIcons";
import { Link } from "react-router-dom";
import GameCard from "../../GameCard/GameCard";
import useFetchGames from "../helper/fetchGames";
import GridContent from "../helper/GridContent";


function AllTimeTop(){

    // const [allTime, setAllGames] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [hasMore, setHasMore] = useState(false);
    // const [page, setPage] = useState(1);


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
    //     // let isMounted = true;
    //     async function storeBestYear(){
    //       try{
    //         setLoading(true);
    //         const apiUrl = "0bd7afa3efc240588897a488541c3836";
    //         const url = `https://api.rawg.io/api/games?key=${apiUrl}&ordering=-rating&page=${page}`;
    //         const response = await fetch(url, {mode: 'cors'});
    //         if (!response.ok){
    //           throw new Error("Failed to fetch data")
    //         }

    //         const data = await response.json();
    //         console.log(data);
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
    //         console.log(error);
    //       }
    //       finally{
    //         setLoading(false);
    //       }
    //     }
    //     storeBestYear();
    //     // return () => {
    //     //     isMounted = false;
    //     //   };
    //   }, [page]);

    //   const handleScroll = () => {
    //     if (!loading && hasMore){
      
    //         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    //             setPage(prevPg => prevPg + 1);
          
    //         }
    //     }
    // }

    // window.addEventListener("scroll", handleScroll);

    //   return(
    //     <div className='content-container'>
    //         <h1 className="section-name">All Time Top</h1>
    //         <div className="game-container">
    //             {loading &&
    //                 <div className='loading'>
    //                     <div className='loader'></div>
    //                 </div>}
    //             {error &&
    //                 <div className='error'>A network error occurred</div>
    //             }
    //             {allTime.map((game) => (       
    //                 <Link to={`game/${game.id}`} key={game.id} style={{textDecoration: 'none', color: 'white'}}><GameCard gameName={game.name} gameId={game.id}
    //                 gameBackgroundImg={game.backgroundImage} 
    //                 gamePrice={game.price} gamePlatforms={game.platforms}/></Link> 
    //             ))}
    //             {loading && page > 1 && <div className='loading'><div className='loader'></div></div>}
                
    //         </div>
    //     </div>
    const [page, setPage] = useState(1);
    const { loading, error, games, hasMore } = useFetchGames({page: page, ordering: true});
    const handleScroll = () => {
      if (!loading && hasMore){
    
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
              setPage(prevPg => prevPg + 1);
        
          }
      }
  }

  window.addEventListener('scroll', handleScroll);



  return(
    <GridContent loading={loading} error={error} games={games} page={page} hasMore={hasMore} title="All Time Top"/>


    );




    
}

export default AllTimeTop;