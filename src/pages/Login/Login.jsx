import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.brandLogo}>augustine</div>

            <div className={styles.loginCard}>
                <Link to ="/" className={styles.btnBack}>
                    <FontAwesomeIcon icon={faChevronLeft} /> Back
                </Link>

                <div className={styles.headerText}>
                    <h1>Welcome back!</h1>
                    <p>We're glad to see you again</p>
                </div>
                
                <form className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Email/Phone Number" required />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Sign In
                    </button>
                </form>

                <div className={styles.socialLogin}>
                    <p className={styles.dividerText}>or sign in with</p>
                    <div className={styles.socialIcons}>
                        <button className={`${styles.socialBtn} ${styles.google}`}>
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>
                        
                        <button className={`${styles.socialBtn} ${styles.apple}`}>
                            <FontAwesomeIcon icon={faApple} />
                        </button>
                        
                        <button className={`${styles.socialBtn} ${styles.facebook}`}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                    </div>
                </div>
                <div className={styles.footerLink}>
                    <p>Don't have an account? <Link to ="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login;