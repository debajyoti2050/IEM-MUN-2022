import React from 'react'
import { Formik, Form, useField, Field } from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './signup.css'

export const Signup = () => {
  const history = useHistory()
  const validate = Yup.object({
    name: Yup.string()
      .max(50, 'Must be 15 characters or less')
      .required('Required'),
    phone: Yup.string().min(10, 'Must be 10 characters').required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    fcp: Yup.string().required('First country preference is required'),
    scp: Yup.string().required('Second country preference is required'),
    tcp: Yup.string().required('Third country preference is required'),
    delegation: Yup.mixed().required('Delegation is required'),
    organization: Yup.string()
      .max(100, 'Must be 100 characters or less')
      .required('Required'),
    compref: Yup.mixed().required('Committee Preference is required'),
    // year: Yup.mixed().required("Year is required"),
    // branch: Yup.mixed().required("Branch is required"),
    codelname: Yup.string().max(50, 'Must be 50 characters or less'),
    codelphone: Yup.string().min(10, 'Must be 10 characters'),
    codelemail: Yup.string().email('Email is invalid'),
    residence1 : Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
    residence2: Yup.string().max(50, 'Must be 50 characters or less'),
    accomodation : Yup.mixed().required('Please select an Option'),
    no_of_muns : Yup.string().max(3, 'Must be 3 characters or less').required('Required'),
    accomplishments :  Yup.string().max(300, 'Must be 300 characters or less'),

  })

  return (
    <Formik
      initialValues={{
        delegation: '',
        name: '',
        phone: '',
        email: '',
        compref: '',
        organization: '',
        codelname: '',
        codelphone: '',
        codelemail: '',
        fcp: '',
        scp: '',
        tcp: '',
        residence1: '',
        residence2: '',
        accomodation: '',
        no_of_muns: '',
        accomplishments: '',
        auth: 'S3RDMUNCEMA22',
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        console.log(values)

        try {
          await axios.post('http://172.105.58.216/api/register/', values)
          history.push('/payment-success')
        } catch (error) {
          console.log(error)
          history.push('/payment-failed')
        }

        // await axios.post(
        //   "https://8d0f-202-142-77-192.in.ngrok.io/api/register/",
        //   {
        //     data: values,
        //   }
        // );
        // console.log("request sent");
      }}
    >
      {({ errors, touched }) => (
        <div className='mt-4 mb-4'>
          <h1 className='my-4 font-weight-bold display'>
            APPLY FOR IEM-MUN 2022
          </h1>
          <Form>
            <div>
              <h5>Delegation</h5>
            </div>
            <div>
              <label>
                <Field type='radio' name='delegation' value='single' />
                Single
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='delegation' value='double' />
                Double
              </label>
              <br />
              <span>{errors.delegation}</span>
            </div>
            <br />
            <TextField label='Name*' name='name' type='text' />
            <br />
            <TextField
              label='Enter your Phone no./WhatsApp no. *'
              name='phone'
              type='number'
            />
            <br />
            <TextField label='Email*' name='email' type='email' />
            <br />
            <div>
              <h5>Committee Preference</h5>
            </div>
            <div>
              <label>
                <Field type='radio' name='compref' value='UNGA' />
                UNITED NATIONS GENERAL ASSEMBLY (UNGA)
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='UNITAR' />
                UNITED NATIONS INSTITUTE FOR TRAINING AND RESEARCH
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='IP' />
                INTERNATIONAL PRESS (IP)
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='IC' />
                INDIAN CABINET MINISTRY OF FINANCE
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='UNOCEAN' />
                UN OCEAN CONFERENCE
              </label>
            </div>
            <span>{errors.compref}</span>
            <br />
            {/* <div><h5>Year of Study</h5></div>
            <div>
              <label>
                <Field type="radio" name="year" value="first" />
                1st
              </label>
              <label>
              &nbsp;&nbsp;
                <Field type="radio" name="year" value="second" />
                2nd
              </label>
              <label>
              &nbsp;&nbsp;
                <Field type="radio" name="year" value="third" />
                3rd
              </label>
              <label>
              &nbsp;&nbsp;
                <Field type="radio" name="year" value="fourth" />
                4th
              </label>
            </div>
              <span>{errors.year}</span>
            <br/>
            <div><h5>Branch</h5></div>
            <div>
              <label>
                <Field type="radio" name="branch" value="CSE" />
                CSE
              </label>
              <label>
              &nbsp;&nbsp;
                <Field type="radio" name="branch" value="CSE/AIML" />
                CSE/AIML
              </label>
              <label>
              &nbsp;&nbsp;
                <Field type="radio" name="branch" value="CSE/CSBS" />
                CSE/CSBS
              </label>
              <label>
              &nbsp;&nbsp;
                <Field type="radio" name="branch" value="CSE/IOT" />
                CSE/IOT
              </label>
            </div>
            <span>{errors.branch}</span>
            <br/> */}
            <TextField
              label='Which Organization do you belong to ? (School/College/University/Others)*'
              name='organization'
              type='text'
            />
            <br />
            <TextField
              label='First Country Preference*'
              name='fcp'
              type='text'
            />
            <br />
            <TextField
              label='Second Country Preference*'
              name='scp'
              type='text'
            />
            <br />
            <TextField
              label='Third Country Preference*'
              name='tcp'
              type='text'
            />
            <br />
            <TextField
              label=' Name of Co-Delegate'
              name='codelname'
              type='text'
            />
            <br />
            <TextField
              label=' Contact no of Co-Delegate'
              name='codelphone'
              type='number'
            />
            <br />
            <TextField
              label=' Co-Delegate Email'
              name='codelemail'
              type='email'
            />
            <TextField
              label="Delegate's Address"
              name='residence1'
              type='text'
            />
            <br />
            <TextField
              label="Co-Delegate's Address"
              name='residence2'
              type='text'
            />
            <br />

            <div>
              <h5>Accomodation Required?</h5>
            </div>
            <div>
              <label>
                <Field type='radio' name='accomodation' value='yes' />
                Yes
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='accomodation' value='no' />
                No
              </label>
            </div>
            <span>{errors.accomodation}</span>
            <br />
            <TextField
              label='Number of MUN you Have Participated Before'
              name='no_of_muns'
              type='number'
            />
            <br />

            <TextField
              label='Previous MUN accomplishments'
              name='accomplishments'
              type='text'
            />
            <br />

            {/* <FormExample/> */}

            <button className='btn btn-primary mt-3' type='submit'>
              Submit
            </button>
            <button className='btn btn-danger mt-3 ml-3 mx-5' type='reset'>
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
