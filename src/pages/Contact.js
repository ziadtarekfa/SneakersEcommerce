import CategoryCard from '../components/CategoryCard';

import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import '../pagesStyles/Contact.css';

const Contact = () => {
    return (
        <main>
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
                        <input className='default-input' placeholder='Name' required></input>
                        <input className='default-input' placeholder='Email Address' type="email" required></input>
                        <input className='default-input' placeholder='Title' required></input>
                        <textarea className='default-input' placeholder='Message' required></textarea>
                        <button className='default-button'>Submit</button>
                    </form>
                </section>

            </div>
        </main>
    );
}

export default Contact;