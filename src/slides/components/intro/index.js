import React from 'react';

import styles from './styles.scss';

const Intro = ({ title, text, image, children }) => (
    <div className={styles.root}>
        <img className={styles.image} src={image} alt=""/>
        <h1 className={styles.title}>
            {title}
        </h1>
        <p className={styles.text}>
            {text}
        </p>
        {children}
    </div>
);

export default Intro;
