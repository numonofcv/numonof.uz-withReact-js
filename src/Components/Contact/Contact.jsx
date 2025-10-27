import React from "react";
import "./Contact.scss";
export default function Contact() {
    return (
        <section className="contact">
            <div className="container hero__container">
                <div className="content">
                    <h3 className="title">Contact Me</h3>
                    <p className="description">
                        Feel free to reach out to me for any inquiries, collaborations, or just to say hello! I'm always
                        open to connecting with fellow developers, potential clients, and anyone interested in web
                        development. You can contact me via email at{" "}
                        <a href="mailto:numonofcv@gmail.com">numonofcv@gmail.com</a>.
                    </p>
                    
                    <form action="https://formspree.io/f/mayvlrza" method="POST" className="contact__form">
                        <input type="text" className="contact__input" name="name" placeholder="Your Name" required />
                        <input type="email" className="contact__input" name="email" placeholder="Your Email" required />
                        <textarea
                            className="contact__textarea"
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                        ></textarea>
                        <button type="submit" className="button-active">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
