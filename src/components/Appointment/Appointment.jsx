import React from 'react'
import cx from 'classnames';
import '../../common_scss/reset.scss'
import themeStyles from '../../common_scss/theme.module.scss'
import styles from './Appointment.module.scss';
import { faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from '../Head/Head';

function Appointment() {
    return (
        <>

            <Head />
            {/* SECTION_1 START */}
           
            {/* SECTION_1 END */}
            <section className={styles.section_2}>
                <form action>
                    <div className={styles.div_2_0}>
                        <h1>Book An Appointment</h1>
                        <hr />
                        <div className={styles.div_2_1}>
                            <label htmlFor="appointment_date" id="appointment_date" className={styles.label_1}>
                                <h3>Select Appointment Date*</h3>
                            </label>
                            <input className={styles.date} type="date" name="appointment_date" id="appointment_date" required />
                            <label htmlFor="time_interval" className={styles.label_2}>
                                <h3>Time Interval*</h3>
                            </label>
                            <div className={styles.div_2_2}>
                                <input type="radio" id="morning" name="time" />
                                <label htmlFor="morning">Morning</label>
                            </div>
                            <div className={styles.div_2_2}>
                                <input type="radio" id="afternoon" name="time" />
                                <label htmlFor="afternoon">Afternoon</label>
                            </div>
                            <div className={styles.div_2_2}>
                                <input type="radio" id="evening" name="time" />
                                <label htmlFor="evening">Evening</label>
                            </div>
                        </div>
                        <div className={styles.div_2_1}>
                            <label htmlFor="appointment_status" className={styles.label_2}>
                                <h3>Appointment Status / Urgency*</h3>
                            </label>
                            <div className={styles.div_2_2}>
                                <input type="radio" id="routine" name="urgency" />
                                <label htmlFor="routine">Routine Check_up</label>
                            </div>
                            <div className={styles.div_2_2}>
                                <input type="radio" id="non_urgent" name="urgency" />
                                <label htmlFor="non_urgent">Non Urgent Check_up</label>
                            </div>
                            <div className={styles.div_2_2}>
                                <input type="radio" id="urgent" name="urgency" />
                                <label htmlFor="urgent">Urgent Check_up</label>
                            </div>
                            <div className={styles.div_2_2}>
                                <input type="radio" id="surgirical" name="urgency" />
                                <label htmlFor="surgirical">Surgirical Appointment</label>
                            </div>
                        </div>
                        <div className={styles.div_2_3}>
                            <h3>Upload Previuos Health Record</h3>
                            <button id>Choose file</button>
                            <label htmlFor="choose_file">No file choosen</label>
                        </div>
                        <div className={styles.div_2_4}>
                            <label htmlFor="details">
                                <h3>Appointment Details</h3>
                            </label>
                            <textarea name="details" id="details" cols={30} rows={5} defaultValue={""} />
                        </div>
                        <div className={styles.signup_button_div}>
                            <button>BOOK APPOINTMENT</button>
                            <div className={styles.font_icon_1}>
                                <i className={cx(styles.fas, styles.fa_arrow_right)} >
                                <FontAwesomeIcon className={styles.fa_1} icon={faArrowRight} />
                                    </i>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <p className={styles.copy_right}>All Rights Reserved © Tvastra 2020</p>


        </>
    )
}

export default Appointment