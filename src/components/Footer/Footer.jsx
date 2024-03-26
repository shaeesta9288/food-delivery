import { assets } from "../../assets/assets";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
           <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quaerat sit unde nostrum voluptatem quae dolore. Corrupti 
             alias officiis nisi quia, perspiciatis molestiae ullam 
             dignissimos, saepe molestias vero repudiandae tempora, atque 
             ducimus quam voluptate accusantium nostrum fugit possimus?
             Totam quos dolor ducimus nemo dolore voluptas in.</p>
             <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
           </div>
           <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privecy Plicy</li>
            </ul>
           </div>
           <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+67-43-29-77-89</li>
                <li>contact@tomato.com</li>
            </ul>
           </div>
        </div>
        <hr/>
        <p className="footer-copy-right">Copyright 2024 &copy; Tomato.com | All Rights Reserved.</p>
    </div>
  )
}

export default Footer