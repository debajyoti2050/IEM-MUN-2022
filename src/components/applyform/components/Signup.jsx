import React from 'react'
import { Formik, Form, useField, Field } from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup'
import axios from 'axios'

export const Signup = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    phone: Yup.string().max(10, 'Must be 10 characters').required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    fcp: Yup.string().required(' first country preference is required'),
    scp: Yup.string().required(' second country preference is required'),
    tcp: Yup.string().required('third country preference is required'),
    delegation: Yup.mixed().required('delegation is required'),
    year: Yup.mixed().required('year is required'),
    branch: Yup.mixed().required('branch is required'),
  })

  return (
    <Formik
      initialValues={{
        delegation: '',
        name: '',
        phone: '',
        email: '',
        year: '',
        branch: '',
        codelname: '',
        codelphone: '',
        codelemail: '',
        fcp: '',
        scp: '',
        tcp: '',
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        console.log(values)
        await axios.post(
          'https://8d0f-202-142-77-192.in.ngrok.io/api/register/',
          {
            data: values,
          }
        )
        console.log('request sent')
      }}
    >
      {({ errors, touched }) => (
        <div>
          <h1 className='my-4 font-weight-bold .display-4'>
            APPLY FOR IEM-MUN 2022
          </h1>
          <Form>
            <div>Delegation</div>
            {errors.delegation}
            <div>
              <label>
                <Field type='radio' name='delegation' value='single' />
                Single
              </label>
              <label>
                <Field type='radio' name='delegation' value='double' />
                Double
              </label>
            </div>
            <TextField label='Name*' name='name' type='text' />
            <TextField
              label='Enter your Phone no*'
              name='phone'
              type='number'
            />
            <TextField label='Email*' name='email' type='email' />
            <div>Year of Study</div>
            <div>
              <label>
                <Field type='radio' name='year' value='first' />
                1st
              </label>
              <label>
                <Field type='radio' name='year' value='second' />
                2nd
              </label>
              <label>
                <Field type='radio' name='year' value='third' />
                3rd
              </label>
              <label>
                <Field type='radio' name='year' value='fourth' />
                4th
              </label>
            </div>
            <div>Branch</div>
            <div>
              <label>
                <Field type='radio' name='branch' value='first' />
                CSE
              </label>
              <label>
                <Field type='radio' name='branch' value='second' />
                CSE/AIML
              </label>
              <label>
                <Field type='radio' name='branch' value='third' />
                CSE/CSBS
              </label>
              <label>
                <Field type='radio' name='branch' value='fourth' />
                CSE/IOT
              </label>
            </div>

            <TextField
              label='First country propagation*'
              name='fcp'
              type='text'
            />
            <TextField
              label='Second country propagation*'
              name='scp'
              type='text'
            />
            <TextField
              label='Third country propagation*'
              name='tcp'
              type='text'
            />
            <TextField
              label=' Name of Co-Delegate'
              name='codelname'
              type='text'
            />
            <TextField
              label=' Contact no of Co-Delegate'
              name='codelphone'
              type='number'
            />
            <TextField label=' Co-Delegate' name='codelemail' type='email' />

            {/* <FormExample/> */}

            <button className='btn btn-dark mt-3' type='submit'>
              Submit
            </button>
            <button className='btn btn-danger mt-3 ml-3' type='reset'>
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
