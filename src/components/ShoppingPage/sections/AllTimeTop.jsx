import { useState } from "react";
import useFetchGames from "../helper/fetchGames";
import GridContent from "../helper/GridContent";


function AllTimeTop(){

    const [page, setPage] = useState(1);
    const { loading, error, games, hasMore } = useFetchGames({page: page, ordering: "&ordering=-metacritic"});
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