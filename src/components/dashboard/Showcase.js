import React from "react";
import "../../styles/Showcase.css";
import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

export const Showcase = () => {
  return (
    <div className="showcase">
      <h2>Discover an Adventure</h2>
      <h1>Made with designs!!</h1>

      <p>Say hello to people out there.</p>
      {/*  */}
      <div className="showcase__buttons">
        <Link to="/SocialNetwork/register">
          <button className="showcase__btn-signup">
            Get Started
            <b className="icon">
              <AiOutlineArrowRight />
            </b>
          </button>
        </Link>
<<<<<<< HEAD
{/*  */}
=======
        {/*  */}

<<<<<<< HEAD
>>>>>>> 0fd0f95 (fix)
=======
>>>>>>> origin
        <Link to="/SocialNetwork/login">
          <button className="showcase__btn-login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
