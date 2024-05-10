import "./GamePage.css"
import { useParams } from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import AddToCart from "../AddToCart/AddToCart";
import getPrice from "../ShoppingPage/helper/getPrice";

function GamePage() {

    const {gameId} = useParams();
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const metaScoreRef = useRef(null);


    function setBgImage(root, gameBg, backgroundImg){
        if (!gameBg){
            gameBg = document.createElement('div');
            gameBg.className = 'game-bg-img';
            root.appendChild(gameBg);
        }
        gameBg.style.backgroundImage = `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${backgroundImg})`;
    }

    function formatDate(dateString){
        const date = new Date(dateString);
        const options = {month: 'long', day: 'numeric', year: 'numeric'};
        return date.toLocaleDateString('en-US', options);
    }

    function formatDescription(description){
        const infoList = description.split(/<br\s*\/?>|<\/p>/);
        for (let i = 0; i < infoList.length; i++){
            const info = new DOMParser().parseFromString(infoList[i], 'text/html');
            infoList[i] = info.documentElement.textContent;
        }
        return infoList;
    }

    function createGameObj(game, imageList){
        const gameObj = {
            id: game.id,
            name: game.name,
            slug: game.slug,
            backgroundImage: game.background_image,
            price: getPrice(game.slug),
            description: formatDescription(game.description),
            released: formatDate(game.released),
            metascore: game.metacritic,
            genres: game.genres.map(genre => 
                genre.name
            ),
            developers: game.developers.map(developer => 
                developer.name
            ),
            publishers: game.publishers.map(publishers => 
                publishers.name
            ),
            platforms: game.platforms.map(platform => 
                platform.platform.name
            ),
            images: imageList.map(image => 
                image.image                
                )
        }
        return gameObj;
    }

    useEffect(() => {

        const root = document.getElementById('root');
        let isMounted = true 
        
        async function storeGame(){
            setLoading(true);
          try{
            
            const apiUrl = "0bd7afa3efc240588897a488541c3836";

            const [response, screenshots] = await Promise.all([
                fetch(`https://api.rawg.io/api/games/${gameId}?key=${apiUrl}`, {mode: 'cors'}),
                fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=${apiUrl}`, {mode: 'cors'})
            ]);
            if (!response.ok || !screenshots.ok){
              throw new Error("Failed to fetch data")
            }
            
            const gameData = await response.json();
            const screenshotData = await screenshots.json();

            let gameObj = createGameObj(gameData, screenshotData.results);
            let gameBg = root.querySelector(".game-bg-img");
            setBgImage(root, gameBg, gameObj.backgroundImage);

            //cleans up DOM if asynch task is ongoing
            if (!isMounted && root.contains(gameBg)){
                root.removeChild(gameBg);
                return;
            }

            setGame(gameObj);
          } catch (error)
          {
            console.log("Error fetching data", error);
            setError("A network error has occurred");
          }
          finally{
            setLoading(false);
          }
        }
        storeGame();

        return () => {
            isMounted = false;
            let gameBg = root.querySelector(".game-bg-img");
            if (root.contains(gameBg)){

                root.removeChild(gameBg);
            }    
            root.style.backgroundImage = '../images/slanted-gradient.svg';
          };


      }, [gameId]);


    return (
        <div className="game-content">
            {loading ? (
            <div className='loading'>
                <div className='loader'></div>
            </div>
        ) : error ? (
            <div className='error'>A network error occurred</div>
        ) : (Object.keys(game).length > 0 &&
            <div className="game-page-container">
            <div className="game-header">
                <div className="name">
                    {game.name}
                </div>
                <div className="price-and-add">
                    <div className="price">
                        ${game.price}
                    </div>
                    <AddToCart className='add-to-cart-gamepg' gameId={game.id} gameName={game.name} gamePrice={game.price} gameImg={game.backgroundImage}/>
                </div>
            </div>
            <div className="imgSlider">{game.images && <ImageSlider images={game.images} gameName={game.name}/>}</div>
            
            <div className="game-info">
                <div className="description-info">
                    <div className="description">
                        <h2 className="description-header">About</h2><br/>
                        {game.description?.map((info, index) => (
                            <div key={index}>{info}</div>
                            ))} 
                        </div>
                </div>
                <div className="game-additional-info">
                    {/* <br/> */}
                    {game.platforms && game.platforms.length > 0 && <div className="game-page-platforms">
                        <div className="platform-tile header">Platforms</div>
                        <div className="platform-types">
                            <ul className="platform-game-pg-list game-pg-list">
                                {game.platforms?.map((platform, index, array) => (
                                    <li key={index}>{platform}{index !== array.length - 1 && ', '}</li>
                                ))}
                            </ul>
                        </div>
                    </div>}
                    {game.genres && game.genres.length > 0 && <div className="genres">
                        <div className="genre header">Genres</div>
                        <div className="genre-types">
                            <ul className="genre-game-pg-list game-pg-list">
                                {game.genres?.map((genre, index, array) => (
                                    <li key={index}>{genre}{index !== array.length - 1 && ','}</li>
                                ))}
                            </ul>
                        </div>
                    </div>}
                    {game.developers && game.developers.length > 0 && <div className="developers">
                        <div className="developer header">Developers</div>
                        <div className="developer-types">
                            <ul className="developer-game-pg-list game-pg-list">
                                {game.developers?.map((developer, index, array) => (
                                    <li key={index}>{developer}{index !== array.length - 1 && ','}</li>
                                ))}
                            </ul>
                        </div>
                    </div>}
                    {game.publishers && game.publishers.length > 0 && <div className="publishers">
                        <div className="publisher header">Publishers</div>
                        <div className="publishers-types">
                            <ul className="publishers-game-pg-list game-pg-list">
                                {game.publishers?.map((publisher, index, array) => (
                                    <li key={index}>{publisher}{index !== array.length - 1 && ','}</li>
                                ))}
                            </ul>
                        </div>
                    </div>}
                    {game.released && <div className="released">
                        <div className="release-date header">Release Date</div>
                        <div className="release-date">
                            {game.released}
                        </div>    
                    </div>}
                    {game.metascore && <div className="metascore">
                        <div className="metascore header">Score</div>
                        <a href={`https://rawg.io/games/${game.slug}`} target="_blank" className="metacritic-link">
                            <div className={`score-color ${game.metascore > 75 ? 'high-score' : game.metascore > 50 && game.metascore < 75 ? 'medium-score' : 'low-score'}`} ref={metaScoreRef}>
                                <div className="score">
                                    {game.metascore}
                                </div>  
                            </div>
                        </a>
    
                    </div>}
                </div>
            </div>
            </div>
        )}
        </div>
    );

};

export default GamePage;