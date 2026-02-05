import React from 'react'
import Logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import google from '../assets/google.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from 'react';
import { useContext } from 'react';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { userDataContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';

function Registration() {
  let [show, setShow] = useState(false)
  let { serverUrl } = useContext(authDataContext)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let { userdata, getCurrentUser } = useContext(userDataContext)
  let [loading, setLoading] = useState(false)

  let navigate = useNavigate()

  const handleSignup = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const result = await axios.post(serverUrl + '/api/auth/registration', {
        name, email, password
      }, { withCredentials: true })
      getCurrentUser()
      navigate("/")
      toast.success("User Registration Successful")
      console.log(result.data)
      setLoading(false)

    } catch (error) {
      console.log(error)
      toast.error("User Registration Failed")
      setLoading(false)
    }
  }

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      let user = response.user
      let name = user.displayName;
      let email = user.email

      const result = await axios.post(serverUrl + "/api/auth/googlelogin", { name, email }, { withCredentials: true })
      console.log(result.data)
      getCurrentUser()
      navigate("/")
      toast.success("User Registration Successful")

    } catch (error) {
      console.log(error)
      toast.error("User Registration Failed")
    }
  }

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
      <div className='w-[100%] h-[80px] flex items-center justify-start px-[20px] md:px-[30px] gap-[10px] cursor-pointer'
        onClick={() => navigate("/")}>
        <img className='w-[40px]' src={Logo} alt="" />
        <h1 className='text-[22px] font-sans '>bearandbond</h1>
      </div>

      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px] px-[10px]'>
        <span className='text-[22px] md:text-[25px] font-semibold text-center'>Registration Page</span>
        <span className='text-[14px] md:text-[16px] text-center'>Welcome to bearandbond, Place your order</span>
      </div>

      {/* ✅ mobile friendly height */}
      <div className='max-w-[600px] w-[92%] md:w-[90%] min-h-[520px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center mb-6'>
        <form onSubmit={handleSignup} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[18px] py-4'>

          {/* ✅ Inputs First */}
          <div className='w-[100%] flex flex-col items-center justify-center gap-[15px] relative'>

            <input
              type="text"
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
              placeholder='UserName'
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <input
              type="text"
              className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            {/* ✅ Password with better eye icon position */}
            <div className="w-[100%] relative">
              <input
                type={show ? "text" : "password"}
                className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] pr-[45px] font-semibold'
                placeholder='Password'
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              {!show && (
                <IoEyeOutline
                  className='w-[20px] h-[20px] cursor-pointer absolute right-[15px] top-1/2 -translate-y-1/2'
                  onClick={() => setShow(prev => !prev)}
                />
              )}

              {show && (
                <IoEye
                  className='w-[20px] h-[20px] cursor-pointer absolute right-[15px] top-1/2 -translate-y-1/2'
                  onClick={() => setShow(prev => !prev)}
                />
              )}
            </div>

            <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[10px] text-[17px] font-semibold'>
              {loading ? <Loading /> : "Create Account"}
            </button>

            <p className='flex gap-[10px] text-center flex-wrap justify-center'>
              You have any account?
              <span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={() => navigate("/login")}>
                Login
              </span>
            </p>
          </div>

          {/* ✅ Google Option moved to Bottom */}
          <div className='w-[100%] mt-2'>
            <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px] mb-3'>
              <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
              OR
              <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
            </div>

            <div
              className='w-[100%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'
              onClick={googleSignup}
            >
              <img src={google} alt="" className='w-[20px]' />
              Registration with Google
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Registration
