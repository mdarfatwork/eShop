import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartImg, logoDark, account } from '../assets/index'

const Header = () => {
  const userInfo = useSelector((state)=> state.store.userInfo)
  const productData = useSelector((state) => state.store.productData)
  // console.log(userInfo)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
          <Link to="/">
            <div>
              <img className='w-28' src={logoDark} alt="" />
            </div>
          </Link>
          <div className='flex items-center gap-8'>
          {windowWidth >= 768 && (
            <ul className='flex items-center gap-8'>
              <Link to="/">
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
              </Link>
              <Link to="/about">
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>About</li>
              </Link> 
              <Link to="/contact">
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Contact</li>
              </Link>
              <Link to="/blog">
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
              </Link>
            </ul>
          )}
            <Link to="/cart">
            <div className='relative'>
              <img className='w-6' src={cartImg} alt="cartImg" />
              <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{productData.length}</span>
            </div>
            </Link>
            <Link to="/login">
            <img className='w-8 h-8 rounded-full' src={userInfo? userInfo.image : account} alt="userLogo" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header