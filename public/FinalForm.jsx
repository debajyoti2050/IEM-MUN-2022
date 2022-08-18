import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


let SignInForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit} className="form">
    <div className="field">
      <div className="control">
        <Field name="firstName" component={renderField} type="text" label="First Name"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="phno" component={renderField} type="number" label="contact number*"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="email" component={renderField} type="email" label="Email Address*"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <Field name="Name" component={renderField} type="text" label="Name of Co-delegate"/>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Delegation</label>
        <div className="select">
          <Field className="input" name="Delegation" component="select">
            <option />
            <option value="single">Single</option>
            <option value="Double">Double</option>
           
          </Field>
        </div>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Year Of Study</label>
        <label className="radio">
          <Field name="1st" component="input" type="radio" value="1st" />
          {' '}
           1st
        </label>
        <label className="radio">
          <Field name="2nd" component="input" type="radio" value="2nd" />
          {' '}
          2nd
        </label>
         <label className="radio">
          <Field name="3rd" component="input" type="radio" value="3rd" />
          {' '}
          3rd
        </label>
         <label className="radio">
          <Field name="4th" component="input" type="radio" value="4th" />
          {' '}
          4th
        </label>

      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="label">Stream</label>
        <label className="radio">
          <Field name="CSE" component="input" type="radio" value="CSE" />
          {' '}
           CSE
        </label>
        <label className="radio">
          <Field name="ECE" component="input" type="radio" value="ECE" />
          {' '}
          ECE
        </label>
         <label className="radio">
          <Field name="IT" component="input" type="radio" value="IT" />
          {' '}
          IT
        </label>
         <label className="radio">
          <Field name="AI" component="input" type="radio" value="AI" />
          {' '}
          AI
        </label>
         <label className="radio">
          <Field name="AIML" component="input" type="radio" value="AIML" />
          {' '}
          AIML
        </label>
         <label className="radio">
          <Field name="IOT" component="input" type="radio" value="IOT" />
          {' '}
          IOT
        </label>
         <label className="radio">
          <Field name="AIML" component="input" type="radio" value="AIML" />
          {' '}
          AIML
        </label>
         <label className="radio">
          <Field name="MECH" component="input" type="radio" value="MECH" />
          {' '}
          MECH
        </label>
         <label className="radio">
          <Field name="BCA" component="input" type="radio" value="BCA" />
          {' '}
          BCA
        </label>
         <label className="radio">
          <Field name="BBA" component="input" type="radio" value="BBA" />
          {' '}
          BBA
        </label>
         <label className="radio">
          <Field name="MBA" component="input" type="radio" value="MBA" />
          {' '}
          MBA
        </label>


      </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>


    <div className="field">
      <div className="control">
       
        <Field  name="PME" component={renderField} type="number" label="Previous MUN Experience" />
      </div>
    </div>

    <div className="field">
      <div className="control">
       
        <Field  name="PrizesWon"  component="input" label="Prizes won(College/School:Committee:Country:Prize won)" />
      </div>
    </div>
<div className="field">
      <div className="control">
        <label className="label">Committee Preference</label>
        <label className="radio">
          <Field name="1st" component="input" type="radio" value="1st" />
          {' '}
          Disarmament and International Security Committee (DISEC)
        </label>
        <label className="radio">
          <Field name="2nd" component="input" type="radio" value="2nd" />
          {' '}
          World Health Assembly(WHA)
        </label>
 </div>
    </div>

    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
          Save Details
        </label>
      </div>
    </div>


    
    <div className="field">
      <div className="control">
       
        <Field  name="1stPortfolioPref" component={renderField} type="text" label="1st Portfolio preference" />
      </div>
    </div>

    <div className="field">
      <div className="control">
       
        <Field  name="2ndPortfolioPref" component={renderField} type="text" label="2nd Portfolio preference" />
      </div>
    </div>

    <div className="field">
      <div className="control">
       
        <Field  name="3rdPortfolioPref" component={renderField} type="text" label="3rd Portfolio preference" />
      </div>
    </div>





    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>

  </form>;
};

const validate = val => {
  const errors = {};
  if (!val.firstName) {
    console.log('First Name is required');
    errors.Name = 'Required';
  }
  
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }

  if(!val.PME){
    console.log('Experience is Required');
    errors.PME ='Required';

  }
  else if (isNaN(Number(val.PME))){
    errors.PME ='Must be a number'
  }
  
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

SignInForm = reduxForm({
  form: 'signIn',
  validate,
})(SignInForm);

class App extends Component {

  handleSignIn = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to MUN 2022</h1>
        </header>
        <div className="container">
          <p className="App-intro">
           APPLY HERE
          </p>
          <SignInForm onSubmit={this.handleSignIn} />
        </div>
      </div>
    );
  }
}

export default App;