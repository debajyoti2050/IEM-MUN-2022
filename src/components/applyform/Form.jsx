import React ,{useRef}from "react";
import './form.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {replace, useFormik} from 'formik';

import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";

import NavbarFixed from "../navbar/navbar";
import Select from "react-select/dist/declarations/src/Select";

function App() {
const navigate= useNavigate();
const nameRef=useRef();
const EmailRef=useRef();
const phnoRef=useRef();
const codelRef = useRef();
const  codelphRef = useRef();
const   NMUNRef = useRef();
const prizeRef = useRef();
const fcpRef = useRef();
const scpRef = useRef();
const tcpRef =useRef();
const checkboxref = useRef();
const   MUN =["branch","yearofStudy","phno"];
// const formik=useFormik({

// initialValues:{
//   name: '',
//   Email:'',
//   phno:"",
//   mun: MUN[0],
//    nameCodel:"" ,
//      codelno:"", 
//      PrevMunexp:"" ,
//      awards:"", 
//      refid:""

// },
onSubmit:(values) =>{
alert( `hgcksdn yrsiej name: ${values.name} . email: ${values.Email }`);
}



}) 


  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const setField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  const findFormErrors = () => {
    const { name, Email, phno, prevMun, delMun, awards, awardsDel,fstpp,sndpp,trdpp } = formData;
    const newErrors = {};
    // name errors
    if (!name || name === "") newErrors.name = "cannot be blank!";
    else if (name.length > 30) newErrors.name = "name is too long!";

    if (!Email || Email === "") newErrors.Email = "mention mailid please!";

    if (!phno || phno === "") newErrors.phno = "cannot be blank!";
    else if (phno.length != 10) newErrors.phno = "check your contact no!";
    // prevMun errors
    if (!prevMun || prevMun === "") newErrors.prevMun = "cannot be blank!";

    if (!delMun || delMun === "") newErrors.delMun = "cannot be blank!";
    if (!awards || awards === "") newErrors.awards = "cannot be blank!";
    if (!awardsDel || awardsDel === "")

      newErrors.awardsDel = "cannot be blank!";
    if(!fstpp|| fstpp === "") newErrors.fstpp = "cannot be blank!";
    if(!sndpp||sndpp ==="") newErrors.sndpp ="cannot be blank!";
    if(!trdpp||trdpp ==="") newErrors.trdpp ="cannot be blank!";
 

      return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(e);
      try{
        await axios.post("/https://dd82-104-28-242-148.in.ngrok.io/api/register/",e);
      }
      catch(error){
        console.log(error);
      }
    }
  };

  function handleChange(event) {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <>
      <NavbarFixed />

      <div className="form">
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                
                
                
                <div className="mb-3 mt-md-4 mt-lg-0">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Apply For IEM-MUN</h2>
                  
                  <div className="mb-3">
                    <Form onSubmit={formik.handleSubmit} >
                      
                        <fieldset>
                <legend>Delegation </legend>
                <input 
                    type="radio"
                    id="single"
                    ref ={checkboxref}
                    name="deligation"
                    value="single"
                    checked={formData.deligation === "single"}
                    onChange={handleChange}
                />
                <label htmlFor="single">Single</label>
                <br />
                
                <input 
                    type="radio"react-redux redux-form

                    id="Double"
                    ref= {checkboxref}
                    name="deligation"
                    value="Double"
                    checked={formData.deligation === "Double"}
                    onChange={handleChange}
                />
                <Select options={[
                  
                ]}>
                <label htmlFor="Double">Double</label>
                <br />
                
               
            </fieldset>
            <br />

                      

                     
    

                        <Form.Group>
                          <Form.Label>Name*</Form.Label>
                          <Form.Control
                            type="text"
                            ref={nameRef}
                            onChange={(e) => setField("name", e.target.value)}
                            isInvalid={!!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email*</Form.Label>
          <Form.Control 
            type='text' 
            ref ={EmailRef}
            onChange={ e => setField('Email', e.target.value) }
            isInvalid={ !!errors.Email }
          />
           <Form.Control.Feedback type='invalid'>{ errors.Email }</Form.Control.Feedback>
   </Form.Group>
   <br/>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Contact No*</Form.Label>
                          <Form.Control
                         type="number"
                         ref={phnoRef}
                    
                            onChange={(e) => setField("phno", e.target.value)}
                            isInvalid={!!errors.phno}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.phno}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <fieldset>
                          <legend>Year of Study </legend>
                          <input
                            type="radio"
                            id="st"
                            ref={checkboxref}
                            name="Yos"
                            value="st"
                            checked={formData.Yos === "st"}
                            onChange={handleChange}
                          />
                          <label htmlFor="st">1st</label>
                          <br />

                          <input
                            type="radio"
                            id="2nd"
                             ref={checkboxref}
                            name="Yos"
                            value="2nd"
                            checked={formData.Yos === "2nd"}
                            onChange={handleChange}
                          />
                          <label htmlFor="2nd">2nd</label>
                          <br />
                          <input
                            type="radio"
                            id="3rd"
                             ref={checkboxref}
                            name="Yos"
                            value="3rd"
                            checked={formData.Yos === "3rd"}
                            onChange={handleChange}
                          />
                          <label htmlFor="3rd">3rd</label>
                          <br />
                          <input
                            type="radio"
                            id="Double"
                             ref={checkboxref}
                            name="Yos"
                            value="4th"
                            checked={formData.Yos === "4th"}
                            onChange={handleChange}
                          />
                          <label htmlFor="4th">4th</label>
                          <br />
                        </fieldset>
                        <br />

                        <br />
                        <fieldset>
                          <legend>Branch </legend>
                          <input
                            type="radio"
                            id="CSE"
                            name="B"
                            value="CSE"
                            checked={formData.B === "CSE"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE">CSE</label>
                          <br />

                          <input
                            type="radio"
                            id="ECE"
                            name="B"
                            value="ECE"
                            checked={formData.B === "ECE"}
                            onChange={handleChange}
                          />
                          <label htmlFor="ECE">ECE</label>
                          <br />
                          <input
                            type="radio"
                            id="CSE/IOT"
                            ref={checkboxref}
                            name="B"
                            value="CSE/IOT"
                            checked={formData.B === "CSE/IOT"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE/IOT">CSE/IOT</label>
                          <br />
                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="CSE/AIML"
                            checked={formData.B === "CSE/AIML"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE/AIML">CSE/AIML</label>

                          <br />

                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="CSE/CSBS"
                            checked={formData.B === "CSE/CSBS"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE/CSBS">CSE/CSBS</label>

                          <br />

                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="IT"
                            checked={formData.B === "IT"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IT">IT</label>

                          <br />

                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="MECH"
                            checked={formData.B === "MECH"}
                            onChange={handleChange}
                          />
                          <label htmlFor="MECH">MECH</label>

                          <br />
                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="EE"
                            checked={formData.B === "EE"}
                            onChange={handleChange}
                          />
                          <label htmlFor="EE">EE</label>

                          <br />
                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="AI"
                            checked={formData.B === "AI"}
                            onChange={handleChange}
                          />
                          <label htmlFor="AI">AI</label>

                          <br />

                          <input
                            type="radio"
                            id="BCA"
                            name="B"
                            value="BCA"
                            checked={formData.B === "BCA"}
                            onChange={handleChange}
                          />
                          <label htmlFor="BCA">BCA</label>

                          <br />
                          <input
                            type="radio"
                            id="Double"
                            name="B"
                            value="BBA"
                            checked={formData.B === "BBA"}
                            onChange={handleChange}
                          />
                          <label htmlFor="BBA">BBA</label>

                          <br />
                          <input
                            type="radio"
                            id="Double"
                            name="B"
                            value="MBA"
                            checked={formData.B === "MBA"}
                            onChange={handleChange}
                          />
                          <label htmlFor="MBA">MBA</label>

                          <br />
                        </fieldset>
                        <br />

                        <Form.Group>
                          <Form.Label>previous year MUN experience*</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) =>
                              setField("prevMun", e.target.value)
                            }
                            isInvalid={!!errors.prevMun}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.prevMun}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Detailed MUN experience*</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setField("delMun", e.target.value)}
                            isInvalid={!!errors.delMun}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.delMun}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Awards*</Form.Label>
                          <Form.Control
                            type="number"
                            onChange={(e) => setField("awards", e.target.value)}
                            isInvalid={!!errors.awards}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.awards}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Awards Details*</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setField("awardsDel", e.target.value)}
                            isInvalid={!!errors.awardsDel}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.awardsDel}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCoDeligate"
                        >
                          <Form.Label>Co-Deligate(if any)</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Co-delegate name "
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCoEmail"
                        >
                          <Form.Label>Co Deligate Email(if any)</Form.Label>
                          <Form.Control type="email" placeholder="Enter mail" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicphno">
                          <Form.Label>Co Deligate phone no(if any)</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter phone no"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        ></Form.Group>
                        <fieldset>
                          <legend>Year of Study(for Co-deleget) </legend>
                          <input
                            type="radio"
                            id="1st1"
                            name="Yoss"
                            value="1st1"
                            checked={formData.Yos === "1st1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="1st1">1st</label>
                          <br />

                          <input
                            type="radio"
                            id="2nd1"
                            name="Yoss"
                            value="2nd"
                            checked={formData.Yoss === "2nd1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="2nd1">2nd</label>
                          <br />
                          <input
                            type="radio"
                            id="3rd1"
                            name="Yoss"
                            value="3rd1"
                            checked={formData.Yoss === "3rd1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="3rd1">3rd</label>
                          <br />
                          <input
                            type="radio"
                            id="4th1"
                            name="Yoss"
                            value="4th1"
                            checked={formData.Yoss === "4th1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="4th1">4th</label>
                          <br />
                        </fieldset>
                        <br />

                        <br />
                        <fieldset>
                          <legend>Branch(for Co-deleget) </legend>
                          <input
                            type="radio"
                            id="CSE1"
                            name="BB"
                            value="CSE1"
                            checked={formData.BB === "CSE1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE1">CSE</label>
                          <br />

                          <input
                            type="radio"
                            id="ECE1"
                            name="BB"
                            value="ECE1"
                            checked={formData.BB === "ECE1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="ECE1">ECE</label>
                          <br />
                          <input
                            type="radio"
                            id="CSE/IOT1"
                            name="BB"
                            value="CSE/IOT1"
                            checked={formData.B === "CSE/IOT1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE/IOT1">CSE/IOT</label>
                          <br />
                          <input
                            type="radio"
                            id="CSE/AIML1"
                            name="BB"
                            value="CSE/AIML1"
                            checked={formData.B === "CSE/AIML1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE/AIML1">CSE/AIML</label>

                          <br />

                          <input
                            type="radio"
                            id="CSE/CSBS1"
                            name="B"
                            value="CSE/CSBS1"
                            checked={formData.BB === "CSE/CSBS1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE/CSBS1">CSE/CSBS</label>

                          <br />

                          <input
                            type="radio"
                            id="IT1"
                            name="BB"
                            value="IT1"
                            checked={formData.BB === "IT1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="IT1">IT</label>

                          <br />

                          <input
                            type="radio"
                            id="MECH1"
                            name="BB"
                            value="MECH1"
                            checked={formData.BB === "MECH1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="MECH1">MECH</label>

                          <br />
                          <input
                            type="radio"
                            id="EE1"
                            name="BB"
                            value="EE1"
                            checked={formData.BB === "EE1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="EE1">EE</label>

                          <br />
                          <input
                            type="radio"
                            id="AI1"
                            name="BB"
                            value="AI1"
                            checked={formData.B === "AI1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="AI1">AI</label>

                          <br />

                          <input
                            type="radio"
                            id="BCA1"
                            name="BB"
                            value="BCA1"
                            checked={formData.BB === "BCA1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="BCA1">BCA</label>

                          <br />
                          <input
                            type="radio"
                            id="BBA1"
                            name="BB"
                            value="BBA1"
                            checked={formData.BB === "BBA1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="BBA1">BBA</label>

                          <br />
                          <input
                            type="radio"
                            id="MBA1"
                            name="BB"
                            value="MBA1"
                            checked={formData.B === "MBA1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="MBA1">MBA</label>

                          <br />
                        </fieldset>
                        <br />
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCoEmail"
                        >
                          <Form.Label>
                            Previous MUN experience(if any)
                          </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter mail"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCoEmail"
                        >
                          <Form.Label>
                            Details about previous MUN experience of Co-Delegate
                          </Form.Label>
                          <Form.Control type="text" placeholder="Enter mail" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCoEmail"
                        >
                          <Form.Label>No of Awards(if any)</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter mail"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCoEmail"
                        >
                          <Form.Label>
                            Details about Awards of co-delegate(if any)
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter mail"
                          />
                        </Form.Group>

                        <fieldset>
                          <legend> your committee Preference* </legend>
                          <input
                            type="radio"
                            id="unga"
                            name="cp"
                            value="unga"
                            checked={formData.cp === "unga"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unga">
                           Disarmament and International Security Committee (DISEC)
                          </label>
                          <br />

                          <input
                            type="radio"
                            id="unitar"
                            name="cp"
                            value="unitar"
                            checked={formData.cp === "unitar"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unitar">
                            World Health Assembly(WHA)
                          </label>
                          <br />
                         
                          
                        </fieldset>
                        <br />


                         <Form.Group>
                          <Form.Label> 1st profile*</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setField("fstpp", e.target.value)}
                            isInvalid={!!errors.fstpp}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.fstpp}
                          </Form.Control.Feedback>
                        </Form.Group> 
                        <Form.Group>
                          <Form.Label>2nd profile preference*</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setField("sndpp", e.target.value)}
                            isInvalid={!!errors.sndpp}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.sndpp}
                          </Form.Control.Feedback>
                        </Form.Group>
                         <Form.Group>
                          <Form.Label>3rd profile preference*</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => setField("trdpp", e.target.value)}
                            isInvalid={!!errors.trdpp}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.trdpp}
                          </Form.Control.Feedback>
                        </Form.Group>



  <Form.Group
       className="mb-3"
      controlId="ref"
      >
<Form.Label>Reference ID(if any)</Form.Label>
                        <Form.Control type="text" placeholder="Enter please(if any)" />
                      </Form.Group>


                       <Button type='submit' onClick={ handleSubmit }>Submit please</Button>
                    </Form>
                    
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default App;