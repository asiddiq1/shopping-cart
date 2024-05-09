import { useState } from "react";
import useFetchGames from "../helper/fetchGames";
import GridContent from "../helper/GridContent";

function Last30Days(){

    function dateList(){
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);
        const formatToday = today.toISOString().slice(0, 10);
        const formatStart = startDate.toISOString().slice(0, 10);
        return formatStart;
    }

    const [page, setPage] = useState(1);
    const { loading, error, games, hasMore } = useFetchGames({startDate: dateList(), endDate: new Date().toISOString().slice(0, 10), page: page});
    const handleScroll = () => {
      if (!loading && hasMore){
    
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
              setPage(prevPg => prevPg + 1);
        
          }
      }
  }

  window.addEventListener("scroll", handleScroll);

  return(
    <GridContent loading={loading} error={error} games={games} page={page} title="Last 30 Days" />
  );

}


export default Last30Days; 

