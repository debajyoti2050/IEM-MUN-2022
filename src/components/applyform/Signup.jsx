import React,{useEffect, useState} from 'react'
import { Formik, Form, useField, Field } from 'formik'
import { useForm } from 'react-hook-form'
import { TextField } from './TextField'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './signup.css'
import ClipLoader from 'react-spinners/ClipLoader'


export const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const { handleSubmit, formState } = useForm()
  const { isSubmitting } = formState
  const [loading ,setLoading] = useState(false)
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
    fcp2: Yup.string().required('First country preference is required'),
    scp2: Yup.string().required('Second country preference is required'),
    tcp2: Yup.string().required('Third country preference is required'),
    delegation: Yup.mixed().required('Delegation is required'),
    organization: Yup.string()
      .max(100, 'Must be 100 characters or less')
      .required('Required'),
    organization2: Yup.string()
      .max(100, 'Must be 100 characters or less'),
      
    compref: Yup.mixed().required('Committee Preference is required'),
    compref2: Yup.mixed().required('Committee Preference is required'),
    // year: Yup.mixed().required("Year is required"),
    // branch: Yup.mixed().required("Branch is required"),
    codelname: Yup.string().max(50, 'Must be 50 characters or less'),
    codelphone: Yup.string().min(10, 'Must be 10 characters'),
    codelemail: Yup.string().email('Email is invalid'),
    residence1: Yup.string()
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    residence2: Yup.string().max(50, 'Must be 50 characters or less'),
    accomodation: Yup.mixed().required('Please select an Option'),
    no_of_muns: Yup.string()
      .max(3, 'Must be 3 characters or less')
      .required('Required'),
    accomplishments: Yup.string().max(300, 'Must be 300 characters or less'),
  })

  return (

    <div className="munform">
      {loading ? (
        <div className='submitpageloader'>
          <ClipLoader
            className='loader'
            color={'#ffff'}
            // css={override}
            loading={loading}
            size={30}
          />
        </div>) : (

       


    <Formik
      initialValues={{
        delegation: '',
        name: '',
        phone: '',
        email: '',
        compref: '',
        compref2: '',
        organization: '',
        organization2:'',
        codelname: '',
        codelphone: '',
        codelemail: '',
        fcp: '',
        scp: '',
        tcp: '',
        fcp2: '',
        scp2: '',
        tcp2: '',
        residence1: '',
        residence2: '',
        accomodation: '',
        no_of_muns: '',
        accomplishments: '',
        auth: 'S3RDMUNCEMA22',
      }}
      validationSchema={validate}
      onSubmit={async (values) => {
        // console.log(values)
        setLoading(true)

        try {
          await axios.post('https://cema-mun.herokuapp.com/api/register/', values)
          setLoading(false)
          history.push('/registration-success')
          
        } catch (error) {
          console.log(error)
          history.push('/registration-failed')
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
          <h1>APPLY FOR IEM-MUN 2022</h1>
          <hr />
          <Form>
            <div>
              <h5>Delegation *</h5>
            </div>
            <div>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='delegation' value='single' />
                &nbsp;&nbsp;Single
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='delegation' value='double' />
                &nbsp;&nbsp;Double
              </label>
              <br />
              <span>{errors.delegation}</span>
            </div>
            <br />
            <TextField
              label='Name*'
              name='name'
              type='text'
              placeholder='Enter Name '
            />
            <br />
            <TextField
              label='Phone no./WhatsApp no. *'
              name='phone'
              type='number'
              placeholder='Enter Phone no./WhatsApp no. '
            />
            <br />
            <TextField
              label='Email*'
              name='email'
              type='email'
              placeholder='Enter email'
            />
            <br />
            <TextField
              label='Which Organization do you belong to ? (School/College/University/Others)*'
              name='organization'
              type='text'
            />
            <TextField
              label="Delegate's Address"
              name='residence1'
              type='text'
              placeholder="Enter Delegate's Address "
            />
            <br />
            <div>
              <h5>Committee Preference 1</h5>
            </div>
            <div className='copref'>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='UNGA' />
                &nbsp;&nbsp;UNITED NATIONS GENERAL ASSEMBLY (UNGA) &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1SynS2xEek35PwOYtG9byLz6CmOVxhQ61AcY1SGYmvdk/edit?usp=sharing'
                  target='_blank' className='countries'
                >
                  View Countries
                </a>
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='UNITAR' />
                &nbsp;&nbsp;UNITED NATIONS INSTITUTE FOR TRAINING AND RESEARCH
                &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1LdT1eWCX4fuf2NtQg3D0N8a88eOF5dZRDK-8T09GEZQ/edit?usp=sharing'
                  target='_blank'
                >
                  View Countries
                </a>
              </label>
              <br />
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='UNOCEAN' />
                &nbsp;&nbsp;UN OCEAN CONFERENCE &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1IEN_BOekqoLkEuXN17nNufpUV2g03NYfZ-Vfp8jvXWc/edit?usp=sharing'
                  target='_blank'
                >
                  View Countries
                </a>
              </label>
              <br />
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='IC' />
                &nbsp;&nbsp;INDIAN CABINET MINISTRY OF FINANCE &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1Mc-4CP22XrWkUrPimprNY-wb_l02ZHjGF2xFNsO2Y20/edit?usp=sharing'
                  target='_blank'
                >
                  View Countries
                </a>
              </label>
              <br />
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref' value='IP' />
                &nbsp;&nbsp;INTERNATIONAL PRESS (IP) &nbsp;&nbsp; (No profiles,
                write NA in country preferences)
              </label>
              <br />
              <span>{errors.compref}</span>
            </div>
            <br/>
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

            <br />
            <div>
              <h5>Committee Preference 2</h5>
            </div>
            <div className='copref'>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref2' value='UNGA' />
                &nbsp;&nbsp;UNITED NATIONS GENERAL ASSEMBLY (UNGA) &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1SynS2xEek35PwOYtG9byLz6CmOVxhQ61AcY1SGYmvdk/edit?usp=sharing'
                  target='_blank'
                >
                  View Countries
                </a>
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref2' value='UNITAR' />
                &nbsp;&nbsp;UNITED NATIONS INSTITUTE FOR TRAINING AND RESEARCH
                &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1LdT1eWCX4fuf2NtQg3D0N8a88eOF5dZRDK-8T09GEZQ/edit?usp=sharing'
                  target='_blank'
                >
                  View Countries
                </a>
              </label>
              <br />
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref2' value='UNOCEAN' />
                &nbsp;&nbsp;UN OCEAN CONFERENCE &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1IEN_BOekqoLkEuXN17nNufpUV2g03NYfZ-Vfp8jvXWc/edit?usp=sharing'
                  target='_blank'
                >
                  View Countries
                </a>
              </label>
              <br />
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref2' value='IC' />
                &nbsp;&nbsp;INDIAN CABINET MINISTRY OF FINANCE &nbsp;&nbsp;
                <a
                  href='https://docs.google.com/document/d/1Mc-4CP22XrWkUrPimprNY-wb_l02ZHjGF2xFNsO2Y20/edit?usp=sharing'
                  target='_blank'
                >
                  View Countries
                </a>
              </label>
              <br />
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='compref2' value='IP' />
                &nbsp;&nbsp;INTERNATIONAL PRESS (IP) &nbsp;&nbsp; (No profiles,
                write NA in country preferences)
              </label>
              <br />
              <span>{errors.compref2}</span>
            </div>
            <br/>
            <TextField
              label='First Country Preference*'
              name='fcp2'
              type='text'
            />
            <br />
            <TextField
              label='Second Country Preference*'
              name='scp2'
              type='text'
            />
            <br />
            <TextField
              label='Third Country Preference*'
              name='tcp2'
              type='text'
            />
            <br />

            <br />
            <TextField
              label=' Name of Co-Delegate'
              name='codelname'
              type='text'
              placeholder='Enter Name of Co-Delegate '
            />
            <br />
            <TextField
              label=' Contact no of Co-Delegate'
              name='codelphone'
              type='number'
              placeholder='Enter Contact no of Co-Delegate '
            />
            <br />
            <TextField
              label=' Co-Delegate Email'
              name='codelemail'
              type='email'
              placeholder='Enter Co-Delegate Email '
            />
            <br/>
             <TextField
              label=' Organization of Co-Delegate (School/College/University/Others)*'
              name='organization2'
              type='text'
            />
            
            <br />
            <TextField
              label="Co-Delegate's Address"
              name='residence2'
              type='text'
              placeholder="Enter Co-Delegate's Address "
            />
            <br />

            <div>
              <h5>Accomodation Required?</h5>
            </div>
            <div>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='accomodation' value='yes' />
                &nbsp;&nbsp;Yes
              </label>
              <label>
                &nbsp;&nbsp;
                <Field type='radio' name='accomodation' value='no' />
                &nbsp;&nbsp;No
              </label>
            </div>
            <span>{errors.accomodation}</span>
            <br />
            <TextField
              label='Number of MUN you Have Participated Before'
              name='no_of_muns'
              type='number'
              placeholder='Enter number '
            />
            <br />

            <TextField
              label='Previous MUN accomplishments'
              name='accomplishments'
              type='text'
              placeholder='Enter Previous MUN accomplishments '
            />
            <br />

            {/* <FormExample/> */}

            <button className='btn btn-primary mt-3' type='submit' disabled={isSubmitting}>
              Submit
            </button>
            <button className='btn btn-danger mt-3 ml-3 mx-2' type='reset'>
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
)}
    </div>
  )
}
