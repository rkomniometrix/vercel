import { useState } from 'react';
import styles from './styles.module.scss';
import { EditFilled } from '@ant-design/icons';

import Fade from "react-reveal";
import Home from "../Home";
import About from "../About";
import Footer from "../Footer";
import Qual from "../Qual";
import Skills from "../Skills";
import Contact from "../Contact";
import VerifyOTP from '../VerifyOTP';

const LandingPage = () =>{
    const [show, setShow] = useState(false)

    return(
        <main className={`${styles.main_container} ${styles.typography}`}>
            
            <EditFilled className={styles.edit_icon} onClick={() => setShow(!show)}/>

            <section>
                <Fade>
                    <Home/>
                </Fade>
                <Fade>
                    <About/>
                </Fade>
                <Fade>
                    <Qual/>
                </Fade>
                <Fade>
                    <Skills/>
                </Fade>
                <Fade>
                    <Contact/>
                </Fade>
                <Fade>
                    <Footer/>
                </Fade>
            </section>

            {show && 
                <VerifyOTP setShow={setShow}/>
            }
            
        </main>
    );
}
export default LandingPage;