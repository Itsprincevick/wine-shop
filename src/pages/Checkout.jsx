import "../Styles/checkout.css";
import Navbar from "../components/Navbar";
import { IoChevronDownOutline } from "react-icons/io5";

function Checkout() {
  return (
    <div className="checkout-container">
      <Navbar />
      <main className="checkout-main">
        <section className="delivery-details-section">
          <h3 className="checkout-title">Checkout</h3>
          <p className="title">Delivery Details</p>
          <input
            className="checkout-input-field"
            type="text"
            placeholder="Full Name"
          />
          <span className="input-group">
            <input
              className="mini-input-field"
              type="text"
              placeholder="Telephone"
            />
            <input
              className="mini-input-field"
              type="email"
              placeholder="Email"
            />
          </span>
          <span className="input-group">
            <span className="icon-space">
              <input
                className="mini-input-field"
                type="text"
                placeholder="State"
              />
              <IoChevronDownOutline className="dropdown"/>
            </span>
            <span className="icon-space">
              <input
                className="mini-input-field"
                type="text"
                placeholder="City"
              />
              <IoChevronDownOutline  className="dropdown"/>
            </span>
          </span>
          <input
            className="checkout-input-field address-input"
            type="text"
            placeholder="Address"
          />
          <p className="create-account">Create Account</p>
          <p className="account-info">
            By creating an account you will be able to earn loyalty points, shop
            faster, be up to date on an order&apos;s status, and keep track of
            the orders you have previously made.
          </p>
        </section>

        <section className="order-summary-section">
          <div className="order-summary">
            <h1 className="order-summary-title">ORDER SUMMARY</h1>
            <div className="order-details">
              <span className="order-detail">
                <p className="detail-label">Subtotal</p>
                <p className="detail-value">$351.84</p>
              </span>
              <span className="order-detail">
                <p className="detail-label">Shipping and handling</p>
                <p className="detail-value">$50.90</p>
              </span>
              <span className="order-detail">
                <p className="detail-label">Total Before Tax</p>
                <p className="detail-value">$402.72</p>
              </span>
            </div>
            <div className="promo-code">
              <p className="promo-label">Promo Code</p>
              <p className="apply-promo">Apply</p>
            </div>
            <button className="button">Checkout</button>
          </div>
        </section>
      </main>
      <footer>
        <p>
          Quisque accumsan pellentesque ipsum aliquam at dolor adipiscing et
          pharetra. Posuere cursus eu odio eleifend imperdiet nunc. Ipsum non
          nunc varius tristique tristique cras eget. Amet ornare tortor in
          porttitor. Nulla dictum bibendum at eleifend accumsan et. Fringilla
          curabitur urna dolor morbi. Curabitur eget dictum adipiscing purus
          metus nunc. At turpis lacus facilisis aliquet pretium. Sagittis in leo
          maecenas proin amet et a turpis aliquet. Enim diam faucibus aliquam
          neque risus. Integer felis odio scelerisque proin consectetur
          sollicitudin dui mi sit. Magna porttitor egestas pharetra justo etiam
          morbi turpis. Pulvinar in faucibus nisl lectus. Augue duis donec
          accumsan pharetra purus sit. At posuere sollicitudin venenatis
          ultricies auctor. Diam lectus sed duis a vestibulum integer sed.
          Bibendum sit duis ut quam feugiat senectus interdum magna lacus. Nisi
          a elementum est dolor feugiat ipsum mollis ullamcorper. Ultricies sed
          molestie amet nam. Purus egestas velit vel suspendisse. Egestas
          vulputate convallis aliquam dui non quis nibh. Ante ultricies morbi ut
          porta amet fames sollicitudin metus. Eget eros venenatis ac volutpat.
        </p>
      </footer>
    </div>
  );
}

export default Checkout;
