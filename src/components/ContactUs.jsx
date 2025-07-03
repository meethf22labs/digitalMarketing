import React from 'react'
import ContactUsSideImage from "../assets/contactUsSideImg.png";

const ContactUs = () => {
  return (
    <div className='m-16 pl-8 py-10'>

        <section className='flex gap-10 mb-12'>
            <button className=' bg-[#B9FF66] text-4xl font-normal tracking-wide p-2 rounded-lg'>Contact Us</button>
            <p className=' font-normal text-lg'>Connect with Us: Let's Discuss Your <br/>Digital Marketing Needs</p>
        </section>

        <section className='bg-[#F3F3F3] flex'>
            {/* <form className=' flex flex-col' action='https://formspree.io/f/xjvowzqg' method='POST'> */}
            <form className=' flex flex-col' action='https://formspree.io/f/xjvowzqg' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='name' id='name'/>

                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='email' id='email'/>

                <label htmlFor='message'>Message</label>
                <input type='text' placeholder='Message' id='message'/>

                <button type='submit' className=' bg-black text-white p-3 rounded-lg'>Send Message</button>
            </form>

            <img src={ContactUsSideImage} alt='Contact Us'/>
        </section>

    </div>
  )
}

export default ContactUs