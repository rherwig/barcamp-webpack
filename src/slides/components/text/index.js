import React from 'react';

import styles from './styles.scss';

const Text = ({ children }) => (
    <p className={styles.root}>
        {children}
    </p>
);

export default Text;
