import React from 'react';

import styles from './styles.scss';

const ListItem = ({ children }) => (
    <li className={styles.item}>
        __ {children}
    </li>
);

export default ListItem;
