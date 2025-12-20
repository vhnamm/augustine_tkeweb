import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SignUp.module.scss';

const Step2_Name = () => {
    const navigate = useNavigate();
    const handleContinue = (e) => {
        navigate('/signup/step_3');
    };

    return (
        <>
            <Link to="/signup/step_1" className={clsx(styles.btnBack, styles.animateEnter)} style={{ animationDelay: '0.1s' }}>
                <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '8px' }} /> Back
            </Link>

            <div className={clsx(styles.headerText, styles.animateEnter)} style={{ animationDelay: '0.2s' }}>
                <h1>What's your name?</h1>
            </div>

            <form className={styles.signUpForm} onSubmit={handleContinue}>
                <div className={clsx(styles.inputGroup, styles.animateEnter)} style={{ animationDelay: '0.3s' }}>
                    <input type="text" placeholder="Your Name" required autoFocus />
                </div>

                <button type="submit" className={clsx(styles.submitBtn, styles.animateEnter)} style={{animationDelay: '0.4s'}}>
                    Continue
                </button>
            </form>
        </>
    );
};

export default Step2_Name;