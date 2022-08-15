import React from "react";
import Ban from '../../assets/FormBanner.jpg';

import { Col, Button, Row, Container, Card,Form ,InputGroup} from "react-bootstrap";

import NavbarFixed from "../navbar/navbar";

function App() {

  const [formData, setFormData] = React.useState({})
  const [ errors, setErrors ] = React.useState({})
  const setField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
    
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }
  const findFormErrors = () => {
    const { name, Email, phno, prevMun,delMun, awards } = formData
    const newErrors = {}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    else if ( name.length > 30 ) newErrors.name = 'name is too long!'
   
    if ( !Email || Email === '' ) newErrors.Email = 'mention mailid please!'
   
    if ( !phno|| phno === '' ) newErrors.phno = 'cannot be blank!'
    else if ( phno.length !=10) newErrors.phno = 'check your contact no!'
    // prevMun errors
    if ( !prevMun || prevMun === '' ) newErrors.prevMun = 'cannot be blank!'
    
 if ( !delMun || delMun === '' ) newErrors.delMun = 'cannot be blank!'
 if ( !awards || awards === '' ) newErrors.awards = 'cannot be blank!'
    return newErrors
  }
   const handleSubmit = e => {
    e.preventDefault()
   
    const newErrors = findFormErrors()
   
    if ( Object.keys(newErrors).length > 0 ) {
      
      setErrors(newErrors)
    } else {
     
      alert('Thank you for participation!')
    }
  }
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
  
  return (
    <>
      <NavbarFixed />
      
      <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                
                
                
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Apply For IEM-MUN</h2>
                  
                  <div className="mb-3">
                    <Form>
                      
                        <fieldset>
                <legend>deligation </legend>
                <input 
                    type="radio"
                    id="single"
                    name="deligation"
                    value="single"
                    checked={formData.deligation === "single"}
                    onChange={handleChange}
                />
                <label htmlFor="single">single</label>
                <br />
                
                <input 
                    type="radio"
                    id="Double"
                    name="deligation"
                    value="Double"
                    checked={formData.deligation === "Double"}
                    onChange={handleChange}
                />
                <label htmlFor="Double">Double</label>
                <br />
                
               
            </fieldset>
            <br />

                      

                     
    

                        <Form.Group>
          <Form.Label>Name*</Form.Label>
          <Form.Control 
            type='text' 
            onChange={ e => setField('name', e.target.value) }
            isInvalid={ !!errors.name }
          />
           <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
        </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email*</Form.Label>
          <Form.Control 
            type='text' 
            onChange={ e => setField('Email', e.target.value) }
            isInvalid={ !!errors.Email }
          />
           <Form.Control.Feedback type='invalid'>{ errors.Email }</Form.Control.Feedback>
   </Form.Group>
   <br/>

    <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Contact No*</Form.Label>
          <Form.Control 
            type='text' 
            onChange={ e => setField('phno', e.target.value) }
            isInvalid={ !!errors.phno }
          />
           <Form.Control.Feedback type='invalid'>{ errors.phno }</Form.Control.Feedback>
   </Form.Group>
   <br/>
          <fieldset>
                <legend>Year of Study </legend>
                <input 
                    type="radio"
                    id="1st"
                    name="deligation"
                    value="1st"
                    checked={formData.Yos === "1st"}
                    onChange={handleChange}
                />
                <label htmlFor="1st">1st</label>
                <br />
                
                <input 
                    type="radio"
                    id="2nd"
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
                    name="Yos"
                    value="4th"
                    checked={formData.Yos === "4th"}
                    onChange={handleChange}
                />
                <label htmlFor="4th">4th</label>
                <br />
            </fieldset>
            <br />

   
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
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
