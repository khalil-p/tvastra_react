import React, { useState } from 'react';

function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <section className={styles.section_3}>
            <div className={styles.section_3_text}>
                <h2>How it works</h2>
                <p>
                    Various facilities are provided here.But there is a protocol which
                    needs to be followed so that you get the services at its best
                </p>
            </div>

            <ol id="ol_mobile_view">
                <div className={styles.section_3_grid}>
                    <div className={styles.grid_1}>
                        <li id="index1" onClick={() => handleClick('index1')}>
                            <a>
                                <h3 className={styles.fix_consultation}>
                                    <span className={styles.specialSpan} id="index1Span">01</span> &nbsp;
                                    Fix Consultaion
                                </h3>
                            </a>
                        </li>
                    </div>
                    <div className={activeIndex === 'index1' ? '' : 'inactive'} id="index1img">
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
                            <li id="index2" onClick={() => handleClick('index2')}>
                                <a>
                                    <h3>
                                        <span id="index2Span">02</span> &nbsp; Upload Medical
                                        Reports
                                    </h3>
                                </a>
                            </li>
                            <div className={activeIndex === 'index2' ? '' : 'inactive'} id="index2img">
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

                            <li id="index3" onClick={() => handleClick('index3')}>
                                <a>
                                    <h3>
                                        <span id="index3Span">03</span> &nbsp; Consult with
                                        doctor
                                    </h3>
                                </a>
                            </li>
                            <div className={activeIndex === 'index3' ? '' : 'inactive'} id="index3img">
                                <div className={styles.grid_3}>
                                    <img src={require("../../images/img2.png")} />

                                    <div className={styles.grid_4}>
                                        <h3>Fix Consultaion</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <li id="index4" onClick={() => handleClick('index4')}>
                                <a>
                                    <h3>
                                        <span id="index4Span">04</span> &nbsp; Fix Surgery
                                    </h3>
                                </a>
                            </li>
                            <div className={activeIndex === 'index4' ? '' : 'inactive'} id="index4img">
                                <div className={styles.grid_3}>
                                    <img src={require("../../images/img7.jpeg")} alt="img7_jpeg" />
                                    <div className={styles.grid_4}>
                                        <h3>Fix Consultaion</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <li id="index5" onClick={() => handleClick('index5')}>
                                <a>
                                    <h3>
                                        <span id="index5Span">05</span> &nbsp; Hospital sent
                                        estimates
                                    </h3>
                                </a>
                            </li>
                            <div className={activeIndex === 'index5' ? '' : 'inactive'} id="index5img">
                                <div className={styles.grid_3}>
                                    <img src={require("../../images/img8.jpg")} alt="img8_jpg" />
                                    <div className={styles.grid_4}>
                                        <h3>Fix Consultaion</h3>
                                        <p>
                                            This depicts that user will have to fix appointment first
                                            when it selects a particular doctor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ol>
        </section>
    )
}

export default HowItWorks;

