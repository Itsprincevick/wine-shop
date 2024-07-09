import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Styles/collection.css";
import Card from "../components/Cards";
import Champagne from "../assets/images/ChampagneGlass.png";
import Image1 from "../assets/images/man sipping wine.png";
import Image2 from "../assets/images/man sniffing wine.png";
import Image3 from "../assets/images/pouring wine.png";
import PopularWine from "../assets/images/popularWine.png";
import ExclusiveProduct from "../assets/images/exclusiveProduct.png";
import BlackWineGlass from "../assets/BlackWineGlass.svg";
import React, { useRef } from 'react';

const Collection = () => {
  const popularWines = [
    {
      key: 1,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
    {
      key: 2,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
    {
      key: 3,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
    {
      key: 4,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
  ];

  const exclusiveProduct = [
    {
      key: 5,
      image: ExclusiveProduct,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$1,021",
    },
    {
      key: 6,
      image: ExclusiveProduct,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$1,021",
    },
    {
      key: 7,
      image: ExclusiveProduct,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$1,021",
    },
    {
      key: 8,
      image: ExclusiveProduct,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$1,021",
    },
  ];

  const zeroAlcohol = [
    {
      key: 9,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
    {
      key: 10,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
    {
      key: 11,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
    {
      key: 12,
      image: PopularWine,
      wineName: "Francis Ford Coppola Director's Cut Chardonnay 2021",
      location: "Chardonnay | California",
      price: "$21",
    },
  ];

  const secondarySectionRef = useRef(null); // Step 2

  const scrollToSection = () => {
    secondarySectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Step 3
  };

  return (
    <div>
      <Navbar />
      <main className="collection">
        <section className="primary-section">
          <div className="description">
            <h1 className="description-title">Uncork the Perfect Bottle.</h1>
            <p className="description-subtitle">Discover Exquisite Wines for Every Palate.</p>
            <p className="description-text">
              Explore our curated selection of fine wines from renowned
              vineyards around the world. Whether you&apos;re a connoisseur or a
              casual enthusiast, we have the perfect bottle to elevate your
              experience. From rich reds to crisp whites, our collection
              promises to delight and inspire.
            </p>
            <button className="shop-button" onClick={scrollToSection}>Shop Now</button>
          </div>
          <img src={Champagne} alt="Champagne Glass" className="champagne-image" />
        </section>

        <section className="secondary-section">
          <h1 className="section-title">Sip, Savor, and Celebrate with Us</h1>
          <ul className="image-list">
            <li>
              <img src={Image1} alt="Man sipping wine" className="image-item" />
            </li>
            <li>
              <img src={Image2} alt="Man sniffing wine" className="image-item" />
            </li>
            <li>
              <img src={Image3} alt="Pouring wine" className="image-item" />
            </li>
          </ul>
        </section>

        <section className="tertiary-section"ref={secondarySectionRef}>
          <div className="box">
            <h2 className="box-title">
              Our Popular wines{" "}
              <img src={BlackWineGlass} alt="Black Wine Glass Icon" className="title-icon" />
            </h2>
            <div className="cards-container">
              {popularWines.map((card) => (
                <Card key={card.key} {...card} />
              ))}
            </div>
          </div>

          <div className="box red-bg">
            <h2 className="box-title">Exclusive products</h2>
            <div className="cards-container">
              {exclusiveProduct.map((card) => (
                <Card key={card.key} {...card} />
              ))}
            </div>
          </div>
          
          <div className="box">
            <h2 className="box-title">
              Zero Alcohol{" "}
              <img src={BlackWineGlass} alt="Black Wine Glass Icon" className="title-icon" />
            </h2>
            <div className="cards-container">
              {zeroAlcohol.map((card) => (
                <Card key={card.key} {...card} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
