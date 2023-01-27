import React from 'react'
import cx from 'classnames';
import '../../common_scss/reset.scss'
import themeStyles from '../../common_scss/theme.module.scss'
import styles from './Footer.module.scss';
import { faPinterestP, faFacebookF, faTwitter, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <>
            <>
                <footer>
                    <div className={styles.footer_logo}>
                        <img src={require("../../images/footer.png")} alt="footer_logo_img" />
                        <ul>
                            <li className={styles.footer_doctor_li}>
                                <a href="doctor">Doctor</a>
                            </li>
                            <li><a href="hospital">Hospital</a></li>
                            <li><a href="dentistry">Treatment</a></li>
                            <li>
                                <a className={styles.other_services_a} href="tvastraplus">Other Services</a>
                            </li>
                            <li><a href="faq">FAQs</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_social_media}>
                        <div className={styles.social_media}>
                            <i className={cx(styles.fab, styles.fa_facebook_f)}>
                                <FontAwesomeIcon className={styles.fa_1} icon={faFacebookF} />
                            </i>
                            <i className={cx(styles.fab, styles.fa_pinterest_p)}>
                                <FontAwesomeIcon className={styles.fa_1} icon={faPinterestP} />
                            </i>
                            <i className={cx(styles.fab, styles.fa_twitter)}>
                                <FontAwesomeIcon className={styles.fa_1} icon={faTwitter} />
                            </i>
                            <i className={cx(styles.fab, styles.fa_google_plus_g)}>
                                <FontAwesomeIcon className={styles.fa_1} icon={faGooglePlusG} />
                            </i>
                            <i className={cx(styles.fab, styles.fa_instagram)}>
                                <FontAwesomeIcon className={styles.fa_1} icon={faInstagram} />
                            </i>
                        </div>
                        <p>All Rights Reserved. © tvastra 2018</p>
                    </div>
                </footer>
                {/* <!__ FOOTER END __> */}
                <div id="footer_base_line"></div>

            </>
        </>
    )
}

export default Footer