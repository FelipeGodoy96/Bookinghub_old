import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <>
    <footer className="defFooter w-100 d-flex flex-row justify-content-between align-items-center">
      <div className="navFooter px-4">
      ©2021 Lion's Rest
      </div>
     
     
      <div className="SocialMidia gap-3 mx-3 d-flex flex-row align-items-center" >
        <Link className="socialIco nav-link" to="#">
          <BsFacebook size={24} />
        </Link>
        <Link className="socialIco nav-link" to="#">
          <BsInstagram size={24} />
        </Link>
        <Link className="socialIco nav-link" to="#">
          <BsLinkedin size={24}/>
        </Link>
      </div>
    </footer>
    </>
  );
}