import { useState } from "react";
import GridContent from "../helper/GridContent";
import useFetchGames from "../helper/fetchGames";

function NextWeek(){

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

  return(
    <GridContent loading={loading} error={error} games={games} page={page} hasMore={hasMore} title="Next Week" />
    );

}

export default NextWeek; 

