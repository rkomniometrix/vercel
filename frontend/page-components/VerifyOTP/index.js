import styles from './styles.module.scss';
import { useForm } from "react-hook-form";
import useVerifyToken from './hooks/useVerifyToken';
import { useEffect } from 'react';

const INPUT_FIELD_NAMES = ["token0", "token1", "token2", "token3", "token4", "token5"];

function VerifyOTP ({ setShow = () => {} }){
    const {register, handleSubmit, formState: {errors}} = useForm();

    const { apiTrigger, loading } = useVerifyToken({setShow});

    const onSubmit = (val) => {
        const token = Object.values(val).join('')
        apiTrigger(token)
    }

    const handleKeyDown = (e,index) => {
        if (e.key === "Backspace" && e.target.value === '') {
          if (index > 0) {
            const prevField = INPUT_FIELD_NAMES[index - 1];
                if (prevField) {
                    document.getElementsByName(prevField)[0].focus();
                }
          }
        }
    };

    useEffect(() => {
        document.getElementsByName("token0")[0].focus();
    }, [])

    const handleStopCloseModal= (e) => {
        e.stopPropagation();
    }

    return(
        <main className={styles.verify_token_modal} onClick={() => setShow(false)}>
            <section className={styles.verify_token_modal_body}>
                <section className={styles.verify_token_modal_content} onClick={handleStopCloseModal}>
                    <h1 className={styles.title}>Verify Your Authenticator App</h1>
                    <p>Enter the code shown in the app to make sure everything works fine.</p>
                    <span>6-digit code</span>
                    <form>
                    {INPUT_FIELD_NAMES.map((fieldName, index) => (
                        <input
                            key={fieldName}
                            type="number"
                            name={fieldName}
                            placeholder='0'
                            {...register(fieldName,{ required: true })}
                            maxLength={1}
                            min={0}
                            max={9}
                            onChange={(e) => {
                                if (e.target.value.length === 1) {
                                    const nextField = INPUT_FIELD_NAMES[index + 1];
                                    if (nextField) {
                                    document.getElementsByName(nextField)[0].focus();
                                    }
                                }
                            }}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            style={{border: errors[fieldName] ? '2px solid red' : '1px solid black'}}
                        />
                    ))}
                    </form>
                </section>
                <div className={styles.verify_token_modal_button_wrapper} onClick={handleStopCloseModal}>
                    <button 
                        type="submit" 
                        className={styles.verify_token_modal_button} 
                        onClick={handleSubmit(onSubmit)} 
                        disabled={loading}
                        >
                            Verify
                    </button>
                </div>
            </section>
        </main> 
    )
}

export default VerifyOTP;