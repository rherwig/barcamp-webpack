import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.scss';

import { increment } from '../../../actions/counter';

const mapStateToProps = ({ counter }) => ({ counter });

@connect(mapStateToProps, { increment })
export default class Demo extends Component {
    constructor() {
        super();
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(this.props.increment, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className={styles.root}>
                {this.props.counter}
            </div>
        )
    }
}