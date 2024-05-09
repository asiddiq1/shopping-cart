import { useState } from 'react';
import "../ShoppingPage.css";
import useFetchGames from '../helper/fetchGames';
import GridContent from '../helper/GridContent';

function AllGamesSection(){

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

    );

}

export default AllGamesSection;