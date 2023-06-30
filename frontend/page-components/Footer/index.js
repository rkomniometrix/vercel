import Image from "next/image";
import logo from "../../public/logo.jpg";
import styles from './styles.module.scss';
import { FacebookFilled, TwitterCircleFilled,InstagramFilled,GithubFilled,LinkedinFilled   } from '@ant-design/icons';

function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <figure className={styles.figure}>
                    <Image src={logo} alt="LOGO" className={styles.footer_logo} /> 
                </figure>

                <div className={styles.footer_content}>
                    <ul className={styles.footer_list}>
                        <li className={styles.footer_item}><a className={styles.footer_link} href="#home">Home</a></li>
                        <li className={styles.footer_item}><a className={styles.footer_link} href="#about">About</a></li>
                        <li className={styles.footer_item}><a className={styles.footer_link} href="#qualifications">Qualifications</a></li>
                        <li className={styles.footer_item}><a className={styles.footer_link} href="#skills">Skills</a></li>
                        <li className={styles.footer_item}><a className={styles.footer_link} href="#works">Works</a></li>
                        <li className={styles.footer_item}><a className={styles.footer_link} href="#form">Contact Me</a></li>
                    </ul>
                    <p className={styles.footer_para}>
                        © Copyright 2021 by Rahul Kumar. This website is made only for me to represent myself via online medium to my clients.
                    </p>
                </div>

                <div className={styles.footer_icon}>
                    <a href="https://www.facebook.com/IMjustRK" className={styles['footer_icon-logo']}>
                           <FacebookFilled/>
                    </a>
                    <a href="https://twitter.com/Rk_riderking" className={styles['footer_icon-logo']}>
                        <TwitterCircleFilled/>
                    </a>
                    <a href="https://www.instagram.com/rk_terrific_rider/" className={styles['footer_icon-logo']}>
                        <InstagramFilled/>
                    </a>
                    <a href="https://github.com/rkrider" className={styles['footer_icon-logo']}>
                        <GithubFilled />
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-kumar-518418193/" className={styles['footer_icon-logo']}>
                        <LinkedinFilled />
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;