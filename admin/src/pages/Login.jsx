import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline } from "react-icons/io5"
import { IoEye } from "react-icons/io5"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {
  let [show, setShow] = useState(false)
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let { serverUrl } = useContext(authDataContext)
  let { adminData, getAdmin } = useContext(adminDataContext)
  let navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const AdminLogin = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const result = await axios.post(
        serverUrl + '/api/auth/adminlogin',
        { email, password },
        { withCredentials: true }
      )
      console.log(result.data)
      toast.success("Admin Login Successfully")
      getAdmin()
      navigate("/")
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error("Admin Login Failed")
      setLoading(false)
    }
  }

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
      
      {/* Top Brand */}
      <div
        className='w-[100%] h-[80px] flex items-center justify-start px-[20px] md:px-[30px] gap-[10px] cursor-pointer'
        onClick={() => navigate("/")}
      >
        <img className='w-[40px]' src={logo} alt="" />
        <h1 className='text-[22px] font-sans'>bearandbond</h1>
      </div>

      {/* Heading */}
      <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px] px-[10px]'>
        <span className='text-[22px] md:text-[25px] font-semibold text-center'>Login Page</span>
        <span className='text-[14px] md:text-[16px] text-center'>
          Welcome to bearandbond, Apply to Admin Login
        </span>
      </div>

      {/* Box */}
      <div className='max-w-[600px] w-[92%] md:w-[90%] min-h-[420px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center mb-6'>
        
        <form onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-center gap-[18px] py-4'>

          <input
            type="text"
            className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold'
            placeholder='Email'
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          {/* Password with fixed eye icon */}
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

          <button
            className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[10px] text-[17px] font-semibold'
            disabled={loading}
          >
            {loading ? "Please wait..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
