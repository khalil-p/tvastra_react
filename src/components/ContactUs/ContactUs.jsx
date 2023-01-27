import React from 'react'
import cx from 'classnames';
import '../../common_scss/reset.scss'
import themeStyles from '../../common_scss/theme.module.scss'
import styles from './ContactUs.module.scss'
import Head from '../Head/Head';

function ContactUs() {
    return (
        <>
            <Head title={"ContactUs"} />
            {/* <!__ SECTION_1 START __>
          <%_ include ('navbar.ejs') %>
          <!__ SECTION_1 END __> */}

            <section className={styles.section_2}>
                <div>
                    <img src={require("../../images/contactUs.png")} alt="contactus_jpg" />
                </div>
                <div className={styles.text_overlay}>
                    <h1>Contact Us</h1>
                    <p>Home / Contact Us</p>
                </div>
            </section>

            <section className={styles.section_3}>
                <div id={styles.map}>

                    <iframe class="gmap_iframe" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=818&amp;height=400&amp;hl=en&amp;q=saifi hospital&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                </div>
            </section>
            <div className={styles.desktop_view_1}>
                <section id={styles.section_4}>
                    <div className={cx(styles.contact_info, styles.div_1)}>
                        <div className={styles.icon}>
                            <i className={cx(styles.fas, styles.fa_home)}></i>
                        </div>
                        <div className={styles.info}>
                            <h4>Noida, India</h4>
                            <span>Sector 45</span>
                        </div>
                    </div>
                    <div className={styles.contact_info}>
                        <div className={styles.icon}>
                            <i className={cx(styles.fas, styles.fa_phone_alt)}></i>
                        </div>
                        <div className={styles.info}>
                            <h4>00 (440) 9865 562</h4>
                            <span>Mon to Fri 9am t0 6pm</span>
                        </div>
                    </div>
                    <div className={styles.contact_info}>
                        <div className={styles.icon}>
                            <i className={cx(styles.fas, styles.fa_envelope_open_text)}></i>
                        </div>
                        <div className={cx(styles.info, styles.tablet_info)}>
                            <h4>support@tvastra.com</h4>
                            <span>Send us your querry anytime</span>
                        </div>
                    </div>
                </section>
                <section id={styles.section_5}>
                    <div className={styles.send_message}>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="text" placeholder="Enter Email Address" />
                        <input type="text" placeholder="Enter Subject" />
                        <input type="text" className={styles.message} placeholder="Enter Your Message" />
                        <textarea
                            name="message"
                            id={styles.message}
                            cols="30"
                            rows="5"
                            placeholder="Enter Your Message"
                        ></textarea>
                    </div>
                    <div className={styles.send_button}>
                        <button>Send Message</button>
                    </div>
                </section>
            </div>
            <section className={styles.hr_section}>
                <hr />
            </section>
            {/* <script
              src="https://maps.googleapis.com/maps/api/js?key=AIzaSyApGxsEyjk3HlPkfhgw4lJnnpaTBQDTWlI&callback=initMap&libraries=&v=weekly"
              async
          ></script> */}
            {/* <script src="assets/scripts/map.js"></script> */}

        </>
    )
}

export default ContactUs