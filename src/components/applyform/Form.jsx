import React from "react";
import './form.css'
import Ban from "../../assets/FormBanner.jpg";

import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";

import NavbarFixed from "../navbar/navbar";

function App() {
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
    const { name, Email, phno, prevMun, delMun, awards, awardsDel } = formData;
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
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Thank you for participation!");
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
                <legend>delegation </legend>
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
                            type="text"
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
            onChange={ e => setField('Email', e.target.value) }
            isInvalid={ !!errors.Email }
          />
           <Form.Control.Feedback type='invalid'>{ errors.Email }</Form.Control.Feedback>
   </Form.Group>
   <br/>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Contact No*</Form.Label>
                          <Form.Control
                            type="text"
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

                        <br />
                        <fieldset>
                          <legend>Branch </legend>
                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="CSE"
                            checked={formData.B === "CSE"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE">CSE</label>
                          <br />

                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="ECE"
                            checked={formData.B === "2nd"}
                            onChange={handleChange}
                          />
                          <label htmlFor="2nd">2nd</label>
                          <br />
                          <input
                            type="radio"
                            id="B"
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
                            type="number"
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
                            type="number"
                            onChange={(e) => setField("awards", e.target.value)}
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

                        <br />
                        <fieldset>
                          <legend>Branch(for Co-deleget) </legend>
                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="CSE"
                            checked={formData.B === "CSE"}
                            onChange={handleChange}
                          />
                          <label htmlFor="CSE">CSE</label>
                          <br />

                          <input
                            type="radio"
                            id="B"
                            name="B"
                            value="ECE"
                            checked={formData.B === "2nd"}
                            onChange={handleChange}
                          />
                          <label htmlFor="2nd">2nd</label>
                          <br />
                          <input
                            type="radio"
                            id="B"
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
                            type="number"
                            placeholder="Enter mail"
                          />
                        </Form.Group>

                        <fieldset>
                          <legend>1st committee Preference* </legend>
                          <input
                            type="radio"
                            id="unga"
                            name="cp"
                            value="unga"
                            checked={formData.cp === "unga"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unga">
                            UNGA - United Nations General Assembly
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
                            UNITAR - United Nations Institute for Training &
                            Research
                          </label>
                          <br />
                          <input
                            type="radio"
                            id="un"
                            name="cp"
                            value="un"
                            checked={formData.cp === "un"}
                            onChange={handleChange}
                          />
                          <label htmlFor="un">UN Ocean Conference</label>
                          <br />
                          <input
                            type="radio"
                            id="ic"
                            name="cp"
                            value="ic"
                            checked={formData.cp === "ic"}
                            onChange={handleChange}
                          />
                          <label htmlFor="ic">
                            Indian Cabinet - Ministry of Finance
                          </label>
                          <br />
                        </fieldset>
                        <br />

                        <fieldset>
                          <legend>2nd committee Preference* </legend>
                          <input
                            type="radio"
                            id="unga1"
                            name="mp"
                            value="unga1"
                            checked={formData.mp === "unga1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unga1">
                            UNGA - United Nations General Assembly
                          </label>
                          <br />

                          <input
                            type="radio"
                            id="unitar1"
                            name="mp"
                            value="unitar1"
                            checked={formData.mp === "unitar1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unitar1">
                            UNITAR - United Nations Institute for Training &
                            Research
                          </label>
                          <br />
                          <input
                            type="radio"
                            id="un1"
                            name="mp"
                            value="un1"
                            checked={formData.mp === "un1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="un1">UN Ocean Conference</label>
                          <br />
                          <input
                            type="radio"
                            id="ic1"
                            name="mp"
                            value="ic1"
                            checked={formData.mp === "ic1"}
                            onChange={handleChange}
                          />
                          <label htmlFor="ic1">
                            Indian Cabinet - Ministry of Finance
                          </label>
                          <br />
                        </fieldset>
                        <br />
                        <fieldset>
                          <legend>3rd committee Preference* </legend>
                          <input
                            type="radio"
                            id="unga2"
                            name="dp"
                            value="unga2"
                            checked={formData.dp === "unga2"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unga2">
                            UNGA - United Nations General Assembly
                          </label>
                          <br />

                          <input
                            type="radio"
                            id="unitar2"
                            name="dp"
                            value="unitar2"
                            checked={formData.dp === "unitar2"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unitar2">
                            UNITAR - United Nations Institute for Training &
                            Research
                          </label>
                          <br />
                          <input
                            type="radio"
                            id="un2"
                            name="dp"
                            value="un2"
                            checked={formData.dp === "un2"}
                            onChange={handleChange}
                          />
                          <label htmlFor="un2">UN Ocean Conference</label>
                          <br />
                          <input
                            type="radio"
                            id="ic2"
                            name="dp"
                            value="ic2"
                            checked={formData.dp === "ic2"}
                            onChange={handleChange}
                          />
                          <label htmlFor="ic2">
                            Indian Cabinet - Ministry of Finance
                          </label>
                          <br />
                        </fieldset>
                        <br />

                        <fieldset>
                          <legend>4th committee Preference* </legend>
                          <input
                            type="radio"
                            id="unga3"
                            name="ep"
                            value="unga3"
                            checked={formData.ep === "unga3"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unga3">
                            UNGA - United Nations General Assembly
                          </label>
                          <br />

                          <input
                            type="radio"
                            id="unitar3"
                            name="ep"
                            value="unitar3"
                            checked={formData.ep === "unitar3"}
                            onChange={handleChange}
                          />
                          <label htmlFor="unitar3">
                            UNITAR - United Nations Institute for Training &
                            Research
                          </label>
                          <br />
                          <input
                            type="radio"
                            id="un3"
                            name="ep"
                            value="un3"
                            checked={formData.ep === "un3"}
                            onChange={handleChange}
                          />
                          <label htmlFor="un3">UN Ocean Conference</label>
                          <br />
                          <input
                            type="radio"
                            id="ic3"
                            name="ep"
                            value="ic3"
                            checked={formData.ep === "ic3"}
                            onChange={handleChange}
                          />
                          <label htmlFor="ic3">
                            Indian Cabinet - Ministry of Finance
                          </label>
                          <br />
                        </fieldset>
                        <br />
                        <fieldset>
                          <legend>4th committee Preference* </legend>

<input 
                    type="radio"
                    id="mp"
                    name="mp"
                    value="3rd"
                    checked={formData.mp === "3rd"}
                    onChange={handleChange}
                />
                <label htmlFor="3rd">Yes</label>
                <br />
               <input 
                    type="radio"
                    id="mp"
                    name="mp"
                    value="UN"
                    checked={formData.mp === "UN"}
                    onChange={handleChange}
                />
                <label htmlFor="UN">No</label>
                <br />

</fieldset>
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