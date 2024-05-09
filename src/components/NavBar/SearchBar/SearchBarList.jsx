import { Link } from 'react-router-dom';
import './SearchBar.css'


function SearchBarList({searchItems, loading, error}){

    return (
        searchItems.length > 0 && (loading ? (
            <div className='loading'>
                <div className='loader'></div>
            </div>
        ) : error ? (
            <div className='error'>A network error occurred</div>
        ) : (
        <div className="searchList">
            {searchItems.map((item, index)=> (
                <Link to={`/shop/games/game/${item.gameId}`} key={item.gameId} style={{textDecoration: 'none', color: 'white'}}>
                    <div key={`${item}-${index}`} className="search-item-container">
                        <img src={item.gameImg} alt={item.gameName} className='search-img'/>
                        <div className="item-name">{item.gameName}</div>
                    </div>
                </Link> 
            ))}
        </div> 
        )
    )
  
    );

}

export default SearchBarList;