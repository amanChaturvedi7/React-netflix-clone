import "./Nav.css"
import { useState, useEffect } from "react"

function Nav() {
    const [transparentBg, showTransparentBg] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                showTransparentBg(false);
            }
            else {
                showTransparentBg(true);
            }
        });
    }, [])
    return (
        <div className={`nav ${!transparentBg && "nav-transparent"}`}>
            <img
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo" />
            <img
                className="nav-avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Avatar" />
        </div>
    )
}

export default Nav
