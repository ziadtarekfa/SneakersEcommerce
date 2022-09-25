import CategoryCard from '../components/CategoryCard';

import { IoLocation, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { getDatabase, ref, child, push, update, set } from 'firebase/database';


import '../pagesStyles/Contact.css';

const Contact = () => {

    // function submitFeedBackOrQuestions() {
    //     const db = getDatabase();

    //     set(ref(db, 'contact/eu12'), {
    //         name: document.getElementById('name'),
    //         email: document.getElementById('email'),
    //         title: document.getElementById('title'),
    //         message: document.getElementById('message')
    //     });
    // const contactData = {
    //     name: document.getElementById('name'),
    //     email: document.getElementById('email'),
    //     title: document.getElementById('title'),
    //     message: document.getElementById('message')
    // }
    // const newContactKey = push(child(ref(db), 'contact')).key;
    // const updates = {}
    // updates['contact/' + newContactKey] = contactData;
    // // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    // update(ref(db), updates);
    // return update(ref(db), updates);


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
                    <form >
                        <input id="name" className='default-input' placeholder='Name' required></input>
                        <input id="email" className='default-input' placeholder='Email Address' type="email" required></input>
                        <input id="title" className='default-input' placeholder='Title' required></input>
                        <textarea id="message" className='default-input' placeholder='Message' required></textarea>
                        <button className='default-button'>Submit</button>
                    </form>
                    {/* <button className='default-button'>Submit</button> */}
                </section>

            </div>
        </main>
    );
}

export default Contact;