import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './SignUp.module.scss';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className={styles.signUpContainer}>
            <div className={styles.brandLogo}>augustine </div>

            <div className={styles.signUpCard}>
                <Link to="/login" className={styles.btnBack}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Back
                </Link>
                <div className={styles.headerText}>
                    <h1>Welcome to <span className={styles.italicText}> augustine </span>!</h1>
                    <p>Start by creating an account</p>
                </div>

                <form className={styles.signUpForm}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Email/Phone Number" required />
                    </div>

                    <div className={styles.inputGroup}>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Creating Account
                    </button>
                </form>
                <div className={styles.acceptTerms}>
                    <p>By clicking on "Create Account", you agree to our Terms and Privacy Policy</p>
                </div>

                <div className={styles.toLogin}>
                    <p>Have an account already? <Link to ="/login">Log in</Link></p>
                </div>

            </div>
        </div>
    )
}

export default SignUp;