import emailjs from "emailjs-com";
import styles from './styles.module.scss';

function Contact() {
    const sendEmail =(e)=> {
        e.preventDefault();
    
        emailjs.sendForm("service_tv8sniw","template_q0wsozo",e.target,"user_5Ci8rPqJhp90LnCWBPXln")
          .then(
            (result) => {
              console.log(result.text);
              alert("Message Send Successfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
    }

    return(
        <main className={`${styles.container} ${styles.typography} ${styles.container}`}>
            <section className={styles['section-form']} id="form">
                <div className={styles.form_container}>
                    <div className={` ${styles.myinfo} ${styles['form_container-title']}`}>
                        <h3 className={styles['heading-secondary']}>Give me your feedback !</h3>
                        <h1 className={styles['heading-primary']}>Contact Me</h1>
                    </div>
                    <form className={styles.form} onSubmit={sendEmail}>
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" required />
                            
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" required />
                            
                            <label for="description">Feedback</label>
                            <textarea name="message" id="description" cols="10" rows="4" placeholder="Feel free to share your feedback ..."></textarea>
                        <button type="submit" className={styles.form_button} onclick="sendMail();" >Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Contact;