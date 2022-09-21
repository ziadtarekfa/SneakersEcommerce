
import CategoryCard from '../components/CategoryCard';
import '../pagesStyles/Contact.css';
import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div>
            <CategoryCard category="Contact" />
            <div className='contact-container'>
                <section className='contact-info'>

                    <h1>Got questions or feedbacks for us?<br />
                        Fill the form here to reach us.</h1>
                    <div>
                        <IoLocation />
                        <p><span>Sneakers Company,</span> Victoria Island, Lagos</p>
                    </div>
                    <div>
                        <IoCall />
                        <p>(123)-456-778</p>
                    </div>
                    <div>
                        <MdEmail />
                        <p>hikma@sneakerscompany.com</p>
                    </div>
                </section>

                <section className='contact-form'>
                    <form>
                        <input placeholder='Name' required></input>
                        <input placeholder='Email Address' type="email" required></input>
                        <input placeholder='Title' required></input>
                        <textarea placeholder='Message' required></textarea>
                        <button>Submit</button>
                    </form>
                </section>

            </div>
        </div>
    );
}

export default Contact;