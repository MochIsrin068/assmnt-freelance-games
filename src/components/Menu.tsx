import React from 'react'
import Logo from '../assets/brand_logo.svg'
import LogoYoutube from '../assets/logo-youtube.svg'
import LogoWhatsapp from '../assets/logo-whatsapp.svg'
import LogoTwitter from '../assets/logo-twitter.svg'
import LogoInstagram from '../assets/logo-instagram.svg'

export default function Menu() {
  return (
    <>
        <div className='flex items-center justify-between py-[17px] px-[156px]'>
            <img src={Logo} alt="Logo" />
            <div className='flex items-center justify-end'>   
                <img src={LogoYoutube} alt="Youtube" className='ml-3 cursor-pointer'/>
                <img src={LogoWhatsapp} alt="Whatsapp" className='ml-3 cursor-pointer'/>
                <img src={LogoTwitter} alt="Twitter" className='ml-3 cursor-pointer'/>
                <img src={LogoInstagram} alt="InstagLogoInstagram" className='ml-3 cursor-pointer'/>
            </div>
        </div>
    </>
  )
}
