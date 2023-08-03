import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './inputRange.css';

export default class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 10, max: 600 }
    };
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(value) {
    this.setState({ value });
  }
  
  render() {
    return (
      <div className="container">
      <RangeInput value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}


const RangeInput = ({ value, onChange }) => (
  <InputRange
    step={200}
    formatLabel={value => `£${value}`}
    maxValue={2000}
    minValue={0}
    value={value}
    onChange={onChange}
    />
);
