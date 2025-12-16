import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SignUp.module.scss';
import Button from '../../components/UI/Button/Button';

const Step4_Completed = () => {
    const navigate = useNavigate();
    const handleContinue = () => {
        navigate('/');
    };
    return (
        <>
            <div className={clsx(styles.headerText, styles.animateEnter)} style={{ animationDelay: '0.2s' }}>
                <h1>Everything’s ready for you</h1>
                <p>Wer hope you get a pleasant shopping experience at augustine! </p>
            </div>

        <form className={styles.signUpForm}>
            <Button onClick={handleContinue} className={clsx(styles.submitBtn, styles.animateEnter)} style={{ animationDelay: '0.3s' }}  >
                Finish
            </Button>
        </form>
        </>
    );
};

export default Step4_Completed;