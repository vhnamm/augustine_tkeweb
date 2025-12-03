import React from 'react';
import styles from './SpringCollection.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import clsx from 'clsx';

const SpringCollection = () => {
  return (
    <div className={styles.wrapper}>HEloo
       <h2 className={styles.title}>dmm</h2>
       <FontAwesomeIcon icon={faInstagram} />
       <FontAwesomeIcon icon={faFacebook} className={styles.icon}/>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel laborum quod sequi, mollitia minus eos, aliquam ipsum nulla dolorum commodi facere accusamus, culpa accusantium reprehenderit obcaecati tempore harum impedit.
    </div>
  );
};

export default SpringCollection;