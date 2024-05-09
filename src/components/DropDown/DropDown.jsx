import "./DropDown.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DropDown(){

    const [lastyr, setLastyr] = useState(null);

    const navigateTo = useNavigate();

    function handleDropdownChange(event) {
      const selectedValue = event.target.value;
      if (selectedValue == "all-games"){
        navigateTo("/shop/games");
      }
      else if (selectedValue === "last-30-days") {
        navigateTo("/shop/last-30-days");
      } 
      else if (selectedValue === "this-week") {
        navigateTo("/shop/this-week");
      }
      else if (selectedValue == "next-week"){
        navigateTo("/shop/next-week");
      }
      else if (selectedValue == "best-of-year"){
        navigateTo("/shop/best-of-year");
        
      }
      else if (selectedValue == "popular-last-year"){
        navigateTo("/shop/popular-last-year");
      }
      else if (selectedValue == "all-time-top"){
        navigateTo("/shop/all-time-top");
        
      }
    }

    function getPreviousYear() {
        const today = new Date();
        const previousYear = today.getFullYear() - 1;
        setLastyr(previousYear);
      }
    
    useEffect(() => {
        getPreviousYear();
    }, [])

    return (
        <div className="dropdown">
            <select name="games" id="game-dropdown" onChange={handleDropdownChange}>
                <option selected disabled>Section</option>
                <optgroup label="All Games">
                  <option value="all-games">All Games</option>
                </optgroup>
                <optgroup label="New Releases">
                    <option value="last-30-days">Last 30 Days</option>
                    <option value="this-week">This Week</option>
                    <option value="next-week">Next Week</option>
                </optgroup>
                <optgroup label="Top">
                    <option value="best-of-year">Best of the Year</option>
                    <option value="popular-last-year">Popular in {lastyr}</option>
                    <option value="all-time-top">All Time Top</option>
                </optgroup>
            </select>
        </div>
    )



}


export default DropDown;