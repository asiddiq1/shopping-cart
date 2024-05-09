import { useState, useEffect } from "react";
import getPrice from "./getPrice";
import getPlatforms from "./getPlatforms";

function useFetchGames({startDate, endDate, ordering, page}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [games, setGames] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {

    const getUrl = () => {

        let res = ""
        const apiKey = "0bd7afa3efc240588897a488541c3836";
        const url = `https://api.rawg.io/api/games?key=${apiKey}`;
        if (startDate){
            res += "&dates="
            res += startDate
        }
        if (endDate){
            res += ','
            res += endDate
        }
    
        if (ordering){
            res += "&ordering=-rating"
        }
        
        if (page){
            res += `&page=${page}`;
        }
        return url + res;
    
    }

    async function fetchGames() {
      try {
        setLoading(true);
        const apiUrl = getUrl();
        const response = await fetch(apiUrl, { mode: 'cors' }); 
        if (!response.ok) {
            if (response.status === 404) {
                setHasMore(false);
                throw new Error("Page not found");
              }
            else{
                setHasMore(true);
            }
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setLoading(false);
        const newGames = data.results.map(game => ({
          id: game.id,
          name: game.name,
          backgroundImage: game.background_image,
          price: getPrice(game.slug), 
          platforms: getPlatforms(game.platforms.map(platform => platform.platform.slug))
        }));
        setGames(prevGames => page > 1 ? [...prevGames, ...newGames] : newGames);
        setHasMore(newGames.length > 0);
      } catch (error) {
        setError("A network error has occurred");
        setLoading(false);
      }
    }

    fetchGames();

  }, [page]);


  return { loading, error, games, hasMore };
}

export default useFetchGames;