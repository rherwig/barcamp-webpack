import React from 'react';

import styles from './styles.scss';

const Image = ({ image, caption }) => (
    <div className={styles.root}>
        <img src={image} alt="" className={styles.image}/>
        <i className={styles.caption}>{caption}</i>
    </div>
);

export default Image;
