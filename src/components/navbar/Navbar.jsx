import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Erick Leroy",
    isResponsable: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">
              Medi@<sup className="dot">2</sup>rt
            </span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Evenement</span>
          <span>Live</span>
          <span>TV</span>
          <span>Blog</span>
          <span>Results</span>
          <span>Tools</span>
          <span>Sign In</span>
          {!currentUser?.isResponsable && <span>Become an Organizer</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isResponsable && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
          <div className="langue" onClick={() => setLang(!lang)}>
            <img
              src="https://e7.pngegg.com/pngimages/246/354/png-clipart-cork-english-college-france-spanish-language-france-english-flag.png"
              alt=""
            />
            <span>English</span>
            {lang && (
              <div className="langues">
                <Link className="link" to="/">
                  <img
                    src="https://e7.pngegg.com/pngimages/246/354/png-clipart-cork-english-college-france-spanish-language-france-english-flag.png"
                    alt=""
                  />
                  <span>English</span>
                </Link>
                <Link className="link" to="/">
                  <img
                    src="https://image.pngaaa.com/438/2771438-middle.png"
                    alt=""
                  />
                  <span>French</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video Animation
            </Link>
            <Link className="link" to="/">
              Writing and translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Music & AudioÌ
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
