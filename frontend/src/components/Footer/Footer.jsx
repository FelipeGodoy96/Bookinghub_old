import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="defFooter mt-3 w-100 d-flex flex-row justify-content-between align-items-center">
      <div className="navFooter px-4 pt-3">
        <p>
        ©2022 Booking Hub
        </p>
       
      </div>

      <div className="SocialMidia gap-3 mx-3 d-flex flex-row align-items-center">
        <Link className="socialIco nav-link" to="/facebook">
          <BsFacebook size={24} />
        </Link>
        <Link className="socialIco nav-link" to="/instagram">
          <BsInstagram size={24} />
        </Link>
        <Link className="socialIco nav-link" to="/linkedin">
          <BsLinkedin size={24} />
        </Link>
      </div>
    </footer>
  );
}
