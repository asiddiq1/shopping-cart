import { Link } from "react-router-dom";
import GameCard from "../../GameCard/GameCard";
import "../ShoppingPage.css";

function GridContent({loading, error, games, page, title, hasMore}){

    return(
        <div className='content-container'>
            <h1 className="section-name">{title}</h1>
            <div className="game-container">
                {loading &&
                    <div className='loading'>
                        <div className='loader'></div>
                    </div>}
                {error && hasMore &&
                    <div className='error'>A network error occurred</div>
                }
                {games.map((game) => ( 
                    game.backgroundImage && (     
                    <Link to={`/shop/games/game/${game.id}`} key={game.id} style={{textDecoration: 'none', color: 'white'}}><GameCard gameName={game.name} gameId={game.id}
                    gameBackgroundImg={game.backgroundImage} 
                    gamePrice={game.price} gamePlatforms={game.platforms}/></Link>) 
                ))}
                {loading && hasMore && <div className='loading'><div className='loader'></div></div>}
                {!loading && !hasMore && games.length == 0 && <div>No games found for {title}</div>}
            </div>
        </div>
    );
}

export default GridContent;