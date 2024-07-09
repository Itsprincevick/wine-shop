import React from "react";
import Navbar from "../components/Navbar";
import PopularWine from "../assets/images/popularWine.png";
import "../Styles/cart.css";
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import Card from "../components/Cards";

function Cart() {
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

  return (
    <div>
      <Navbar />
      <main className="cart-main">
        <section className="cart-section">
          <div className="shopping-cart-item">
            <h2 className="cart-title">
              Shopping Cart<span>(16)</span>
            </h2>
            <div className="cart-item">
              <img
                className="wine-image"
                src={PopularWine}
                alt="Popular Wine Bottle"
              />
              <div className="item-details">
                <div className="item-info">
                  <h2 className="item-name">
                    Francis Ford Coppola Director&apos;s Cut Chardonnay 2021
                  </h2>
                  <p className="item-description">Chardonnay | California</p>
                  <div className="item-price">
                    <span className="item-quantity">
                      <p>16</p>
                      <p>@</p>
                      <p>$21</p>
                    </span>
                    <p className="total-price">$351</p>
                  </div>
                </div>
                <div className="item-actions">
                  <p className="save-for-later">Save for Later</p>
                  <span className="action-buttons">
                    <button className="remove-button">Remove</button>
                    <Link to="/Checkout">
                      <button className="checkout-button">
                        Proceed to Checkout
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="saved-section">
          <h2 className="saved-title">
            Saved For Later <span className="saved-count">(0)</span>
          </h2>
          <p className="saved-empty">You have no items saved for later.</p>
        </section>

        <footer className="cart-footer">
          <p className="footer-text">
            Quisque accumsan pellentesque ipsum aliquam at dolor adipiscing et
            pharetra. Posuere cursus eu odio eleifend imperdiet nunc. Ipsum non
            nunc varius tristique tristique cras eget. Amet ornare tortor in
            porttitor. Nulla dictum bibendum at eleifend accumsan et. Fringilla
            curabitur urna dolor morbi. Curabitur eget dictum adipiscing purus
            metus nunc. At turpis lacus facilisis aliquet pretium. Sagittis in
            leo maecenas proin amet et a turpis aliquet. Enim diam faucibus
            aliquam neque risus. Integer felis odio scelerisque proin
            consectetur sollicitudin dui mi sit. Magna porttitor egestas
            pharetra justo etiam morbi turpis. Pulvinar in faucibus nisl lectus.
            Augue duis donec accumsan pharetra purus sit. At posuere
            sollicitudin venenatis ultricies auctor. Diam lectus sed duis a
            vestibulum integer sed. Bibendum sit duis ut quam feugiat senectus
            interdum magna lacus. Nisi a elementum est dolor feugiat ipsum
            mollis ullamcorper. Ultricies sed molestie amet nam. Purus egestas
            velit vel suspendisse. Egestas vulputate convallis aliquam dui non
            quis nibh. Ante ultricies morbi ut porta amet fames sollicitudin
            metus. Eget eros venenatis ac volutpat.
          </p>
        </footer>
      </main>

      <main className="cart-main-mobile">
        <nav className="mobile-nav">
          <Link to="/">
            <GoChevronLeft className="mobile-left-icon" />
          </Link>
          <h1>Zero Alcohol</h1>
        </nav>
        <div className="mobile-card-container">
          {popularWines.map((card) => (
            <Card key={card.key} {...card} />
          ))}
        </div>
        <div className="mobile-card-container">
          {popularWines.map((card) => (
            <Card key={card.key} {...card} />
          ))}
        </div>
        <button className="mobile-checkout-button">Proceed to checkout</button>
      </main>
    </div>
  );
}

export default Cart;
