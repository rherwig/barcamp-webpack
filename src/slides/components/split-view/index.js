import React from 'react';

import styles from './styles.scss';

const SplitView = ({ children }) => (
    <div className={styles.root}>
        {children}
    </div>
);

export default SplitView;
