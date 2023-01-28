import React from "react";
import cx from "classnames";
import "../../common_scss/reset.scss";
import themeStyles from "../../common_scss/theme.module.scss";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <div>

            <section className={styles.section_1}>
                <nav className={styles.navbar}>
                    <img
                        className={styles.navbar_logo}
                        src={require("../../images/Logo.jpg")}
                        alt="logo-jpg"
                    />

                    <div className={styles.menu_bar}>
                        <ul>
                            <li> <Link to="/">Home</Link> </li>
                            {/* <li> <Link to="/home">Home</Link> </li> */}
                            <li><a href="/doctor">Doctors</a></li>
                            <li><Link to="/about_hospital">Hospitals</Link></li>
                            {/* <li><Link to="/dentistry">Treatment</Link></li> */}
                            {/* <li><a href="/tvastraplus">Other Services</a></li> */}
                            {/* <li><a href="/aboutus">About</a></li> */}
                            <li><Link to="/contact_us">Contact</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                            <li><Link to="/appointment">Appointment</Link></li>
                            <li><Link to="/others">Other</Link></li>
                        </ul>
                        <div className={styles.menu_buttons}>
                            <form action="/emaillogin" style={{ display: "inline" }}>
                                <button className={styles.login_button}>
                                    Login / Sign Up
                                </button>
                            </form>
                            <button>Get a Quote</button>
                        </div>
                    </div>
                    <div className={styles.menu_toggle}>
                        <i className={cx(styles.fas, styles.fa_bars, styles.fa_2x)}></i>
                    </div>
                </nav>
            </section>
        </div>
    );
}

export default NavBar;
