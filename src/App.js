import React, { useState, useContext } from "react";
import HERO from "./components/images/hero.svg";
import LOGO from "./components/images/logo.svg";
import PHONE from "./components/images/phone.svg";
import { links } from "./components/links";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./style.scss";
//context for easy passing of state and functions
const AppContext = React.createContext();

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [linkList, setLinkList] = useState(function () {
    const newLinkList = [];
    links.forEach((sublink, index) => {
      newLinkList.push({ id: index, hover: false });

      return sublink;
    });
    return newLinkList;
  });
  // handles pc navbar effects
  const toggleHover = (id, value) => {
    const newLinkList = [...linkList].map((link) => {
      if (link.id === id) {
        link.hover = value;

        return link;
      }
      return link;
    });
    setLinkList(newLinkList);
  };
  //handles mobile friendly navbar
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <AppContext.Provider value={{ linkList, toggleHover, handleClick }}>
      <div className="App">
        <div className="hero">
          <img src={HERO} alt="hero" />
        </div>
        <div className="phone">
          <img src={PHONE} alt="phone" />
        </div>
        <nav>
          <div className="logo">
            <img src={LOGO} alt="stripe logo" />
          </div>
          <div className="links">
            {links.map((singleLink, idx) => {
              return (
                <div key={idx}>
                  <NavLink props={{ singleLink }} id={idx} />
                </div>
              );
            })}
          </div>
          <div className="button">
            <button>Sign in</button>
          </div>
          <div className="nav-button">
            <button onClick={handleClick}>
              <FaBars />
            </button>
          </div>
        </nav>
        <div className="text">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button>Start now</button>
        </div>

        {showModal && <Modal props={links} />}
      </div>
    </AppContext.Provider>
  );
};
//component for navbar links
const NavLink = (props) => {
  const { singleLink } = props.props;
  const idx = props.id;
  const { toggleHover, linkList } = useContext(AppContext);
  return (
    <div className="link">
      <a
        href={singleLink.url}
        onMouseOver={() => {
          toggleHover(idx, true);
        }}
        onMouseLeave={() => toggleHover(idx, false)}
      >
        {singleLink.text}
        {linkList[idx].hover && <Hover {...singleLink.subLinks} />}
      </a>
    </div>
  );
};
//hover linklist
const Hover = ({ title, linkList }) => {
  return (
    <div className="hover">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="subLinks">
        {linkList.map((item, idx) => {
          return (
            <a key={idx} href={item.url} className="sublink">
              {item.icon}
              <p>{item.text}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};
//Modal for mobile navbar
const Modal = (props) => {
  const links = props.props;
  const { handleClick } = useContext(AppContext);
  return (
    <div className="modal">
      <button className="modal-btn" onClick={handleClick}>
        <AiOutlineClose />
      </button>
      {links.map((link, id) => {
        return (
          <div key={id} className="modal-header">
            <h2>{link.text}</h2>
            <div className="modal-links">
              {link.subLinks.linkList.map((sublink, idx) => {
                return (
                  <a key={idx} href={sublink.url} className="sublink">
                    {sublink.icon}
                    <p>{sublink.text}</p>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
