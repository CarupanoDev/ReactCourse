import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";

interface BoilingVerdictProps {
  celsius: number;
}

const CelciusKey = 'c';
const FarenheitKey = 'f';

type CelciusKeyType = typeof CelciusKey;
type FarenheitKeyType = typeof FarenheitKey;

const BoilingVerdict: React.FC<BoilingVerdictProps> = (props) => {
  if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

interface CalculatorState {
  value: string;
  scale: CelciusKeyType | FarenheitKeyType;
}

class Calculator extends Component<{}, CalculatorState>{
  constructor(props: {}){
    super(props);
    this.state = {value: '', scale: CelciusKey}
  }

  handleCelsiusChange = (value: string) => {
    this.setState({ scale: CelciusKey, value });
}

handleFahrenheitChange = (value: string) => {
  this.setState({ scale: FarenheitKey, value });
}

toCelsius = (fahrenheit: number): number => {
  return (fahrenheit - 32) * 5 / 9;
}

toFahrenheit = (celsius: number): number => {
  return (celsius * 9 / 5) + 32;
}

tryConvert = (value: string, convert: (value: number) => number): string => {
  const input = parseFloat(value);

  if (Number.isNaN(input)) {
      return '';
  }

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}


render() {
  const { scale, value } = this.state;

  const celsius = scale === FarenheitKey ? this.tryConvert(value, this.toCelsius) : value;
  const fahrenheit = scale === CelciusKey ? this.tryConvert(value, this.toFahrenheit) : value;

  return (
      <div>
          <TemperatureInput
              scale={CelciusKey}
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange}
          />
          <TemperatureInput
              scale={FarenheitKey}
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange}
          />

          <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
  );
}
}

export default Calculator;