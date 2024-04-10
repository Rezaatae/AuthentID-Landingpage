"use client"

import React, { useState } from 'react'

export default function HeroSection(){
    const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
    const [message, setMessage] = useState('IDLE')
    const [error, setError] = useState('')

    async function subscribe(){
      const email = document.getElementById("hero-email-input-field").value
      const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      setMessage("LOADING")
      setError('')
      if(!email){
        setMessage('ERROR')
        setError("Please provide an email address")
        return
      }
      if(!isValidEmail){
        setMessage('ERROR')
        setError("Please provide a valid email address")
        return
      }
      try{
        const response = await fetch('/api/newsletter', {
          body: JSON.stringify({email: email}),
          headers: {'Content-Type': 'application/json; charset=utf-8'},
          method: 'POST',
        });
        const json_res = await response.json();
        setMessage("SUCCESS")
      } catch(e){
        setMessage("ERROR")
        setError(e.response.data.error)
      }
    };

  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Verify for your peace of mind</h1>
      <p className="mb-8 leading-relaxed">With secure and reliable infrastructure providing instant identity verification for free, you can say goodbye to uncertainty and take control of your peace of mind.</p>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <label className="leading-7 text-sm text-gray-600">Email:</label>
          <input type="text" id="hero-email-input-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button onClick={subscribe} className={`inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
            message === "LOADING" ? "button-gradient-loading" : ""
        }`} style={{backgroundColor: "#00bf63"}}
        type='button'
        disabled={message === "LOADING"}
        >Subscribe</button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Register your interest to find out more!</p>
      {message === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{error}</p>
      )}
      {message === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="undraw_hero_img.svg" />
    </div>
  </div>
</section>
  )
}
