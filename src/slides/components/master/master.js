import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

const Master = ({ children }) => (
    <div className={cx(styles.root, 'transition-item')}>
        {children}
    </div>
);

export default Master;
