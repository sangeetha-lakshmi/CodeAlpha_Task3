import React from 'react'
import Navbar from '../componets/Navbar'
import Heroimg2 from '../componets/HeroImg2';
import Footer from '../componets/Footer';
import Form from '../componets/Form';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Let's have a chat"/>
      <Form/>
    <Footer/>
    </div>
  )
}

export default Contact
