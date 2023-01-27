import React from 'react'
import cx from 'classnames';

import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../common_scss/reset.scss'
import themeStyles from '../../common_scss/theme.module.scss';
import styles from './Index.module.scss'
function Index() {
    const handleOnClick = () => {
        console.log("vsvdvdvd")
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.front_page}>
                    {/* <!__ SECTION_1 START __> */}
                    {/* <%_ include ('navbar.ejs') %> */}
                    {/* <!__ SECTION_1 END __> */}
                    {/* <!__ SECTION_2 START __> */}
                    <section className={styles.section_2} id={styles.hospital}>
                        <div className={styles.section_2_desktop}>
                            <div className={styles.section_2_text}>
                                <h1>Find Affordable Healthcare</h1>
                                <p>
                                    Join thousands of others who have excercised their rights to
                                    quality healthcare at a price you can afford
                                </p>
                            </div>
                            <div className={styles.search_section}>
                                <div className={styles.search_section_location}>
                                    <div className={styles.location_icon}>
                                        
                                        <i className={cx(styles.fas, styles.fa_map_marker_alt, styles.fa_2x, styles.i_1)}>
                                            <FontAwesomeIcon className={styles.fa_1} icon={faMapMarkerAlt} />
                                        </i>
                                    </div>

                                    <input className={styles.location} type="text" placeholder="Ahemdabad" />

                                    <div className={styles.gps_icon}>
                                        <img className={styles.gps} src={require("../../images/gps.png")} alt="gps_img" />

                                    </div>
                                </div>
                                <input
                                    className={styles.search_for}
                                    type="text"
                                    placeholder="Search for Doctors, hospitals and treatments"
                                />
                                <button className={styles.search_button} >Search</button>
                            </div>
                        </div>
                    </section>
                    {/* <!__ SECTION_2 END __> */}

                    {/* <!__ SECTION_3 START __> */}
                    <section className={styles.section_3}>
                        <div className={styles.section_3_text}>
                            <h2>How it works</h2>
                            <p>
                                Various facilities are provided here.But there is a protocol which
                                needs to be followed so that you get the services at its best
                            </p>
                        </div>

                        <ol id={styles.ol_mobile_view}>
                            <div className={styles.section_3_grid}>
                                
                                <div className={styles.grid_1} >
                                    <li id={styles.index1} onClick={handleOnClick}>
                                        <a >
                                            <h3 className={styles.fix_consultation}>
                                                <span className={styles.specialSpan} id={styles.index1Span}>01</span> &nbsp;
                                                Fix Consultaion
                                            </h3>
                                        </a>
                                    </li>
                                </div>
                               
                                <div id={styles.index1img}>
                                    <div className={styles.grid_3}>

                                        <img src={require("../../images/img1.png")} alt="img1_png" />
                                        <div className={styles.grid_4}>
                                            <h3>Fix Consultaion</h3>
                                            <p>
                                                This depicts that user will have to fix appointment first
                                                when it selects a particular doctor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.grid_2}>
                                    <div>
                                        <li id={styles.index2} >
                                            <a onClick={handleOnClick}>
                                                <h3>
                                                    <span id={styles.index2Span}>02</span> &nbsp; Upload Medical
                                                    Reports
                                                </h3>
                                            </a>
                                        </li>
                                        <div className={styles.inactive} id={styles.index2img}>
                                            <div className={styles.grid_3}>

                                                <img src={require("../../images/img6.jpg")} alt="img6_jpg" />
                                                <div className={styles.grid_4}>
                                                    <h3>Fix Consultaion</h3>
                                                    <p>
                                                        This depicts that user will have to fix appointment
                                                        first when it selects a particular doctor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <li id={styles.index3} onClick="showGrid('index3')">
                                            <a>
                                                <h3>
                                                    <span id={styles.index3Span}>03</span> &nbsp; Consult with
                                                    doctor
                                                </h3>
                                            </a>
                                        </li>
                                        <div className={styles.inactive} id={styles.index3img}>
                                            <div className={styles.grid_3}>
                                                .....................
                                                <img src={require("../../images/img2.png")} alt="img2_png" />
                                                <div className={styles.grid_4}>
                                                    <h3>Fix Consultaion</h3>
                                                    <p>
                                                        This depicts that user will have to fix appointment
                                                        first when it selects a particular doctor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <li id={styles.index4} onClick="showGrid('index4')">
                                            <a>
                                                <h3>
                                                    <span id={styles.index4Span}>04</span> &nbsp; Fix Surgery
                                                </h3>
                                            </a>
                                        </li>
                                        <div className={styles.inactive} id={styles.index4img}>
                                            <div className={styles.grid_3}>

                                                <img src={require("../../images/img7.jpeg")} alt="img7_jpeg" />
                                                <div className={styles.grid_4}>
                                                    <h3>Fix Consultaion</h3>
                                                    <p>
                                                        This depicts that user will have to fix appointment
                                                        first when it selects a particular doctor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <li id={styles.index5} onClick="showGrid('index5')">
                                            <a>
                                                <h3>
                                                    <span id={styles.index5Span}>05</span> &nbsp; Hospital sent
                                                    estimates
                                                </h3>
                                            </a>
                                        </li>
                                        <div className={styles.inactive} id={styles.index5img}>
                                            <div className={styles.grid_3}>
                                                <img src={require("../../images/img2.png")} alt="img2_png" />
                                                <div className={styles.grid_4}>
                                                    <h3>Fix Consultaion</h3>
                                                    <p>
                                                        This depicts that user will have to fix appointment
                                                        first when it selects a particular doctor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <li id={styles.index6} onClick="showGrid('index6')">
                                            <a>
                                                <h3><span id={styles.index6Span}>06</span> &nbsp; Payment</h3>
                                            </a>
                                        </li>
                                        <div className={styles.inactive} id={styles.index6img}>
                                            <div className={styles.grid_3}>
                                                <img src={require("../../images/img3.jpeg")} alt="img3_jpeg" />
                                                <div className={styles.grid_4}>
                                                    <h3>Fix Consultaion</h3>
                                                    <p>
                                                        This depicts that user will have to fix appointment
                                                        first when it selects a particular doctor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <li id={styles.index7} onClick="showGrid('index7')">
                                            <a>
                                                <h3>
                                                    <span id={styles.index7Span}>07</span> &nbsp; Surgery Completed
                                                </h3>
                                            </a>
                                        </li>
                                        <div className={styles.inactive} id={styles.index7img}>
                                            <div className={styles.grid_3}>
                                                <img src={require("../../images/img4.jpeg")} alt="img4_jpeg" />
                                                <div className={styles.grid_4}>
                                                    <h3>Fix Consultaion</h3>
                                                    <p>
                                                        This depicts that user will have to fix appointment
                                                        first when it selects a particular doctor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ol>

                        <ol id={styles.ol_tablet_view}>
                            <div className={styles.section_3_grid}>
                                <div className={styles.grid_1}>
                                    <li id={styles.indexTablet1} onClick="showGridTablet('indexTablet1')">
                                        <a>
                                            <h3 className={styles.fix_consultation}>
                                                <span id={styles.indexTablet1Span}>01</span> &nbsp; Fix
                                                Consultaion
                                            </h3>
                                        </a>
                                    </li>
                                </div>
                                <div className={styles.grid_2}>
                                    <div>
                                        <li
                                            id={styles.indexTablet2}
                                            onClick="showGridTablet('indexTablet2')"
                                        >
                                            <a>
                                                <h3>
                                                    <span id={styles.indexTablet2Span}>02</span> &nbsp; Upload
                                                    Medical Reports
                                                </h3>
                                            </a>
                                        </li>
                                        <li
                                            id={styles.indexTablet3}
                                            onClick="showGridTablet('indexTablet3')"
                                        >
                                            <a>
                                                <h3>
                                                    <span id={styles.indexTablet3Span}>03</span> &nbsp; Consult
                                                    with doctor
                                                </h3>
                                            </a>
                                        </li>
                                        <li
                                            id={styles.indexTablet4}
                                            onClick="showGridTablet('indexTablet4')">
                                            <a>
                                                <h3>
                                                    <span id={styles.indexTablet4Span}>04</span> &nbsp; Fix Surgery
                                                </h3>
                                            </a>
                                        </li>
                                        <li
                                            id={styles.indexTablet5}
                                            onClick="showGridTablet('indexTablet5')"
                                        >
                                            <a>
                                                <h3>
                                                    <span id={styles.indexTablet5Span}>05</span> &nbsp; Hospital
                                                    sent estimates
                                                </h3>
                                            </a>
                                        </li>
                                        <li
                                            id={styles.indexTablet6}
                                            onClick="showGridTablet('indexTablet6')"
                                        >
                                            <a>
                                                <h3>
                                                    <span id={styles.indexTablet6Span}>06</span> &nbsp; Payment
                                                </h3>
                                            </a>
                                        </li>
                                        <li
                                            id={styles.indexTablet7}
                                            onClick="showGridTablet('indexTablet7')"
                                        >
                                            <a>
                                                <h3>
                                                    <span id={styles.indexTablet7Span}>07</span> &nbsp; Surgery
                                                    Completed
                                                </h3>
                                            </a>
                                        </li>
                                    </div>
                                </div>

                                <div className={styles.grid_3} id={styles.indexTablet1Img}>
                                    <img src={require("../../images/img1.png")} alt="img1_png" />
                                    <div className={styles.grid_4}>
                                        <h3>Fix Consultaion</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx(styles.grid_3, styles.inactiveTablet)} id={styles.indexTablet2Img}>
                                    <img src={require("../../images/img6.jpg")} alt="img6_jpg" />

                                    <div className={styles.grid_4}>
                                        <h3>Upload Medical Reports</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx(styles.grid_3, styles.inactiveTablet)} id={styles.indexTablet3Img}>
                                    <img src={require("../../images/img2.png")} alt="img2_png" />
                                    <div className={styles.grid_4}>
                                        <h3>Consult with doctor</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx(styles.grid_3, styles.inactiveTablet)} id={styles.indexTablet4Img}>
                                    <img src={require("../../images/img7.jpeg")} alt="img7_jpeg" />
                                    <div className={styles.grid_4}>
                                        <h3>Fix Surgery</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx(styles.grid_3, styles.inactiveTablet)} id={styles.indexTablet5Img}>
                                    <img src={require("../../images/img2.png")} alt="img2_png" />
                                    <div className={styles.grid_4}>
                                        <h3>Hospital sent estimates</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx(styles.grid_3, styles.inactiveTablet)} id={styles.indexTablet6Img}>
                                    <img src={require("../../images/img3.jpeg")} alt="img3_jpeg" />
                                    <div className={styles.grid_4}>
                                        <h3>Payment</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>

                                <div className={cx(styles.grid_3, styles.inactiveTablet)} id={styles.indexTablet7Img}>
                                    <img src={require("../../images/img4.jpeg")} alt="img4_jpeg" />
                                    <div className={styles.grid_4}>
                                        <h3>Surgery Completed</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ol>
                    </section>
                    {/* <!__ SECTION_3 END __> */}

                    {/* <!__ SECTIION_4 START __> */}
                    <section className={styles.section_4} id={styles.doctor}>
                        <div className={styles.section_4_text}>
                            <h2>World Class Expert Doctors!</h2>
                            <p>
                                The university of Texan Southeastern Medcal center has been a long
                                world_reowned research hospital. But untill the 80's, you couldn't
                                go there. Now with the addition of Aston Center and Zale Lipshy
                                Hospital. UT Southeastern is also a mecca of patients.
                            </p>
                        </div>

                        <div id={styles.mainCrousel}>
                            <div className={styles.slides}>
                                <div className={cx(styles.doctor_section, styles.w3_animate_right)} id={styles.crousel1}>
                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-002.jpg")} alt="duke_sanson_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Neuro Surgeon</li>
                                                <li>Chain Department of Neurological Surgery</li>
                                                <li>Australia</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={cx(styles.doctor, styles.georgea_peter)}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-003.jpg")} alt="georgea_peter_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Breast Cancer Surgeon</li>
                                                <li>Director UT. Southwest</li>
                                                <li>London</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-004.jpg")} alt="charlie_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Cardiac Surgeon</li>
                                                <li>MBBS. MD. FRCP. MRCP. Fellowship</li>
                                                <li>New Delhi, India</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-005.jpg")} alt="rose_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Plastic Surgeon</li>
                                                <li>Department of Plastic and Reconstructive Surgery</li>
                                                <li>Dubai</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>
                                </div>

                                <div
                                    className={cx(styles.doctor_section, styles.inactiveCrousel, styles.w3_animate_right)}
                                    id={styles.crousel2} >
                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-004.jpg")} alt="duke_sanson_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Neuro Surgeon</li>
                                                <li>Chain Department of Neurological Surgery</li>
                                                <li>Australia</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={cx(styles.doctor, styles.georgea_peter)}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-005.jpg")} alt="georgea_peter_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Breast Cancer Surgeon</li>
                                                <li>Director UT. Southwest</li>
                                                <li>London</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-002.jpg")} alt="charlie_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Cardiac Surgeon</li>
                                                <li>MBBS. MD. FRCP. MRCP. Fellowship</li>
                                                <li>New Delhi, India</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-003.jpg")} alt="rose_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Plastic Surgeon</li>
                                                <li>Department of Plastic and Reconstructive Surgery</li>
                                                <li>Dubai</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>
                                </div>

                                <div
                                    className={cx(styles.doctor_section, styles.inactiveCrousel, styles.w3_animate_right)}
                                    id={styles.crousel3}>
                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-005.jpg")} alt="duke_sanson_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Neuro Surgeon</li>
                                                <li>Chain Department of Neurological Surgery</li>
                                                <li>Australia</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={cx(styles.doctor, styles.georgea_peter)}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-005.jpg")} alt="georgea_peter_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Breast Cancer Surgeon</li>
                                                <li>Director UT. Southwest</li>
                                                <li>London</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-005.jpg")} alt="charlie_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Cardiac Surgeon</li>
                                                <li>MBBS. MD. FRCP. MRCP. Fellowship</li>
                                                <li>New Delhi, India</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-005.jpg")} alt="rose_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Plastic Surgeon</li>
                                                <li>Department of Plastic and Reconstructive Surgery</li>
                                                <li>Dubai</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>
                                </div>

                                <div
                                    className={cx(styles.doctor_section, styles.inactiveCrousel, styles.w3_animate_right)}
                                    id={styles.crousel4}
                                >
                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-003.jpg")} alt="duke_sanson_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Neuro Surgeon</li>
                                                <li>Chain Department of Neurological Surgery</li>
                                                <li>Australia</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={cx(styles.doctor, styles.georgea_peter)}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-003.jpg")} alt="georgea_peter_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Breast Cancer Surgeon</li>
                                                <li>Director UT. Southwest</li>
                                                <li>London</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-003.jpg")} alt="charlie_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Cardiac Surgeon</li>
                                                <li>MBBS. MD. FRCP. MRCP. Fellowship</li>
                                                <li>New Delhi, India</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>

                                    <div className={styles.doctor}>
                                        <div className={styles.doctor_img}>
                                            <img src={require("../../images/image-003.jpg")} alt="rose_moon_img" />
                                        </div>
                                        <hr />
                                        <div className={styles.doctor_info}>
                                            <h3>Duke Sanson</h3>
                                            <ul>
                                                <li>Plastic Surgeon</li>
                                                <li>Department of Plastic and Reconstructive Surgery</li>
                                                <li>Dubai</li>
                                            </ul>
                                        </div>
                                        <div className={styles.bottom_line}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!__ <div className={styles.slider"></div> __> */}
                        <div className={styles.crousel}>
                            <a href="#crousel1">
                                <div
                                    className={cx(styles.crousel_radio_button, styles.transition)}
                                    onClick="indexCrousel('crousel1')"
                                >
                                    <input type="radio" name="option" checked id={styles.option1} />
                                </div>
                            </a>

                            <a href="#crousel2">
                                <div
                                    className={cx(styles.crousel_radio_button, styles.transition)}
                                    onClick="indexCrousel('crousel2')"
                                >
                                    <input type="radio" name="option" id={styles.option2} />
                                </div>
                            </a>

                            <a href="#crousel3">
                                <div
                                    className={cx(styles.crousel_radio_button, styles.transition)}
                                    onClick="indexCrousel('crousel3')"
                                >
                                    <input type="radio" name="option" id={styles.option3} />
                                </div>
                            </a>

                            <a href="#crousel4">
                                <div
                                    className={cx(styles.crousel_radio_button, styles.transition)}
                                    onClick="indexCrousel('crousel4')"
                                >
                                    <input type="radio" name="option" id={styles.option4} />
                                </div>
                            </a>
                        </div>
                    </section>
                    {/* <!__ SECTIION_4 END __> */}

                    {/* <!__ SECTION_5 START __> */}
                    <section className={styles.section_5} id={styles.treatment}>
                        <div className={styles.section_5_text}>
                            <h2>Featured Medical Treatment</h2>
                            <p>
                                Various facilities are provided here.But there is a protocol which
                                needs to be followed so that you get the services at its best
                            </p>
                        </div>
                        <div className={styles.treatment}>
                            <div className={cx(styles.medical_treatment, styles.dentistry)}>

                                <img src={require("../../images/image-009.jpg")} alt="dentistry_img" />
                                <div className={styles.overlay_text}>
                                    <h3>Dentistry</h3>
                                    <span>50+ Specialists</span>
                                </div>
                            </div>

                            <div className={cx(styles.medical_treatment, styles.cancer)}>
                                <img src={require("../../images/image-010.jpg")} alt="cancer_img" />
                                <div className={styles.overlay_text}>
                                    <h3>Cancer</h3>
                                    <span>50+ Specialists</span>
                                </div>
                            </div>

                            <div className={cx(styles.medical_treatment, styles.cardiologic)}>
                                <img src={require("../../images/image-011.jpg")} alt="cardiologic_treatment_img" />
                                <div className={styles.overlay_text}>
                                    <h3>Cardiologic Treatment</h3>
                                    <span>50+ Specialists</span>
                                </div>
                            </div>

                            <div className={cx(styles.medical_treatment, styles.organ)}>
                                <img src={require("../../images/image-006.jpg")} alt="multiple_organ_transplant_img" />
                                <div className={styles.overlay_text}>
                                    <h3>Multiple Organ Transplant</h3>
                                    <span>50+ Specialists</span>
                                </div>
                            </div>

                            <div className={cx(styles.medical_treatment, styles.orthopadics)}>
                                <img src={require("../../images/image-008.jpg")} alt="orthopadics_surgery_img" />
                                <div className={styles.overlay_text}>
                                    <h3>Orthopadics Surgery</h3>
                                    <span>50+ Specialists</span>
                                </div>
                            </div>

                            <div className={cx(styles.medical_treatment, styles.infertility)}>
                                <img src={require("../../images/image-007.jpg")} alt="infertility_treatment_img" />
                                <div className={styles.overlay_text}>
                                    <h3>Infertility Treatment</h3>
                                    <span>50+ Specialists</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!__ SECTION_5 END __> */}

                    {/* <!__ SECTION_6 START __> */}
                    <section className={styles.section_6} id={styles.services}>
                        <div className={styles.section_6_text}>
                            <h2>Exclusive services</h2>
                            <p>
                                We want you to be comfortable and thus apart from threating your
                                illness, we provide you with other services that you can see
                            </p>
                        </div>
                        <div className={styles.services}>
                            <div className={styles.service_img}>

                                <img src={require("../../images/Icons-01.png")} alt="travel_img" />
                                <h5>TRAVEL</h5>
                            </div>

                            <div className={styles.service_img}>
                                <img src={require("../../images/Icons-02.png")} alt="travel_img" />
                                <h5>FOOD</h5>
                            </div>

                            <div className={styles.service_img}>
                                <img src={require("../../images/Icons-03.png")} alt="travel_img" />
                                <h5>ACCOMODATION</h5>
                            </div>

                            <div className={styles.service_img}>
                                <img src={require("../../images/Icons-07.png")} alt="travel_img" />
                                <h5>LABS</h5>
                            </div>

                            <div className={styles.service_img}>
                                <img src={require("../../images/Icons-10.png")} alt="travel_img" />
                                <h5>REPORTS</h5>
                            </div>

                            <div className={styles.service_img}>
                                <img src={require("../../images/Icons-06.png")} alt="travel_img" />
                                <h5>AMBULANCE</h5>
                            </div>
                        </div>
                    </section>
                    {/* <!__ SECTION_6 END __> */}

                    {/* <!__ SECTION_7 START __> */}
                    <section className={styles.section_7}>
                        <div className={styles.section_7_desktop}>
                            <div className={styles.section_7_text}>
                                <h2>Need Help?</h2>
                                <p>Just let us know, we will be happy to assit you</p>
                            </div>
                            <div className={styles.section_7_button}>
                                <button className={styles.enquiryButton}>Submit your enquiry</button>
                            </div>
                        </div>
                    </section>
                    {/* <!__ SECTION_7 END __> */}

                    {/* <!__ FOOTER START __> */}

                    {/* <!__ FOOTER END __> */}
                    <div id={styles.footer_base_line}></div>
                </div>
            </div>

            {/* <script src="./IndexScript.js"></script> */}

        </>
    )
}

export default Index