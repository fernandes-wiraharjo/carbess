import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './range.css';

export default class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 0, max: 500 }
    };
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(value) {
    this.setState({ value });
  }
  
  render() {
    return (
      <div>
        <RangeInput value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}


const RangeInput = ({ value, onChange }) => (
  <InputRange
    step={100}
    formatLabel={value => `Rp${value}`}
    maxValue={500}
    minValue={0}
    value={value}
    onChange={onChange}
    />
);
