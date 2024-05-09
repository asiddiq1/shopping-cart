import { useState } from "react";
import GridContent from "../helper/GridContent";
import useFetchGames from "../helper/fetchGames";

function ThisWeek(){

    function dateList(){
        const today = new Date();
        const currentDay = today.getDay(); 
        const startDate = new Date(today); 
        startDate.setDate(today.getDate() - currentDay);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);

        const formatStart = startDate.toISOString().slice(0, 10);
        const formatEnd = endDate.toISOString().slice(0, 10);
        
        return [formatStart, formatEnd]
    }



    const [page, setPage] = useState(1);
    const { loading, error, games, hasMore } = useFetchGames({startDate: dateList()[0], endDate: dateList()[1], page: page});
    const handleScroll = () => {
      if (!loading && hasMore){
    
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
              setPage(prevPg => prevPg + 1);
        
          }
      }
  }

  window.addEventListener('scroll', handleScroll);



  return(
    <GridContent loading={loading} error={error} games={games} page={page} hasMore={hasMore} title="This Week"/>
    );

}

export default ThisWeek; 

