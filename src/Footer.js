import React from "react";

function Footer (){
    const footerTime = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright {footerTime}</p>
        </footer>
    )
}

export default Footer;