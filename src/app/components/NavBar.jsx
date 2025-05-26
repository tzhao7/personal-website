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
      <div className="inner flex items-center justify-between">
        <a href="/" className="logo">
          Terry Zhao
        </a>

        <nav className="desktop">
          <ul>
            {navItems.map(item => (
              <li key={item.name} className="relative group">
                <Link href={item.path} className="flex items-center gap-1">
                  {item.name}
                  {item.subMenuItems.length > 0 && (
                    <span className="ml-1 inline-block align-middle">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </Link>
                <ul className="submenu flex-col invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full min-w-[180px] mt-2 shadow-xl rounded-lg transition-all duration-200 z-50 py-2">
                  {item.subMenuItems.map(subItem => (
                    <li
                      key={subItem.name}
                      className="px-4 py-2 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-150 cursor-pointer rounded"
                    >
                      <Link href={subItem.link} className="block w-full h-full">
                        {subItem.name}
                      </Link>
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