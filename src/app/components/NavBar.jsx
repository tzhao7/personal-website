'use client'

import { useState, useEffect } from "react";
import { navItems } from "../constants";
import Link from 'next/link';

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Terry Zhao
        </a>

        <nav className="desktop">
          <ul>
            {navItems.map(item => (
              <li key={item.name} className="relative group">
                <Link href={item.path}>{item.name}</Link>
                <ul className="submenu hidden absolute left-0 top-full group-hover:flex flex-col bg-black-100 text-white-50 shadow-lg rounded z-50">
                  {item.subMenuItems.map(subItem => (
                    <li key={subItem.name} className={subItem.cName}>
                      <Link href={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;