import "../Styles/contacts.css";
import Footer from "../components/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { RiPhoneFill } from "react-icons/ri";
import Navbar from "../components/Navbar";
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div>
      <Navbar />
      <main className="contact-page">
        <section className="contact-intro">
          <nav className="mobile-contact-nav">
            <Link to="/">
              <GoChevronLeft className="mobile-left-icon" />
            </Link>
            <h1>Contacts</h1>
          </nav>
          <h2>Contact Us</h2>
          <p>
            We’re here to help! From product support to media inquiries, feel
            free to mail us at{" "}
            <span className="email">fulsome_inker_12@gmail.com</span>
          </p>
        </section>

        <section className="contact-details">
          <div className="contacts-container">
            <div className="contact-cards">
              <div className="card-container">
                <div className="card-detail">
                  <h3>Nigeria</h3>
                  <span className="card-info">
                    <FaLocationDot />
                    <p>2286 Royal Lt. Abdul Musa, Abuja, Nigeria</p>
                  </span>
                  <span className="card-info">
                    <RiPhoneFill />
                    <p>+234 (903) 555-345</p>
                  </span>
                </div>
              </div>

              <div className="card-container">
                <div className="card-detail">
                  <h3>USA</h3>
                  <span className="card-info">
                    <FaLocationDot />
                    <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                  </span>
                  <span className="card-info">
                    <RiPhoneFill />
                    <p>+1 (205) 555-0100</p>
                  </span>
                </div>
              </div>
            </div>

            <form action="#" className="contact-form">
              <h2>Send us a message</h2>
              <div className="form-inputs">
                <input type="text" placeholder="Name" className="input-field" />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="input-field"
                />
                <textarea
                  placeholder="Message"
                  className="textarea-field"
                ></textarea>
              </div>
              <button className="submit-button">Send</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contacts;
