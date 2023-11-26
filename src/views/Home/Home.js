import React, { useState } from 'react'
import "./Home.css"
import i18 from "../../util/i18.js"
function Home() {    
  return (
    <div>
        <div className='container'>
            <h1 className='login-title'>Login</h1>
            <select  className='select-lang'
            value={localStorage.getItem("lang")}
            onChange={(e)=>{
                localStorage.setItem("lang",e.target.value)
                window.location.reload();
            }}>
                <option>Select language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Marathi</option>
            </select>
            <span className='username'>{i18("username")} :
            <input className='input-box'/></span>
            <span className='username'> {i18("password")}  :
            <input className='input-box'/></span>
            <span className='remember'><input className='check' type='checkbox'/> {i18("remember")} </span>
            <button type='button' className='btn'>{i18("login")} </button>
            <p className='create'>{i18("create")} </p>
        </div>
    </div>
  )
}

export default Home