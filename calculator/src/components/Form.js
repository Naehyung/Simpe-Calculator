import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  render() {
    const { result, onChange } = this.props;
    return (
      <div className="form">
        <input value={result} onChange ={onChange}/>
      </div>
    );
  }
}

export default Form;
