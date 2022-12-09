import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Material UI
import { IconButton, Avatar } from "@mui/material";

// Icons
import { BiX } from "react-icons/bi";
import { AiOutlineLaptop } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const background = (bool = false, bool2 = true) => {
    const nav = document.getElementById("nav");

    if (nav)
      if (bool) {
        nav.style.background = "#3e4756";
        nav.style.boxShadow =
          "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)";
      } else if (bool2) {
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
      }
  };

  useEffect(() => {
    window.onscroll = () => {
      background(window.pageYOffset > 30);
    };
  }, []);

  useEffect(() => {
    background(openMenu, window.pageYOffset < 30);
  }, [openMenu]);

  const showMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");

    setOpenMenu(menu.classList.contains("show"));
  };

  const { pathname } = useRouter();

  // Close menu if change page
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <nav className="navbar responsive-flex-column" id="nav">
      <div className="nav-header">
        <Link href="/" className="logo">
          <Avatar
            style={{
              color: "#2d93e4",
              backgroundColor: "#fff",
            }}
          >
            <AiOutlineLaptop />
          </Avatar>
        </Link>
        <IconButton onClick={showMenu}>
          <div className="menu-toggle">
            <a>
              {!openMenu ? (
                <div className="menu-content">
                  <div />
                  <div />
                </div>
              ) : (
                <BiX size={20} style={{ paddingTop: 3 }} />
              )}
            </a>
          </div>
        </IconButton>
      </div>
      <ul className="menu" id="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathname === "/" && (
          <li>
            <a href="#skills">Skills</a>
          </li>
        )}
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/certificates">Certificates</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
