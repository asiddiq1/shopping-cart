import './SearchBar.css'
import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

library.add(faMagnifyingGlass)


function SearchBar(){

    const [input, setInput] = useState("");
    const [searchItems, setSearchItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const newRef = useRef(null);

    useEffect(() => {
        async function fetchGames(){
        if (input.trim().length > 0){
            setLoading(true);
            setError(false);
            setSearchOpen(true);
            try {
            const apiUrl = "0bd7afa3efc240588897a488541c3836";
            await fetch(`https://api.rawg.io/api/games?key=${apiUrl}&search=${input}`, {mode: 'cors'})
            .then((response) => response.json()).then((json) => {
                const results = json.results.filter(games => games.background_image).map(games => ({
                    gameName: games.name,
                    gameImg: games.background_image,
                    gameId: games.id
                }))
                setSearchItems(results);
            })
            }
            catch(error){
                setError(true);

            }
            finally{
                setLoading(false);
            }
        }
        else{
            setSearchItems([]);
            setSearchOpen(false);
        }
    }
    fetchGames();
    }, [input])

    const handleOnFocus = () => {
        if (input.trim().length > 0){
            setSearchOpen(true);
        }
        else{
            setSearchOpen(false);
        }
        
    };

    const handleSearchClick = (e) => {
        e.stopPropagation();
        setSearchOpen(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }

    });


    const handleClickOutside =(e) => {
        if (newRef.current && !newRef.current.contains(e.target)){
            setSearchOpen(false);
        }

    }

    return (
        <div className="searchbar-container" ref={newRef}>
            <div className="search-bar">
                <label htmlFor="search-field">  
                    <FontAwesomeIcon className='glass-img' icon={faMagnifyingGlass}/>
                    <input id="search-field" type="search" value={input} onChange={(e) => setInput(e.target.value)} onFocus={handleOnFocus} placeholder='Search games...'/>              
                </label>
            </div>
            {searchOpen &&
            <div className={`searchList ${searchOpen ? 'searchShow': 'searchHide'}`}>
                {loading ? (<div className='loading'><div className='loader'></div></div>):
                error ? (<div className='error'>Search not found. Please try again.</div>):
                (searchItems && searchItems.map((item, index)=> (
                    <Link to={`/shop/games/game/${item.gameId}`} key={item.gameId} style={{textDecoration: 'none', color: 'white'}} onClick={(e) => handleSearchClick(e)}>
                        <div key={`${item}-${index}`} className="search-item-container">
                            <img src={item.gameImg} alt={item.gameName} className='search-img'/>
                            <div className="item-name">{item.gameName}</div>
                        </div>
                    </Link> 
                )))}
            </div> }
        </div>

    );

}

export default SearchBar;