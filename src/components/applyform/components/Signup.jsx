import React from 'react';
import { Formik, Form, useField, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

    

export const Signup = () => {
  const validate = Yup.object({
    Name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    phno: Yup.string()
      .max(10, 'Must be 10 characters')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    fcp: Yup.string()
      
      .required(' first country preference is required'),
      scp: Yup.string()
      
      .required(' second country preference is required'),

      tcp:Yup.string()
      .required('third country preference is required')

   
  })
  
 

  return (
    <Formik
      initialValues={{
        Name: '',
        phno: '',
        email: '',
        fcp: '',
        scp: '',
        tcp : '',
        codel :'',
        codelph : '',
        codelemail : '',
        delegation:"",
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4"> APPLY FOR IEM-MUN 2022</h1>
          <Form>
            <div>Delegation</div>
            <div>
            <label>
              <Field type="radio" name="delegation" value="single" />
              single
            </label>
            <label>
              <Field type="radio" name="delegation" value="double" />
              Double
            </label>

            
          </div>
            <TextField label="Name*" name="Name" type="text" />
            <TextField label="Enter your Phone no*" name="phno" type="number" />
            <TextField label="Email*" name="email" type="email" />
            <div>Year of Study</div>
            <div>
            <label>
              <Field type="radio" name="Branch" value="first" />
              1st
            </label>
            <label>
              <Field type="radio" name="Branch" value="second" />
              2nd
            </label>
            <label>
              <Field type="radio" name="Branch" value="third" />
              3rd
            </label>
            <label>
              <Field type="radio" name="Branch" value="fourth" />
              4th
            </label>


            
          
          


            
          </div>
          <div>Branch</div>
            <div>
            <label>
              <Field type="radio" name="YOS" value="first" />
               CSE
            </label>
            <label>
              <Field type="radio" name="YOS" value="second" />
              CSE/AIML
            </label>
            <label>
              <Field type="radio" name="YOS" value="third" />
              CSE/CSBS
            </label>
            <label>
              <Field type="radio" name="YOS" value="fourth" />
              CSE/IOT
            </label>
            </div>


            <TextField label="First country propagation*" name="fcp" type="text" />
            <TextField label="Second country propagation*" name="scp" type="text" />
            <TextField label="Third country propagation*" name="tcp" type="text" />
            <TextField label=" Name of Co-Delegate" name="codel" type="text" />
            <TextField label=" Contact no of Co-Delegate" name="codelph" type="text" />
            <TextField label=" Name of Co-Delegate" name="codel" type="text" />
            
          
            {/* <FormExample/> */}

            <button className="btn btn-dark mt-3" type="submit">Submit</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}