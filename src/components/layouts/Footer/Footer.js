import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="footer-div row">
          <div className="col-md-3 col-sm-12 mb-4">
            <Link href={"/"}>
              <div className="logo-div">
                <Image src={"/img/logo.svg"} fill alt={"Logo"} />
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="footer-links">
              <Link href="/about">Haqqımızda</Link>
              <Link href="/faq">Tez-tez verilən suallar</Link>
              <Link href="/privacy">Gizlilik şərtləri</Link>
              <Link target={"_blank"} href={"https://bcp.az/"}>
                Startup
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="social-links"></div>
          </div>
        </div>
        <div className="footer-sub-div">
          <span className="copyright">
            &copy; MYBUS 2023. Bütün hüquqlar qorunur !
          </span>

          <Link target={"_blank"} href={"https://bcp.az/"}>
            <div className="bcp-logo">
              <span>Create by</span>
              <div className="bcp-logo-div">
                <Image src={"/img/bcp_logo.svg"} fill alt={"Logo"} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
