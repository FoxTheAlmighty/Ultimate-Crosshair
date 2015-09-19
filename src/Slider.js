import React from 'react';

export default class Slider extends React.Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.updateSlider(e.target.value);
    }

    render() {
        return (
            <div>
                <label for={this.props.id}>{this.props.labelName}</label>
                <input
                    type="range"
                    id={this.props.id}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    value={this.props.value}
                    onInput={this.handleChange}
                    onChange={this.handleChange} />
            </div>
        )
    }
}
