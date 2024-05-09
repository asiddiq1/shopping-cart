import { useEffect, useState } from "react";
import { platformIcons } from "../helper/platformIcons";
import { Link } from "react-router-dom";
import GameCard from "../../GameCard/GameCard";
import GridContent from "../helper/GridContent";
import useFetchGames from "../helper/fetchGames";

function NextWeek(){

    // const [nextWeek, setGames] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [hasMore, setHasMore] = useState(false);
    // const [page, setPage] = useState(1);


    function dateList(){
        const today = new Date();
        const currentDay = today.getDay();
        const daysUntilNextSunday = 7 - currentDay; 
        const startDate = new Date(today); 
        startDate.setDate(today.getDate() + daysUntilNextSunday);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);

        const formatStart = startDate.toISOString().slice(0, 10);
        const formatEnd = endDate.toISOString().slice(0, 10);
        
        return [formatStart, formatEnd]
    }
    const [page, setPage] = useState(1);
    const { loading, error, games, hasMore } = useFetchGames({startDate: dateList()[0], endDate: dateList()[1], page:page});
//     const handleScroll = () => {
//       if (!loading && hasMore){
    
//           if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
//               setPage(prevPg => prevPg + 1);
        
//           }
//       }
//   }

//   window.addEventListener("scroll", handleScroll);

  return(
    <GridContent loading={loading} error={error} games={games} page={page} hasMore={hasMore} title="Next Week" />


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
    //     let isMounted = true;
    //     async function storeLast30(){
    //       try{
    //         setLoading(true);
    //         let [startDate, endDate] = dateList();
    //         const apiUrl = "0bd7afa3efc240588897a488541c3836";
    //         const url = `https://api.rawg.io/api/games?key=${apiUrl}&dates=${startDate},${endDate}`;
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
    //         setGames(games);
        
    //       } catch (error)
    //       {
    //         setError("A network error has occurred");
    //         console.log(error);
    //       }
    //       finally{
    //         setLoading(false);
    //       }
    //     }
    //     storeLast30();
    //     return () => {
    //         isMounted = false;
    //       };
    //   }, []);

    //   return(
    //     <div className='content-container'>
    //         <h1 className="section-name">Next Week</h1>
    //         <div className="game-container">
    //             {loading &&
    //                 <div className='loading'>
    //                     <div className='loader'></div>
    //                 </div>}
    //             {error &&
    //                 <div className='error'>A network error occurred</div>
    //             }
    //             {nextWeek.length > 0 && nextWeek.map((game) => (       
    //                 <Link to={`game/${game.id}`} key={game.id} style={{textDecoration: 'none', color: 'white'}}><GameCard gameName={game.name} gameId={game.id}
    //                 gameBackgroundImg={game.backgroundImage} 
    //                 gamePrice={game.price} gamePlatforms={game.platforms}/></Link> 
    //             ))
    //             }
    //             {/* {loading && page > 1 && <div className='loading'><div className='loader'></div></div>} */}
                
    //         </div>
    //     </div>


    );

}

export default NextWeek; 

