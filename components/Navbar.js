import styles from "../styles/Navbar.module.css";
import { GrClose } from "react-icons/gr";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { RiFolderDownloadLine, RiMenuLine, RiHome3Line } from "react-icons/ri";
import Link from "next/link";
import { useEffect, useState } from "react";

const LogoText = "| Anuवादak |";

const Navbar = () => {
  const closeNavBar = () => {
    document.getElementById("nav-bar").style.height = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  };
  const openNavBar = () => {
    document.getElementById("nav-bar").style.height = "100%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("finalNavHeadLogo").style.color = "#40C9A2";
  };
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      openNavBar();
    } else if (isOpen == false) {
      closeNavBar();
    }
  }, [isOpen]);
  return (
    <>
      <div className={styles.initialNav}>
        <h1 className={styles.logo} id="initialLogo">
          {LogoText}
        </h1>
        <RiMenuLine
          onClick={() => setIsOpen(!isOpen)}
          className={styles.openBtn}
          size="2.2rem"
        />
      </div>

      <div className={styles.navbar_container} id="nav-bar">
        <NavbarList
          closeNavBarHandler={() => closeNavBar()}
          setIsOpenHandler={(value) => setIsOpen(value)}
        />
      </div>
    </>
  );
};

export default Navbar;

const NavbarList = ({ closeNavBarHandler, setIsOpenHandler }) => {
  return (
    <>
      <div className={styles.finalNavHead}>
        <h1 className={styles.logo} id="finalNavHeadLogo">
          {LogoText}
        </h1>
        <GrClose
          className={styles.closeBtn}
          onClick={() => setIsOpenHandler(false)}
          size="2.2rem"
          color="white"
        />
      </div>

      <ul className={styles.navbar_list}>
        {navbarList.length !== 0
          ? navbarList.map((elem) => (
              <Link href={elem.path}>
                <li key={elem.name}>
                  <a
                    onClick={() => {
                      closeNavBarHandler();
                      setIsOpenHandler(false);
                    }}
                  >
                    {elem.icon} {elem.name}
                  </a>
                </li>
              </Link>
            ))
          : "Empty"}
      </ul>
    </>
  );
};

const navbarList = [
  { name: "Home", path: "/#hero", icon: <RiHome3Line size="2.2rem" /> },
  {
    name: "Features",
    path: "/#features",
    icon: <MdOutlineFeaturedPlayList size="2.2rem" />,
  },
  {
    name: "Download",
    path: "/#download",
    icon: <RiFolderDownloadLine size="2.2rem" />,
  },
];
