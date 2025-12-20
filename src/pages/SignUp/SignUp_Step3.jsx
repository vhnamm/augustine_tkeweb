import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './SignUp.module.scss';
import { useState } from 'react';

const Step3_Categories = () => {
    const navigate = useNavigate();
    const CATEGORIES_DATA = [
        { name: 'New Arrivals', key: 'new', delay: '0.3s', image: 'url("/assets/SignUP/144623819_7bea692c-d85d-445e-a738-963481545d10.jpg")' },
        { name: 'Apparel', key: 'apparel', delay: '0.35s', image: 'url(/assets/SignUP/Gildan_1c08516b-053c-4d9d-ba35-6d499a091eb5.webp)' },
        { name: 'Footwear', key: 'footwear', delay: '0.4s', image: 'url("/assets/SignUP/footwear-7086389.jpg")' },
        { name: 'Accessories', key: 'accessories', delay: '0.45s', image: 'url("/assets/SignUP/watch-8032054.jpg")' },
        { name: 'Exclusives', key: 'exclusives', delay: '0.5s', image: 'url("/assets/SignUP/fashion-8066579.jpg")' },
        { name: 'Sale / Outlet', key: 'sale', delay: '0.55s', image: 'url("/assets/SignUP/3303118_484464-PHGP4K-382.jpg")' },
    ];

    const [selected, setSelected] = useState([]);

    const toggle = (categoryName) => {
        if (selected.includes(categoryName)) {
            setSelected(selected.filter(item => item !== categoryName));
        } else {
            setSelected([...selected, categoryName]);
        }
    };

    const handleContinue = () => {
        navigate('/signup/step_4');
    };

    return (
        <>
            <Link to="/signup/step_2" className={clsx(styles.btnBack, styles.animateEnter)} style={{ animationDelay: '0.1s' }}>
                <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '8px' }} /> Back
            </Link>

            <Link to="/signup/step_4" className={clsx(styles.btnSkip, styles.animateEnter)} style={{ animationDelay: '0.1s' }}>
                Skip <FontAwesomeIcon icon={faChevronRight} />
            </Link>

            <div className={clsx(styles.headerText, styles.animateEnter)} style={{ animationDelay: '0.2s' }}>
                <h1>Select categories you’re interested in</h1>
                <p>This helps us learn what to show you</p>
            </div>

            <div className={styles.categoryGrid}>
                {CATEGORIES_DATA.map((category) => (
                    <div 
                        key={category.key}
                        className={clsx(
                            styles.categoryCard, 
                            styles.animateEnter, 
                            selected.includes(category.key) && styles.active
                        )} 
                        style={{ 
                            animationDelay: category.delay,
                            backgroundImage: category.image
                        }} 
                        onClick={() => toggle(category.key)}
                    >
                        {category.name}
                    </div>
                ))}

            </div>
            <button 
                onClick={handleContinue}
                className={clsx(styles.submitBtn, styles.animateEnter)} 
                style={{ animationDelay: '0.7s' }}
            >
                Continue
            </button>
        </>
    );
};

export default Step3_Categories;