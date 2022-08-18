import React, { useRef, useState } from 'react'
import './form.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { replace, useFormik } from 'formik'

import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'

import NavbarFixed from '../navbar/navbar'
import Select from 'react-select'

function App() {
  const navigate = useNavigate()
  const nameRef = useRef()
  const EmailRef = useRef()
  const phnoRef = useRef()
  const codelRef = useRef()
  const codelphRef = useRef()
  const NMUNRef = useRef()
  const prizeRef = useRef()
  const fcpRef = useRef()
  const scpRef = useRef()
  const tcpRef = useRef()
  const checkboxref = useRef()
  const MUN = ['branch', 'yearofStudy', 'phno']
  const formik = useFormik({
    initialValues: {
      name: '',
      Email: '',
      phno: '',
      mun: MUN[0],
      nameCodel: '',
      codelno: '',
      PrevMunexp: '',
      awards: '',
      refid: '',
    },
    onSubmit: (values) => {
      alert(`hgcksdn yrsiej name: ${values.name} . email: ${values.Email}`)
    },
  })

  const [formData, setFormData] = React.useState({})
  const [errors, setErrors] = React.useState({})
  const setField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      })
  }
  const findFormErrors = () => {
    const {
      name,
      Email,
      phno,
      prevMun,
      delMun,
      awards,
      awardsDel,
      fstpp,
      sndpp,
      trdpp,
    } = formData
    const newErrors = {}
    // name errors
    if (!name || name === '') newErrors.name = 'cannot be blank!'
    else if (name.length > 30) newErrors.name = 'name is too long!'

    if (!Email || Email === '') newErrors.Email = 'mention mailid please!'

    if (!phno || phno === '') newErrors.phno = 'cannot be blank!'
    else if (phno.length != 10) newErrors.phno = 'check your contact no!'
    // prevMun errors
    if (!prevMun || prevMun === '') newErrors.prevMun = 'cannot be blank!'

    if (!delMun || delMun === '') newErrors.delMun = 'cannot be blank!'
    if (!awards || awards === '') newErrors.awards = 'cannot be blank!'
    if (!awardsDel || awardsDel === '') newErrors.awardsDel = 'cannot be blank!'
    if (!fstpp || fstpp === '') newErrors.fstpp = 'cannot be blank!'
    if (!sndpp || sndpp === '') newErrors.sndpp = 'cannot be blank!'
    if (!trdpp || trdpp === '') newErrors.trdpp = 'cannot be blank!'

    return newErrors
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = findFormErrors()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      console.log(e)
      try {
        await axios.post(
          '/https://dd82-104-28-242-148.in.ngrok.io/api/register/',
          e
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  function handleChange(event) {
    console.log(event)
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }
}

export default App
