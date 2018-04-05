import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import Hotkeys from 'react-hot-keys';

import {nextSlide, previousSlide, setSlide} from './actions/slide';
import slides from './slides';

const mapStateToProps = ({currentSlide}) => ({
    currentSlide
});

@withRouter
@connect(mapStateToProps, {
    nextSlide,
    previousSlide,
    setSlide
})
export default class Presentation extends Component {
    componentDidMount() {
        const {location: {pathname}, setSlide} = this.props;
        const slide = parseInt(pathname.substr(pathname.indexOf('/slides/') + 8), 10);

        setSlide(slide);
    }

    handleKeyPress = (keyName) => {
        const {nextSlide, previousSlide, currentSlide} = this.props;
        switch (keyName) {
            case 'left':
                return currentSlide > 0 && previousSlide();
            case 'right':
                return nextSlide();
            default:
                return;
        }
    };

    render() {
        return (
            <Hotkeys
                keyName="left,right"
                onKeyDown={this.handleKeyPress}>
                <Route render={({ location }) => (
                    <Switch location={location}>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/slides/0"/>} />

                        {slides.map((Slide, index) =>
                            <Route
                                key={`slide-${index}`}
                                path={`/slides/${index}`}
                                component={Slide}/>
                        )}
                    </Switch>
                )}/>
            </Hotkeys>
        );
    }
}
