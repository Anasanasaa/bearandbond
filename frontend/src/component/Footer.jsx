import React from 'react'
import logo from "../assets/logo.png"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"

function Footer() {

  // ✅ Change this number to your WhatsApp number (with country code, no + sign)
  const whatsappNumber = "919103306625"

  // ✅ Default message (you can change anytime)
  const whatsappMessage =
    "Hello BearAndBond 👋 I want Custom Embroidery work. Please share designs, pricing & delivery details."

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  // ✅ Change these links to your actual accounts
  const instagramLink = "https://instagram.com/bearandbond"
  const facebookLink = "https://facebook.com/bearandbond"

  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px] relative'>

      {/* ✅ WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[95px] md:bottom-[25px] right-[18px] z-[9999]
        bg-[#25D366] hover:brightness-110 text-white
        w-[52px] h-[52px] rounded-full shadow-xl
        flex items-center justify-center transition-all"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      <div className='w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px]'>
        {/* Left */}
        <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]'>
          <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
            <img src={logo} alt="BearAndBond Logo" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
            <p className='text-[19px] md:text-[20px] text-[black]'>bearandbond</p>
          </div>

          <p className='text-[15px] text-[#1e2223] hidden md:block'>
            BearAndBond is your all-in-one embroidery destination, offering premium-quality designs,
            elegant stitching, and fast delivery—backed by trusted craftsmanship to make your outfits
            look better every day.
          </p>

          <p className='text-[15px] text-[#1e2223] flex md:hidden'>
            Premium. Custom. Reliable. BearAndBond Embroidery
          </p>

          {/* ✅ Social Icons */}
          <div className="hidden md:flex items-center gap-3 mt-2">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/60 hover:bg-white flex items-center justify-center transition-all shadow"
              title="Instagram"
            >
              <FaInstagram size={18} className="text-[#1e2223]" />
            </a>

            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/60 hover:bg-white flex items-center justify-center transition-all shadow"
              title="Facebook"
            >
              <FaFacebook size={18} className="text-[#1e2223]" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
          <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
            <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>COMPANY</p>
          </div>
          <ul>
            <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Home</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>About us</li>
            <li className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'>Delivery</li>
            <li className='text-[15px] text-[#1e2223] cursor-pointer'>Privacy Policy</li>
          </ul>

          {/* ✅ Social icons small (mobile) */}
          <div className="flex md:hidden items-center justify-center gap-3 mt-2">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center shadow"
              title="Instagram"
            >
              <FaInstagram size={16} className="text-[#1e2223]" />
            </a>

            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center shadow"
              title="Facebook"
            >
              <FaFacebook size={16} className="text-[#1e2223]" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className='md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center'>
          <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
            <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>GET IN TOUCH</p>
          </div>

          <ul>
            <li className='text-[15px] text-[#1e2223]'>+91-9103306625</li>
            <li className='text-[15px] text-[#1e2223]'>contact@bearandbondmgmt.com</li>

            <li className='text-[15px] text-[#1e2223] hidden md:block'>+91-910-330-6625</li>
            <li className='text-[15px] text-[#1e2223] hidden md:block'>bearandbondmgmt.com</li>
          </ul>

          {/* ✅ WhatsApp direct link */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block mt-3 bg-[#25D366] text-white px-4 py-2 rounded-full font-semibold text-sm shadow hover:brightness-110 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className='w-[100%] h-[1px] bg-slate-400'></div>

      <div className='w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center text-sm text-[#1e2223]'>
        bearandbond.com - All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
