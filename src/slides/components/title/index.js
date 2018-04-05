import React from 'react';

import styles from './styles.scss';

const Title = ({ children }) => (
    <h1 className={styles.root}>
        {children}
    </h1>
);

export default Title;
