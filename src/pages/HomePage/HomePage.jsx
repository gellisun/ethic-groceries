import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiArmchairBold } from "react-icons/pi";
import { PiBabyBold } from "react-icons/pi";
import { PiBaseballCapBold } from "react-icons/pi";
import { PiBasketballBold } from "react-icons/pi";
import { PiBeerBottleBold } from "react-icons/pi";
import {ImGithub} from 'react-icons/im';
import './HomePage.css';

export default function HomePage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className={window.innerWidth > 768 ? "wide-screen" : "small-screen"}>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <img
        src="../../../images/homepage-photo.jpeg"
        alt="nature"
        className="homepage-photo"
      />
      <div className="about-us-hp">
      <h3>
        "Our lives begin to end the day we become silent about the things that
        really matter."
      </h3>
      <h4>Martin Luther King Jr.</h4>
      <p>
        We firmly believe in the butterfly effect and for this reason we aim to
        source our products from like-minded businesses, in order to give you
        the opportunity to shop consciously.
      </p>
      <h4>Our partnerships:</h4>
      </div>
      <div className="partnerships-hp">
      <PiAnchorSimpleBold className="hp-icon" size="3rem" color="#50716b" />
      &nbsp;
      <PiArmchairBold className="hp-icon" size="3rem" color="#50716b" />
      &nbsp;
      <PiBabyBold className="hp-icon" size="3rem" color="#50716b" />
      <br />
      <PiBaseballCapBold className="hp-icon" size="3rem" color="#50716b" />
      &nbsp;
      <PiBasketballBold className="hp-icon" size="3rem" color="#50716b" />
      &nbsp;
      <PiBeerBottleBold className="hp-icon" size="3rem" color="#50716b" />
      <br />
      </div>
      <div className="form-container">
      <button className="logging-options" onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>
      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
        
      )}
      </div>
      <footer className="footer">Made with &#127758;&#x1F49A; by Angelica Sandrini&nbsp;<a rel="noreferrer" href="https://github.com/gellisun" target="_blank" ><ImGithub /></a></footer>
    </main>
  );
}
