import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ao2zko",
        "template_4y3epzt",
        form.current,
        "3p1uS0uh2JlrQMkrn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <article className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>swatimalvi11@gmail.com</h5>
            <a
              href="mailto:gabhiaf98@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>

          <div className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Swati Malvi</h5>
            <a
              href="Https://m.me/abhideeprocks"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>

          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>8274950230</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8274950230"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </div>
        </article>

        {/* ========END CONTACT OPTION========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            className="user"
            placeholder="Message"
            required
          />
          <button type="submit" value="Send" className="btn btn-primary">
            Send message
          </button>
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
