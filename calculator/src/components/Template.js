import React from 'react';
import './Template.css';

const Template = ({form, children}) => {
  return (
    <main className ="calculator-template">
      <div className="title">
        calculator
      </div>
      <section className = "form-wrapper">
        {form}
      </section>
      <section className = "children-wrapper">
        {children}
      </section>
    </main>
  );
};

export default Template;
