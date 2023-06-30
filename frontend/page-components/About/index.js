import React, {useState, useEffect, useContext } from 'react';
import aboutPic from '../../public/IMG_3487.jpg';
import styles from './styles.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import useGetAbout from './hooks/useGetAbout';
import useCreateAbout from './hooks/useCreateAbout';

import { TokenConsumer } from '@/context/VerifyToken';

import GLOBAL_CONSTANTS from '@/constants/globals'

function About() {
    const { contextValue } = useContext(TokenConsumer);

    const { data, refetch } = useGetAbout({});

    const { register, handleSubmit , reset} = useForm({
        defaultValues:  (data || GLOBAL_CONSTANTS.about)
    });

    useEffect(() => {reset(data)}, [data])

    const { apiTrigger } = useCreateAbout({refetch});

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSubmit((formValue) => {
            apiTrigger(formValue);
          })();
        }
      };    

    const Age = () => {
    const [age, setAge] = useState();

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
        const birthTime = new Date('1999-07-28T05:00:00');
        setAge(((Date.now() - birthTime) / divisor).toFixed(11));
    };

    useEffect(() => {
        const timer = setInterval(() => tick(), 25);
        return () => {
        clearInterval(timer);
        };
    }, []);

    return <>{age}</>;
    };

    return(
        <main className={styles.typography}>
            <Head>
                <title>About | My Cool Site</title>
            </Head>
            <section className={styles.about} id="about">
                    <div className={styles.about_pic}>
                        <Image src={aboutPic} alt="My Image" className={`${styles['about_pic-me']} ${styles.animate__pulse} ${styles.animate__animated}`} />
                    </div>
                    <form className={styles.about_bio} onKeyDown={(e)=>handleKeyDown(e)}>
                        <div className={`${styles['about_bio-title']} ${styles.myinfo}`}>
                            <input {...register('salutation')} className={styles['heading-secondary']} disabled={!contextValue}/>
                            <input {...register('title')} className={styles['heading-primary']} disabled={!contextValue}/>
                        </div>
                        <textarea {...register('description')} className={styles['about_bio-para']} rows="6" cols="60"  disabled={!contextValue}/>
                        <div className={styles['about_bio-para']}>
                            Age &emsp;&emsp;&emsp;&emsp; &rarr; &emsp;&emsp; <Age/> <br/>
                            State &emsp;&emsp;&emsp;&emsp;&rarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Uttar Pradesh <br/>
                            Nationality &nbsp;&emsp; &rarr; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indian <br/>
                        </div>
                    </form>
            </section>
        </main>
    );
}

export default About;