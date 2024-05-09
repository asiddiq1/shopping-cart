import { useState } from "react";
import useFetchGames from "../helper/fetchGames";
import GridContent from "../helper/GridContent";

function BestofYear(){

    function dateList() {
        const today = new Date();
        const previousYear = today.getFullYear() - 1;
        const startDate = previousYear + '-01-01';
        const endDate = previousYear + '-12-31'
        return [startDate, endDate]
      }

    const [page, setPage] = useState(1);
    const { loading, error, games, hasMore } = useFetchGames({startDate: dateList()[0], endDate: dateList()[1], page: page, ordering: true});
    const handleScroll = () => {
      if (!loading && hasMore){
    
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
              setPage(prevPg => prevPg + 1);
        
          }
      }
  }

  window.addEventListener('scroll', handleScroll);



  return(
    <GridContent loading={loading} error={error} games={games} page={page} hasMore={hasMore} title={`Popular in ${new Date().getFullYear() - 1}`}/>


    );




}

export default BestofYear;