import React from 'react'
import "./Footer.scss";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="leftfooter">
                <h4>Download our App</h4>
                <p>Download App for Android and IOS mobile phone</p>
            </div>
            <div className="midfooter">
                <h1>Night owl programmer</h1>
                <p>Ecommerce Mern website.</p>
                <p>Copyrights 2022 &copy; Asad Ansari</p>
            </div>
            <div className="rightfooter">
                <h4>Follow Me on</h4>
                <a href="/">Instagram</a>
                <a href="/">Youtube</a>
                <a href="/">Facebook</a>
            </div>
        </footer>
    )
}

export default Footer