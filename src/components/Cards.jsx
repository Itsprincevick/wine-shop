import "../Styles/card.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ image, wineName, location, price }) => {
 

  return (
    <div className="card">
      <div className="img-bg">
        <img src={image} alt="Wine Image" />
      </div>
      <div>
          <h3><Link to="/Cart">{wineName}</Link></h3>
          <p>{location}</p>
          <p>{price}</p>
          <button className="add-btn">Add to cart</button>
          <button className="remove-btn">Remove</button>
      </div>
    </div>
  );
};

export default Card;
