import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    open
      ? document.body.classList.add("menu-opened")
      : document.body.classList.remove("menu-opened");
  }, [open]);

  return (
    <nav className="navbar-custom">
      <div className="container">
        <div className="navbar-div">
          <div className="logo-div">
            <Link href={"/"}>
              <Image src={"/img/logo.svg"} fill alt={"Logo"} />
            </Link>
          </div>
          <ul className="navbar-links">
            <li
              className={
                router.pathname === "/about"
                  ? "custom-navbar-link active"
                  : "custom-navbar-link"
              }
            >
              <Link href={"/about"}>Haqqımızda</Link>
            </li>
            <li
              className={
                router.pathname === "/privacy"
                  ? "custom-navbar-link active"
                  : "custom-navbar-link"
              }
            >
              <Link href={"/privacy"}>Gizlilik şərtləri</Link>
            </li>
            <li
              className={
                router.pathname === "/faq"
                  ? "custom-navbar-link active"
                  : "custom-navbar-link"
              }
            >
              <Link href={"/faq"}>Tez-tez verilən suallar</Link>
            </li>
          </ul>
          <button
            className={open ? "menu-btn opened" : "menu-btn closed"}
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            <Image
              src={open ? "/img/x_red.svg" : "/img/menu.svg"}
              fill
              alt={"Menu"}
            />
          </button>
          <div
            className="burger-menu"
            style={
              open
                ? { transform: "translateX(0)" }
                : { transform: "translateX(100vw)" }
            }
          >
            <div className="container">
              <ul className="burger-menu-items">
                <li className="item burger-menu-li">
                  <Link className="burger-link-custom" href="/about">
                    Haqqımızda
                  </Link>
                </li>
                <li className="item burger-menu-li">
                  <Link className="burger-link-custom" href="/privacy">
                    Gizlilik şərtləri
                  </Link>
                </li>
                <li className="item burger-menu-li">
                  <Link className="burger-link-custom" href="/faq">
                    Tez-tez verilən suallar
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mobile-frame">
              <Image src={"/img/menu_frame.svg"} fill alt={"Frame"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
