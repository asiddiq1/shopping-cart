import happyGif from '../../../images/happy.gif';

function Checkout(){

    return (

        <div className="checkout">
            <div className="checkout-info">
                <h3>Congraulations on your checkout!</h3>
                <h4>Your order is 'on the way'</h4>
                <img src={happyGif} alt="" />
            </div>
           
        </div>
    )



}


export default Checkout;