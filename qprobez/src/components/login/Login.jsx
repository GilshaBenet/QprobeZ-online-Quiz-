import React from 'react';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Login() {
  return (
    <div
    style={{
          
      
     
    }}
  >
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" class="container h-100" >
    <div style={{display:'flex',alignItems:'center',justifyContent:'center', paddingTop:'30vh'}}/>
   
      <img
        //src='https://mdbootstrap.com/img/new/standard/city/041.webp'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8QPG8q2TtOrDOUiPjJEAD8ofrnLIabZ2Zw&usqp=CAU'
        className='img-thumbnail'
        alt='...'
        margin-bottom={'500px'}
        style={
          {
            position:'absolute',
            inset:'0',
            width:'100vw',
            height:'100vh',
            zIndex:'-100'                                                
          }
        }
      />
   
    

   
      <MDBInput wrapperClass='mb-4'  label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>

      </div>

    </MDBContainer>
    </div>
  );
}

export default Login;