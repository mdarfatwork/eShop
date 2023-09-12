import React from 'react';
import { logoLight, paymentLogo } from '../assets/index';
import { ImGithub } from 'react-icons/im';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaHome,
} from 'react-icons/fa';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const isSmallDevice = window.innerWidth < 900;

  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div
        className={`max-w-screen-xl mx-auto ${
          isSmallDevice ? 'grid grid-rows-4' : 'grid grid-cols-4'
        }`}
      >
        {/* First Start */}
        <div className="ml-4 md:ml-0 flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logoLight" />
          <a href="https://mdarfat-portfolio.web.app/" target="_blank" rel="noreferrer">
            <p className="text-white text-sm tracking-wide">
              © mdarfat-portfolio.web.app
            </p>
          </a>
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-500">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* Locateus Start */}
        <div className="ml-4 md:ml-0">
          <h2 className="text-2xl font-semibold text-white mb-4">Locate US</h2>
          <div className="text-base flex flex-col gap-2">
            <p>34330, kurla, Mumbai, India</p>
            <p>Mobile: + 91 123 456 7890</p>
            <p>E-mail: eshop@gmail.com</p>
          </div>
        </div>
        {/* Profile Start */}
        <div className="ml-4 md:ml-0">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              {' '}
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              {' '}
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              {' '}
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              {' '}
              help & support
            </p>
          </div>
        </div>
        {/* subscribe Start */}
        <div className="flex flex-col justify-center mx-2 md:mx-0">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="E-mail"
            type="email"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
