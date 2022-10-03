
import { AiOutlineCheck } from 'react-icons/ai';
import '../pagesStyles/PaymentSuccessful.css';

const PaymentSuccessful = () => {
    return (


        <main className="payment-successful">

            <div>
                <div className='icon-container'>
                    <AiOutlineCheck />
                </div>
                <h1>Payment Successful</h1>
                <p>Congratulation on  your order.Be sure to check your emails for order updates</p>

            </div>
        </main>



    );
}

export default PaymentSuccessful;