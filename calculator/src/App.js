
import React, { Component } from 'react';
import Template from './components/Template'
import Form from './components/Form';
import ComponentList from './components/ComponentList'
import calculate from './operation/calculate'

export default class App extends Component {

    state = {
      next: null,
      operation: null,
      result: null,
    }



    onClickTest = button => {
      this.setState(calculate(this.state, button));
    }

    handleChange = () => {
      this.setState({
        result: this.state.result
      });
    }



    render() {
        return (
          <Template form ={(
            <Form
              result ={this.state.result||this.state.next||'0'}
              onChange ={this.handleChange}
              />
          )}>
            <ComponentList onClick={this.onClickTest}/>
          </Template>
              /*<Form result ={this.state.result}/>*/
              /*<Numbers onClick={this.onClickTest}/>*/

        );
    }
}
