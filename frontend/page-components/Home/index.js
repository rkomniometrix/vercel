import styles from './styles.module.scss';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { TokenConsumer } from '@/context/VerifyToken';
import { useEffect, useState, useContext } from 'react';
import { useForm } from "react-hook-form";
import logo from '../../public/logo.jpg';
import myPic from "../../public/rkk-min-compressed.png";
import Image from 'next/image';
import Head from 'next/head';

import useGetHome from './hooks/useGetHome';
import useCreateHome from './hooks/useCreateHome';

import GLOBAL_CONSTANTS from '@/constants/globals'

function Home() {
    const [valueLength, setValueLength] = useState(22);

    const { contextValue } = useContext(TokenConsumer);

    const { data, refetch }  = useGetHome({});
    
    const { register, handleSubmit , reset} = useForm({
        defaultValues: (data || GLOBAL_CONSTANTS.home)
    });
    
    useEffect(() => { reset(data) }, [data]);

    const { apiTrigger }  = useCreateHome({ refetch });
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSubmit((formValue)  => {
            apiTrigger(formValue);
          })();
        }
      };

    return(
        <main className={`${styles.container} ${styles.typography}`}>
            <Head>
                <title>Home | My Cool Site</title>
            </Head>
            <header id="home">
                <nav className={styles.navbar}>
                        <a href="##" className={styles.navbar_link} title="Logo">
                            <Image src={logo} alt="logo" className={styles.navbar_logo} />
                        </a>
                        {/* <div className={`${styles.menu_icon} ${styles.nav_icon}`}>
                            <Image src={iconMenu} alt="" className={styles['svg-icon']}/>
                        </div>                 */}
                </nav>

                <form className={styles.intro} onKeyDown={(e)=>handleKeyDown(e)}>
                    <div className={`${styles.myinfo} ${styles.small_myinfo}`}>
                        <input {...register("salutation")} className={styles['heading-secondary']} disabled={!contextValue}/>
                        <input {...register("name")} className={styles['heading-primary']} disabled={!contextValue}/>
                        <input 
                            id="title"
                            {...register("title")} 
                            className={styles.developer_link}
                            disabled={!contextValue}
                        />
                        <div className={styles.contact}>
                            <a href="#form" className={`${styles.contact_link} ${styles.btn}`}>Contact Me</a>
                            <p className={styles.reach}>reach me via</p>
                            <a href="https://www.facebook.com/IMjustRK" className={styles.facebook}  title="Facebook profile">
                                <div className={styles.menu_icon}>
                                    <FacebookOutlined/>
                                </div>
                            </a>
                            <a href="https://twitter.com/Rk_riderking" className={styles.twitter}  title="Twitter profile">
                                <div className={styles.menu_icon}>
                                    <TwitterOutlined/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.mypic}>
                        <Image src={myPic} alt="rk" className={styles.mypic_img} />
                    </div>
                </form>
            </header>
        </main>
    );
}

export default Home;