import React, { useEffect, useState } from 'react'
import { Formik, Form, useField, Field } from 'formik'
import { useForm } from 'react-hook-form'
import { TextField } from './TextField'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './signup.css'
import ClipLoader from 'react-spinners/ClipLoader'

export const Refer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { handleSubmit, formState } = useForm()
  const { isSubmitting } = formState
  const [loading, setLoading] = useState(false)
  const [referId, setReferId] = useState('')
  const history = useHistory()
  const validate = Yup.object({
    name: Yup.string()
      .max(50, 'Must be 15 characters or less')
      .required('Required'),

    email: Yup.string().email('Email is invalid').required('Email is required'),
  })

  return (
    <div className='munform'>
      {loading ? (
        <div className='submitpageloader'>
          <ClipLoader
            className='loader'
            color={'#ffff'}
            // css={override}
            loading={loading}
            size={30}
          />
        </div>
      ) : (
        <Formik
          initialValues={{
            name: '',

            email: '',

            auth: 'S3RDMUNCEMA22',
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            // console.log(values)
            setLoading(true)

            try {
              const { data } = await axios.post(
                'https://cema-mun.herokuapp.com/api/referral/',
                values
              )
              setReferId(data)
              setLoading(false)
            } catch (error) {
              console.log(error)
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
            <div className='mt-3 mb-4 display'>
              <h1>Refer and Win</h1>
              <hr />
              <ul>
                <li>Get you referral key and send it to others.</li>
                <li>They will use your referral key to register.</li>
                <li>Top 3 winners will get prizes worth 5k rupees.</li>
                <li>Minimum 3 referrals for availing any prize.</li>
                <li>
                  A referral is valid only after the participant pay the
                  registration fees.
                </li>
              </ul>

              <hr />
              {referId ? (
                <div>
                  <h2>
                    Your Refer id is: <h1>{referId}</h1>
                  </h2>
                  <p></p>
                </div>
              ) : (
                <Form>
                  <br />
                  <TextField
                    label='Name*'
                    name='name'
                    type='text'
                    placeholder='Enter Name '
                  />
                  <br />

                  <br />
                  <TextField
                    label='Email*'
                    name='email'
                    type='email'
                    placeholder='Enter email'
                  />
                  <br />

                  <br />

                  {/* <FormExample/> */}

                  <button
                    className='btn btn-primary mt-3'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <button
                    className='btn btn-danger mt-3 ml-3 mx-2'
                    type='reset'
                  >
                    Reset
                  </button>
                </Form>
              )}
            </div>
          )}
        </Formik>
      )}
    </div>
  )
}
