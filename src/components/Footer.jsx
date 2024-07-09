import "../Styles/footer.css";
import WineGlass from "../assets/WineGlass.svg";
import XIcon from "../assets/XIcon.svg";
import InstagramIcon from "../assets/InstagramIcon.svg";
import FacebookIcon from "../assets/FacebookIcon.svg";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <span className="socials">
          <h1>
            GloryTaste <img src={WineGlass} alt="Wine Glass" />
          </h1>
          <ul>
            <li>
              <img src={XIcon} alt="X Icon"  className="social-icon"/>
            </li>
            <li>
              <img src={InstagramIcon} alt="Instagram Icon" className="social-icon"/>
            </li>
            <li>
              <img src={FacebookIcon} alt="Facebook Icon" className="social-icon"/>
            </li>
          </ul>
        </span>
        <form action="#">
          <label htmlFor="#">Join Our Email List</label>
          <span>
            <input type="text" placeholder="Your email address" />
            <button>send</button>
          </span>
        </form>
      </footer>
    </div>
  );
}

export default Footer;
