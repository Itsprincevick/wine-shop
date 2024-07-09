import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Styles/Home.css";
import Champagne from "../assets/images/ChampagneGlass.png";
import Image1 from "../assets/images/man sipping wine.png";
import Image2 from "../assets/images/man sniffing wine.png";
import Image3 from "../assets/images/pouring wine.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
function Home() {

  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <Navbar />
      <main className="home">
        <section className="home-section primary-section">
          <div className="description">
            <h1 className="description-title">Uncork the Perfect Bottle.</h1>
            <p className="description-subtitle">
              Discover Exquisite Wines for Every Palate.
            </p>
            <p className="description-text">
              Explore our curated selection of fine wines from renowned
              vineyards around the world. Whether you&apos;re a connoisseur or a
              casual enthusiast, we have the perfect bottle to elevate your
              experience. From rich reds to crisp whites, our collection
              promises to delight and inspire.
            </p>
            <Link to="/Collection">
              <button className="shop-button">Shop Now</button>
            </Link>
          </div>
          <img
            src={Champagne}
            alt="Champagne Glass"
            className="champagne-image"
          />
        </section>

        <section className="home-section secondary-section">
          <h1 className="section-title">Sip, Savor, and Celebrate with Us</h1>
          <ul className="image-list">
            <li>
              <img src={Image1} alt="Man sipping wine" className="image-item" />
            </li>
            <li>
              <img
                src={Image2}
                alt="Man sniffing wine"
                className="image-item"
              />
            </li>
            <li>
              <img src={Image3} alt="Pouring wine" className="image-item" />
            </li>
          </ul>
        </section>
        <Footer />
      </main>

      <main className="mobile-home">
        <nav>
          <FaBars  className="bar" onClick={toggleNav}/>
          <h1>GloryTaste</h1>
          {isNavVisible && (
            <div className="navbar-options">
              {/* Navbar options go here */}
              <Link to="/Cart">Cart</Link>
              <Link to="/Contacts">Contact</Link>
            </div>
          )}
        </nav>
        <section className="mobile-home-section">
          <div className="mobile-description">
            <div>
              <h1 className="mobile-home-title">Uncork the Perfect Bottle.</h1>
              <p className="mobile-discover">Discover Exquisite Wines for Every Palate.</p>
              <p className="mobile-explore">
                Explore our curated selection of fine wines from renowned
                vineyards around the world. Whether you&apos;re a connoisseur or a
                casual enthusiast, we have the perfect bottle to elevate your
                experience. From rich reds to crisp whites, our collection
                promises to delight and inspire.
              </p>
            </div>
            <button className="mobile-home-button">Shop Now</button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default Home;
