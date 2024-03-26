// SignUp.js

import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './SignUp.css';
import Validation from './SignUpValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validation(formData);
    setErrors(validationErrors);

    // Check if there are no validation errors before submitting
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8086/signup', formData)
        .then(res => {
          navigate('../login');
          alert("Register successful!");
        })
        .catch(err => console.error('Error submitting form:', err));
    } else {
      console.log('Form contains validation errors. Please correct them.');
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5 greyo redis' >
        <MDBCardBody className='px-5' >
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput
            wrapperClass='mb-4'
            label='Your Name'
            size='lg'
            id='form1'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className='text-danger'>{errors.name}</div>}
          <MDBInput
            wrapperClass='mb-4'
            label='Your Email'
            size='lg'
            id='form2'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className='text-danger'>{errors.email}</div>}
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            size='lg'
            id='form3'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <div className='text-danger'>{errors.password}</div>}
          <MDBInput
            wrapperClass='mb-4'
            label='Repeat your password'
            size='lg'
            id='form4'
            type='password'
            name='passwordRepeat'
            value={formData.passwordRepeat}
            onChange={handleInputChange}
          />
          {errors.passwordRepeat && <div className='text-danger'>{errors.passwordRepeat}</div>}
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
