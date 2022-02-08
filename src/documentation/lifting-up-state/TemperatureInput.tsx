import React, { Component } from 'react';

interface ScaleNameInterface {
    [char: string]: string
}

const scaleNames: ScaleNameInterface = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

interface TemperatureInputInterface {
    scale: string,
    temperature: string,
    onTemperatureChange: (value: string) => void
}

class TemperatureInput extends React.Component<TemperatureInputInterface, {}> {
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const { temperature, scale } = this.props;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;