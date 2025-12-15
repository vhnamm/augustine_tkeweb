import React from 'react';
import styles from "./DetailTab.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/UI/Button/Button';

const DetailTab = ({title, prod}) => {
    
  return (
    <div className={styles.wrapper}>
        {title == "Description" && 
            <div className={styles.description_container}>
                <p className={styles.description}>{prod.description}</p>
            </div>
        }

        {title == "Composition" && 
            <div className={styles.description_container}>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique iure quaerat, dolore deserunt harum facere nulla quod minima maxime consequatur totam perspiciatis temporibus in delectus fugit quasi. Quidem, rem hic!
                Voluptatem quam laboriosam deleniti natus. Saepe dolor nobis ipsum aliquam expedita molestias voluptatibus modi? Iste, incidunt, debitis libero iure officia, harum recusandae voluptatem dolorum magnam eos iusto consequatur ab laborum.
                Unde sint temporibus excepturi quas accusamus laborum doloribus, blanditiis, placeat nam ab voluptatum. Sunt, porro dolor, quae earum eaque maiores, modi repellendus reprehenderit odio esse nisi magni labore. Optio, dolorem.</p>
            </div>
        }

        {title == "Reviews" && 
            <div className={styles.review_container}>

                <div className={styles.review_header}>
                    <div className={styles.rate}>
                        <span>{prod.rating}/5 <FontAwesomeIcon className={styles.icon} icon={faStar} /></span>
                        
                        <span>{"(" + prod.reviewCount + " reviews)"}</span>
                    </div>

                    <Button className={styles.btn_viewall}>View all</Button>
                </div>

                <div className={styles.review_content}>
                    <ul className={styles.list_comment}>
                        <li className={styles.comment_item}>

                            <div className={styles.avatar}></div>

                            <div className={styles.comment_wrap}>
                                <div className={styles.comment_header}>
                                    <span className={styles.username}>Hoai nam</span>
                                    <div>
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                    </div>
                                    
                                </div>
                                
                                <p className={styles.comment_txt}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum assumenda ipsa sit 
                                    repellat, at deleniti suscipit quia, dolores consequuntur pariatur accusantium architecto ducimus 
                                    quibusdam. Dolorem esse magnam commodi itaque.
                                </p>
                            </div>
                        </li>

                        <li className={styles.comment_item}>

                            <div className={styles.avatar}></div>

                            <div className={styles.comment_wrap}>
                                <div className={styles.comment_header}>
                                    <span className={styles.username}>Hoai nam</span>
                                    <div>
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                    </div>
                                    
                                </div>
                                
                                <p className={styles.comment_txt}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum assumenda ipsa sit 
                                    repellat, at deleniti suscipit quia, dolores consequuntur pariatur accusantium architecto ducimus 
                                    quibusdam. Dolorem esse magnam commodi itaque.
                                </p>
                            </div>
                        </li>

                        <li className={styles.comment_item}>

                            <div className={styles.avatar}></div>

                            <div className={styles.comment_wrap}>
                                <div className={styles.comment_header}>
                                    <span className={styles.username}>Hoai nam</span>
                                    <div>
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                        <FontAwesomeIcon className={styles.icon} icon={faStar} />
                                    </div>
                                    
                                </div>
                                
                                <p className={styles.comment_txt}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati harum assumenda ipsa sit 
                                    repellat, at deleniti suscipit quia, dolores consequuntur pariatur accusantium architecto ducimus 
                                    quibusdam. Dolorem esse magnam commodi itaque.
                                </p>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
        }
    </div>
  );
};

export default DetailTab;