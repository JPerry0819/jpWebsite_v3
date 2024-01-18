import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactMe from './components/pages/account/ContactMe'
import Landing from './components/pages/landing/Landing';
import Home from './components/pages/home/Home'
import { getPost } from './components/pages/Features/postingSlice';
import Messages from './components/pages/MessageBoard/MessageRendering'
import Hidden from './components/pages/Hidden/Hidden';
function App({loggedCustomer, setLoggedCustomer, contactData, setContactData}) {

const [formData, setFormData] = useState({
  
  name: '',
  email:'',
  password:'',
  phone: '',
  company: '',


  
  
}) 

const dispatch = useDispatch();
const { post, isError } = useSelector((state) => state.post)

useEffect(() => {
  if (isError) {
    console.log('App.js Error')
  }

  dispatch(getPost())

}, [dispatch],[isError])


  return (
    <div className="App">

     
     <BrowserRouter>
     
     <Routes>
       
      <Route path='/' element={<Landing 
      formData={formData} 
      setFormData={setFormData} 
      />} />

      <Route path='/home' element={<Home 
      formData={formData} 
      setFormData={setFormData} 
      loggedCustomer={loggedCustomer} 
      setLoggedCustomer={setLoggedCustomer} 
      />} />
     
    <Route path='/contact' element={<ContactMe 
    contactData={contactData} 
    setContactData={setContactData} 
    /> } />

   <Route path='/message' element={<Messages /> }/>
<Route path='/hidden' element={<Hidden /> } /> 



     </Routes>
     
  
     
     
     
     </BrowserRouter>
    </div>
    
  );
}

export default App;
