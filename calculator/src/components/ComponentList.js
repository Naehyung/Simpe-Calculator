import React, { Component } from 'react';
import './ComponentList.css';

class ComponentList extends Component {

  render() {
    const { onClick } = this.props;

    return (
      <div className="numbers">
        <div className = "numbers-row">
          <button name="1" onClick={e => onClick(e.target.name)}>1</button>
          <button name="2" onClick={e => onClick(e.target.name)}>2</button>
          <button name="3" onClick={e => onClick(e.target.name)}>3</button>
          <button name="c" onClick={e => onClick(e.target.name)}>c</button>
        </div>
        <div className = "numbers-row">
          <button name="4" onClick={e => onClick(e.target.name)}>4</button>
          <button name="5" onClick={e => onClick(e.target.name)}>5</button>
          <button name="6" onClick={e => onClick(e.target.name)}>6</button>
          <button name="+" onClick={e => onClick(e.target.name)}>+</button>
        </div>
        <div className = "numbers-row">
          <button name="7" onClick={e => onClick(e.target.name)}>7</button>
          <button name="8" onClick={e => onClick(e.target.name)}>8</button>
          <button name="9" onClick={e => onClick(e.target.name)}>9</button>
          <button name="-" onClick={e => onClick(e.target.name)}>-</button>
        </div>
        <div className = "numbers-row">
          <button name="0" onClick={e => onClick(e.target.name)}>0</button>
          <button name="." onClick={e => onClick(e.target.name)}>.</button>
          <button name="*" onClick={e => onClick(e.target.name)}>*</button>
          <button name="/" onClick={e => onClick(e.target.name)}>/</button>
        </div>
        <div className = "numbers-row">
          <button className = "buttonEqual" name="=" onClick={e => onClick(e.target.name)}>=</button>
        </div>

      </div>
    );

  }
}

export default ComponentList;
