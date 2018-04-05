import React from 'react';

import styles from './styles.scss';

const List = ({ children }) => (
    <ul className={styles.root}>
        {children}
    </ul>
);

export default List;
