import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] flex justify-between items-center bg-white z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="flex justify-between items-center h-[60px]">
        <Link to="/" className="flex gap-1 lg:gap-2 items-center">
          <img
            src="/chkoutlogo.png"
            className="w-[30px] md:w-[40px]"
            alt="logo"
          />
          <h1 className="font-fingerPaint font-semibold text-sm lg:text-lg tracking-tighter">
            Chk Out
          </h1>
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}
        <div className="flex items-center gap-2 text-black">
          {/* Icon Start */}
          <Link to="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-1  left-5 md:left-7 text-white text-[10px] md-text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                0
              </div>
            </div>
          </Link>
          {/* Icon End */}
          {/* Icon Start */}
          <Link
            to="/"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              {isAuthenticated ? (
                <img
                  src={user.picture}
                  alt="profile"
                  className="rounded-full w-7 md:w-10"
                />
              ) : (
                <FiUser className="text-[15px] md:text-[20px]" />
              )}

              {profile && (
                <ul className="bg-white absolute top-10 lg:top-[48px] left-[-30px] min-w-[80px] lg:min-w-[120px] px-1 py-1 shadow-lg rounded-sm">
                  {isAuthenticated ? (
                    <li
                      className="h-6 lg:h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </li>
                  ) : (
                    <li
                      className="h-6 lg:h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                      onClick={() => loginWithPopup()}
                    >
                      Log In
                    </li>
                  )}
                </ul>
              )}
            </div>
          </Link>
          {/* Icon End */}
          {/* Mobile Icon Start */}

          <div className="md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px] flex md:hidden"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>

          {/* Mobile Icon End */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
