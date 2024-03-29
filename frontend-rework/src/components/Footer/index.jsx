import { FooterComponent } from "./styles";
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

export const Footer = () => {
    return (
        <FooterComponent>
            <article className="flex h-full justify-between items-center">
                <span>© 2023 Booking Hub</span>
                <section className="socialmedia-icons hidden md:flex h-full justify-between items-center gap-8">
                    <Link to="" >
                        <BsFacebook size={24} />
                    </Link>
                    <Link to="" >
                        <FaLinkedinIn size={24} />
                    </Link>
                    <Link to="" >
                        <BsTwitter size={24} />
                    </Link>
                    <Link to="" >
                        <BsInstagram size={24} />
                    </Link>
                </section>
            </article>
        </FooterComponent>
    )
}