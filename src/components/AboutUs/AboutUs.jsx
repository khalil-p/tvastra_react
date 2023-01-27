import React from 'react'
import cx from 'classnames';
import '../../common_scss/reset.scss'
import themeStyles from '../../common_scss/theme.module.scss'
import styles from './AboutUs.module.scss';
import Head from '../Head/Head';

function AboutUs() {
    return (
        <>
            <Head title={"AboutUs"} />

            {/* <!__ SECTION_1 START __> */}
            {/* <%_ include ('navbar.ejs') %> */}
         
            {/* <!__ SECTION_1 END __> */}
            {/* <!__ SECTION_2 START __> */}
            <section className={styles.section_2}>
                <div className={styles.div_2_1}>
                    <div className={styles.div_2_2}>
                        <img src={require("../../images/aboutUs_hero.jpeg")} alt="about_hero_img" />
                        <div className={styles.div_2_3}>
                            <h2>Living healthy matters.</h2>
                            <p>
                                Our specialists sapire to bridge the gap between your benefits
                                plan and the health needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!__ SECTION_2 END __> */}
            {/* <!__ SECTION_3 START __> */}
            <section className={styles.section_3}>
                <div className={styles.tablet_view_1}>
                    <div className={styles.div_3_1}>
                        <h3>
                            You have to begin to tell the story of your life as you now want to
                            be and discontinue the tales.
                        </h3>
                        <p>
                            Deployment long tail monetization strategy equity basic of team of
                            conversion . Supply chain freemium investor long tail agile worker
                            prototype validation influencer maeket share.
                        </p>
                        <p>
                            Deployment long tail monetization strategy equity basic of team of
                            conversion . Supply chain freemium investor long tail agile worker
                            prototype validation influencer maeket share.
                        </p>
                        <p>
                            Deployment long tail monetization strategy equity basic of team of
                            conversion . Supply chain freemium investor long tail agile worker
                            prototype validation influencer maeket share.
                        </p>
                    </div>

                    <div className={styles.div_4_1}>
                        <div className={styles.div_4_2}>
                            <img src={require("../../images/signature.png")} alt="signtue_img" />
                        </div>
                    </div>
                    <div className={styles.div_4_3}>
                        <img src={require("../../images/femaleDoctor.png")} alt="femaleDoctor_img" />
                    </div>
                </div>
            </section>
            {/* <!__ SECTION_3 END __> */}
            {/* <!__ SECTION_5 START __> */}
            <section className={styles.section_5}>
                <div className={styles.desktop_view_1}>
                    <div className={styles.div_5_1}>
                        <div className={styles.div_5_1_1}>
                            <h3>Your wellness build upon the medical daily.</h3>
                            <p>
                                Find your best self here.Descover new ways to live and inspiring
                                life thtough natural beauty, nutrition and diet, an effective life
                                style and better relationships.
                            </p>
                        </div>
                        <div>
                            <button className={themeStyles.enquiryButton}>Get a Free Checkup</button>
                        </div>
                    </div>
                    <div className={styles.div_5_3}>
                        <div className={styles.div_5_2}>
                            <h2>12M</h2>
                            <span>Happy Patients</span>
                        </div>
                        <div className={styles.div_5_2}>
                            <h2>5K</h2>
                            <span>Medical Assistants</span>
                        </div>
                        <div className={styles.div_5_2}>
                            <h2>9.8</h2>
                            <span>Alexa Score</span>
                        </div>
                        <div className={styles.div_5_2}>
                            <h2>3.2K</h2>
                            <span>Doctors Available</span>
                        </div>
                        <div className={styles.div_5_2}>
                            <h2>45K</h2>
                            <span>Cure Rate</span>
                        </div>
                        <div className={styles.div_5_2}>
                            <h2>75</h2>
                            <span>Health Points</span>
                        </div>
                    </div>
                </div>
                <video
                    src={require("../../videos/The New Stamford Hospital TV Commercial 1080 x 1920.mp4")}
                    autoPlay
                    muted
                    loop
                ></video>
            </section>
            {/* <!__ SECTION_5 END __> */}
            {/* <!__ SECTION_7 START __> */}
            <section className={styles.section_7}>
                <div className={styles.section_7_desktop}>
                    <div className={styles.section_7_text}>
                        <h2>Joun our team</h2>
                        <p>We are always looking for good and talented people.</p>
                    </div>
                    <div className={styles.section_7_button}>
                        <button className={cx(themeStyles.enquiryButton,styles.enquiryButton)}>Submit your CV</button>
                    </div>
                </div>
            </section>
            {/* <!__ SECTION_7 END __> */}
            {/* <!__ FOOTER START __> */}
         
            {/* <!__ FOOTER END __> */}

        </>

    )
}

export default AboutUs