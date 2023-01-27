import React from 'react'
import cx from 'classnames';
import { fas, faBed, faAward, faChevronUp, faChevronDown, faStethoscope, faUserMd, faHospital, faMapMarkerAlt, faHSquare, faIdCard, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import '../../common_scss/reset.scss'
import themeStyles from '../../common_scss/theme.module.scss'
import styles from './AboutHospital.module.scss'

import Head from '../Head/Head';
function AboutHospital() {
    return (
        <>
            <Head title={"AboutHospital"} />
            {/* <!DOCTYPE html> */}
            {/* <!-- SECTION-1 START --> */}
            {/* { <%_include('navbar.ejs') %>} */}
            
            {/* take navbar as a component */}
            {/* <!-- SECTION-1 END --> */}
            {/* <!-- SECTION-2 START --> */}
            <section className={styles.section_2}>
                <div>
                    <img src={require("../../images/contactUs.png")} alt="contactus-jpg" />
                </div>
                <div className={styles.text_overlay}>
                    <h1>About Apollo Hospital</h1>
                    <p>Home / Hospital Profile</p>
                </div>
            </section>
            {/* <!-- SECTION-2 END --> */}
            {/* <!-- SECTION-3 START --> */}
            <section className={styles.section_3}>
                <div className={styles.div_3_0}>
                    <div className={styles.div_3_1}>
                        <img src={require("../../images/appolo.jpg")} alt="doctor-img" />
                        <button className={cx(themeStyles.no_border_dark_blue_button, styles.no_border_dark_blue_button)}>Call Now</button>
                    </div>
                    <div className={styles.desktop_view_1}>
                        <div className={styles.div_3_2}>
                            <hr />
                            <h2>Apollo Hospital</h2>
                        </div>
                        <div className={styles.div_hospital_addition_1}>
                            <div className={cx(styles.div_3_6, styles.div_hospital_addition_2)}>
                                <div className={styles.fav_icon}>
                                    <i >  {/* <FontAwesomeIcon className={cx(styles.fas, styles.fa_map_marker_alt)} icon={solid('fas fa-map-marker-alt')} /> */}
                                        <FontAwesomeIcon className={styles.fa_1} icon={faMapMarkerAlt} />
                                    </i>
                                    {/* <i className={cx(styles.fas, styles.fa_map_marker_alt)}></i> */}
                                </div>
                                <p>Delhi Mathura Road, Sarita Vihar, Delhi 110076</p>
                            </div>
                            <div className={styles.div_3_6}>
                                <div className={styles.fav_icon}>
                                    <i className={cx(styles.fas, styles.fa_bed)}>
                                        <FontAwesomeIcon className={styles.fa_1} icon={faBed} />
                                    </i>
                                </div>
                                <p>113 Beds</p>
                            </div>
                        </div>
                        <div className={styles.div_3_3}>
                            < p className={styles.p_1}>
                                Apollo Hospitals has been a leader in the field of organ
                                transplants and has been considered as one of the best organ
                                transplant hospitals in India.The first successful pediatric and
                                adult liver transplants in India were performed at Apollo
                                Hospitals in November 1998. With over 90% success rates for
                                multiple transplants in India our organ transplant center is a
                                beacon of quality and hope for patients from across the world.
                            </p>
                            <div className={styles.div_3_4}>
                                < div className={styles.div_3_5}>
                                    <div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_award)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faAward} />
                                            </i>
                                        </div >
                                        <h3>Specialization</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < i className={cx(styles.fas, styles.fa_chevron_up)}>
                                            <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronUp} />
                                        </i>
                                    </button >
                                </div >
                                <p>
                                    Surgery of the Spine, including Cervical, Thoracic and Lumbar
                                    Disorders, Disk Herniation, Spinal Stenosis, Spondylolisthesis,
                                    Spondylotic Myelopathy, Spinal Cord Injury, and Spine Trauma.
                                    Also, he had discovered many new techniques for spine treatment.
                                </p>
                                <div className={cx(styles.div_3_5, styles.div_3_5_1)}>
                                    < div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_stethoscope)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faStethoscope} />
                                            </i>
                                        </div >
                                        <h3>Famous Treatments</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < i className={cx(styles.fas, styles.fa_chevron_down)}>
                                            <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronDown} />
                                        </i>
                                    </button >
                                </div >
                                <div className={cx(styles.div_3_5, styles.div_3_5_1)}>
                                    < div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_user_md)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faUserMd} />
                                            </i>
                                        </div >
                                        <h3>Famous Doctors</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < i className={cx(styles.fas, styles.fa_chevron_down)}>
                                            <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronDown} />
                                        </i>
                                    </button >
                                </div >
                                <div className={cx(styles.div_3_5, styles.div_3_5_1)}>
                                    < div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_hospital)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faHospital} />
                                            </i>
                                        </div >
                                        <h3>Infrastructure</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < i className={cx(styles.fas, styles.fa_chevron_down)} >
                                            <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronDown} />
                                        </i>
                                    </button >
                                </div >
                                <div className={cx(styles.div_3_5, styles.div_3_5_1)}>
                                    < div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_map_marker_alt)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faMapMarkerAlt} />
                                            </i>
                                        </div >
                                        <h3>Complete Address</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < i className={cx(styles.fas, styles.fa_chevron_down)}>
                                            <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronDown} />
                                        </i>
                                    </button >
                                </div >
                                <div className={cx(styles.div_3_5, styles.div_3_5_1)}>
                                    < div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_h_square)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faHSquare} />

                                            </i>
                                        </div >
                                        <h3>Hospital Packages</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < div >
                                            <i className={cx(styles.fas, styles.fa_chevron_down)}>
                                                <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronDown} />
                                            </i>
                                        </div >
                                    </button >
                                </div >
                                <div className={cx(styles.div_3_5, styles.div_3_5_1)}>
                                    < div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_rupee_sign)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faRupeeSign} />
                                            </i>
                                        </div >
                                        <h3>Hospital Charges</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < i className={cx(styles.fas, styles.fa_chevron_down)}>
                                            <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronDown} />
                                        </i>
                                    </button >
                                </div >
                                <div className={cx(styles.div_3_5, styles.div_3_5_1)}>
                                    < div className={styles.div_3_6}>
                                        <div className={styles.fav_icon}>
                                            <i className={cx(styles.fas, styles.fa_id_card)}>
                                                <FontAwesomeIcon className={styles.fa_1} icon={faIdCard} />
                                            </i>
                                        </div >
                                        <h3>Membership</h3>
                                    </div >
                                    <button className={themeStyles.arrow_up_down_button}>
                                        < i className={cx(styles.fas, styles.fa_chevron_down)}>
                                            <FontAwesomeIcon className={styles.fa_Chevron} icon={faChevronDown} />
                                        </i>
                                    </button >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </section >
            {/* <!-- SECTION-3 END --> */}

            {/* <!-- SECTION-7 START --> */}
            <section className={styles.section_7}>
                < div className={styles.section_7_desktop}>
                    <div className={styles.section_7_text}>
                        <h2>Need Help?</h2>
                        <p>Just let us know, we will be happy to assit you</p>
                    </div >
                    <div className={styles.section_7_button}>
                        < button className={cx(themeStyles.enquiryButton, styles.enquiryButton)}>Submit your enquiry</button>
                    </div>
                </div >
            </section >
            {/* <!-- SECTION-7 END --> */}

            {/* <!-- FOOTER START --> */}
        

        </>
    )
}

export default AboutHospital