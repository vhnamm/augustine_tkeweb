import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate('/');
    };
    return (
        <div className={styles.loginContainer}>
            <div className={clsx(styles.brandLogo, styles.animateEnter)} style={{ animationDelay: '0.1s' }}>
                augustine
            </div>

            <div className={styles.loginCard}>
                <Link to="/" className={clsx(styles.btnBack, styles.animateEnter)} style={{ animationDelay: '0.2s' }}>
                    <FontAwesomeIcon icon={faChevronLeft}/> Back
                </Link>

                <div className={clsx(styles.headerText, styles.animateEnter)} style={{ animationDelay: '0.3s' }}>
                    <h1>Welcome back!</h1>
                    <p>We're glad to see you again</p>
                </div>
                
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={clsx(styles.inputGroup, styles.animateEnter)} style={{ animationDelay: '0.4s' }}>
                        <input type="text" placeholder="Email/Phone Number" required />
                    </div>
                    <div className={clsx(styles.inputGroup, styles.animateEnter)} style={{ animationDelay: '0.5s' }}>
                        <input type="password" placeholder="Password" required />
                    </div>

                    <button type="submit" className={clsx(styles.submitBtn, styles.animateEnter)} style={{ animationDelay: '0.6s' }}>
                        Sign In
                    </button>
                </form>

                <div className={clsx(styles.socialLogin, styles.animateEnter)} style={{ animationDelay: '0.7s' }}>
                    <p className={styles.dividerText}>or sign in with</p>

                    <div className={styles.socialIcons}>
                        <a href="https://www.google.com" target ="_blank" className={clsx(styles.socialBtn, styles.google)}>
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                        
                        <a href="https://account.apple.com/sign-in" target="_blank" className={clsx(styles.socialBtn, styles.apple)}>
                            <FontAwesomeIcon icon={faApple} />
                        </a>

                        <a href="https://www.facebook.com/tam.nguyen.18007" target="_blank" className={clsx(styles.socialBtn, styles.facebook)}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
                </div>

                <div 
                    className={clsx(styles.footerLink, styles.animateEnter)}
                    style={{ animationDelay: '0.8s' }}
                >
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;