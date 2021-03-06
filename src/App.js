import React from 'react';
// import CrossHair from './CrossHair';
import CircleMenu from './CircleMenu'

export default class App extends React.Component {
    constructor() {
        super();
        if (window.localStorage.state) {
            this.state = JSON.parse(localStorage.state);
        } else {
            this.state = {
                centerDot: 0,
                crossSize: 100,
                crossSpread: 0,
                crossLength: 0,
                crossColor: {r: 0, g: 255, b: 0, a: 1},
                dotColor: {r: 0, g: 255, b: 0, a: 1},
                currentColor: {r: 0, g: 255, b: 0, a: 1},
                dotDiameter: 10,
                strokeWidth: 1,
                spinning: false,
                showMenu: false,
                showSliders: false,
                showColorPicker: false,
                opacity: 1,
                color: 0
            }
        }
    }


    componentDidMount() {
        if (overwolf) {
            overwolf.windows.obtainDeclaredWindow("CrossWindow", result => {
                    if (result.status == "success"){
                        overwolf.windows.restore(result.window.id, r => {
                                let win = window.screen;
                                let left = win.width / 2 - 100;
                                let top = win.height / 2 - 100;
                                overwolf.windows.changePosition(result.window.id, left, top, () => {});
                            }
                        );
                    }
                }
            );
            overwolf.windows.obtainDeclaredWindow("MenuWindow", result => {
                if (result.status == "success") {
                    let win = window.screen;
                    let left = win.width / 2 - 500;
                    let top = win.height / 2 - 250;
                    overwolf.windows.changePosition(result.window.id, left, top, () => {});
                }
            })
        }
    }


    componentDidUpdate(prevProps, prevState) {
        window.localStorage.state = JSON.stringify(this.state);
    }


    handleDot = (n) => {
        this.setState({
            centerDot: n
        });
    }

    handleState = (state, value) => {
        var newState = {};
        newState[state] = value;
        this.setState(newState);
    }

    toggleColorPicker = () => {
        this.setState({showColorPicker: !this.state.showColorPicker})
    }

    toggleSliders = () => {
        this.setState({showSliders: !this.state.showSliders})
    }

    handleClick = () => {
        this.setState({showMenu: !this.state.showMenu})
        if (this.state.showMenu) {
            this.anim.tweenTo('collapse')
        } else {
            this.anim.tweenTo('open')
        }
    }

    handleColorClose = () => {
        this.setState({
            showColorPicker: false
        });
    }

    render() {

        return (
            <CircleMenu
                /* Event Handlers */
                toggleSliders={this.toggleSliders}
                handleChange={this.handleState}

                /* Props */
                crossSize={this.state.crossSize}
                crossSpread={this.state.crossSpread}
                crossLength={this.state.crossLength}
                dotDiameter={this.state.dotDiameter}
                strokeWidth={this.state.strokeWidth}
                opacity={this.state.opacity}
                crossColor={this.state.crossColor}
                dotColor={this.state.dotColor}
                currentColor={this.state.currentColor}
                handleDot={this.handleDot}

                key="menu" />

        );
    }
}
