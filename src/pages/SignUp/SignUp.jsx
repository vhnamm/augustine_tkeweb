import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './SignUp.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const SignUp = () => {
    return (
        <div className={styles.signUpContainer}>
            <div className={clsx(styles.brandLogo, styles.animateEnter)} style={{ animationDelay: '0.1s' }}>
                augustine 
            </div>

            <div className={styles.signUpCard}>
                <Link to="/login" className={clsx(styles.btnBack, styles.animateEnter)} style={{ animationDelay: '0.2s' }}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Back
                </Link>

                <div className={clsx(styles.headerText, styles.animateEnter)} style={{ animationDelay: '0.3s' }}>
                    <h1>Welcome to <span className={styles.italicText}> augustine </span>!</h1>
                    <p>Start by creating an account</p>
                </div>

                <form className={styles.signUpForm}>
                    <div className={clsx(styles.inputGroup, styles.animateEnter)} style={{ animationDelay: '0.4s' }}>
                        <input type="text" placeholder="Email/Phone Number" required />
                    </div>

                    <div className={clsx(styles.inputGroup, styles.animateEnter)} style={{ animationDelay: '0.5s' }}>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className={clsx(styles.submitBtn, styles.animateEnter)} style={{ animationDelay: '0.6s' }}>
                        Creating Account
                    </button>
                </form>

                <div className={clsx(styles.acceptTerms, styles.animateEnter)} style={{ animationDelay: '0.7s' }}>
                    <p>By clicking on "Create Account", you agree to our Terms and Privacy Policy</p>
                </div>

                <div className={clsx(styles.toLogin, styles.animateEnter)} style={{ animationDelay: '0.8s' }}>
                    <p>Have an account already? <Link to ="/login">Log in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;