import "./GameCard.css"
import AddToCart from "../AddToCart/AddToCart";

function GameCard({gameName, gameId, gameBackgroundImg, gamePrice, gamePlatforms}){


    return (
        <div className="card" key={gameId} >
            <div className="card-content">
                <div className="card-img">
                    <img src={gameBackgroundImg} alt={gameName} />
                </div>
                <div className="card-info">
                    <div className="add-and-price">
                        <AddToCart className='add-to-cart' gameId={gameId} gameName={gameName} gamePrice={gamePrice} gameImg={gameBackgroundImg}/>
                        <div className="price">${gamePrice}</div>
                    </div>
                    <div className="platforms">
                        <div className='platform-container' key={`${gameName}-platform`}>
                        {gamePlatforms.map((plt) => (
                            <div className={`platform ${gameName}-${plt.title}`} key={`${gameName}-${plt.title}`}>{plt.icon}</div>
                            ))}
                        </div>
                    </div>
                    <div className="game-name">
                        {gameName}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;