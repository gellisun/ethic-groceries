import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiArmchairBold } from "react-icons/pi";
import { PiBabyBold } from "react-icons/pi";
import { PiBaseballCapBold } from "react-icons/pi";
import { PiBasketballBold } from "react-icons/pi";
import { PiBeerBottleBold } from "react-icons/pi";

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
      <PiAnchorSimpleBold size="3rem" color="#50716b" />
      &nbsp;
      <PiArmchairBold size="3rem" color="#50716b" />
      &nbsp;
      <PiBabyBold size="3rem" color="#50716b" />
      <br />
      <PiBaseballCapBold size="3rem" color="#50716b" />
      &nbsp;
      <PiBasketballBold size="3rem" color="#50716b" />
      &nbsp;
      <PiBeerBottleBold size="3rem" color="#50716b" />
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
    </main>
  );
}
