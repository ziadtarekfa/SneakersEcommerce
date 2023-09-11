
import { AiOutlineCheck } from 'react-icons/ai';
import '../pagesStyles/OrderSuccessful.css';

const OrderSuccessful = () => {
    return (


        <main className="order-successful">

            <div>
                <div className='icon-container'>
                    <AiOutlineCheck />
                </div>
                <h1>Order Successful</h1>
                <p>Congratulations on  your order. Be sure to check your email for order updates</p>

            </div>
        </main>



    );
}

export default OrderSuccessful;