import CategoryCard from '../components/CategoryCard';

import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import bgCategory from '../assets/Headers/contact-header.jpg';
import { getDatabase, ref, push } from 'firebase/database';


import '../pagesStyles/Contact.css';

const Contact = () => {

    function submitFeedBackOrQuestions(e) {

        e.preventDefault();
        push(ref(getDatabase(), `contact/`), {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            title: document.getElementById('title').value,
            message: document.getElementById('message').value
        });
        e.target.reset();
    }

    return (
        <main className='contact-wrap'>
            <CategoryCard category="Contact" categoryBgImage={bgCategory} />
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

                <section className='contact-form' onSubmit={submitFeedBackOrQuestions} >
                    <form >
                        <input id="name" className='default-input' placeholder='Name' required></input>
                        <input id="email" className='default-input' placeholder='Email Address' type="email" required></input>
                        <input id="title" className='default-input' placeholder='Title'></input>
                        <textarea id="message" className='default-input' placeholder='Message' required></textarea>
                        <button className='default-button'>Submit</button>
                    </form>

                </section>

            </div>
        </main>
    );
}

export default Contact;