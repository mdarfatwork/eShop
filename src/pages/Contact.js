// import React,  {useState} from 'react'

// const Contact = () => {
//   const [userData, setUserData ]= useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   let name, value;
//   const postUserData = (e) =>{
//     name = e.target.name;
//     value = e.target.value;

//     setUserData({...userData, [name]:value})
//   }
//   const submitData = async (e)=>{
//     e.preventDefault();
//     const { name, email, message } = userData;
//     const res = fetch('https://eshoparfat-default-rtdb.firebaseio.com/ContactForm.json', {
//       method: "POST",
//       Headers: {
//         "Content-Type" : "application/json"
//       },
//       body:JSON.stringify({
//         name,
//         email,
//         message
//       })
//     }
//     );
//     if (res) {
//       alert("Data Stored");
//     }else {
//       alert("please fill the data")
//     }
//   }
//   return (
//     <div className='w-[80vw] md:w-[60vw] mx-auto my-10'>
//       <form method="POST">
//       <div className="flex flex-col w-full md:w-[80%] mx-auto my-4 gap-y-3">
//         <h1 className='text-4xl font-semibold mb-5'>Contact us</h1>
//         <p>Name</p>
//         <input name='name' placeholder='Your Name' className='border-2 p-3 rounded-md' type="name" value={userData.name} onChange={postUserData} />
//         <p>Email</p>
//         <input name='email' placeholder='Your Email' className='border-2 p-3 rounded-md' type="email" value={userData.email} onChange={postUserData} />
//         <p>Message</p>
//         <textarea placeholder='Your Message' className='border-2 p-3 rounded-md' name="message" cols="20" rows="10" value={userData.message} onChange={postUserData}></textarea>
//         <button onClikc={submitData} type='submit' className='bg-gray-100 hover:bg-gray-300 py-4 rounded-md active:bg-black active:text-white'>Submit</button>
//       </div>
//       </form>
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const postUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;

    if(name && email && message){
    const res = await fetch('https://eshoparfat-default-rtdb.firebaseio.com/ContactForm.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });

    if (res.ok) {
      setUserData({
        name: "",
        email: "",
        message: "",
      })
      // alert("Data Stored");
    } else {
      alert("Please fill data");
    }
  } else {
    alert("Please fill data");
  }
  };

  return (
    <div className='w-[80vw] md:w-[60vw] mx-auto my-10'>
      <form onSubmit={submitData}>
        <div className="flex flex-col w-full md:w-[80%] mx-auto my-4 gap-y-3">
          <h1 className='text-4xl font-semibold mb-5'>Contact us</h1>
          <p>Name</p>
          <input name='name' placeholder='Your Name' className='border-2 p-3 rounded-md' type="name" value={userData.name} onChange={postUserData} />
          <p>Email</p>
          <input name='email' placeholder='Your Email' className='border-2 p-3 rounded-md' type="email" value={userData.email} onChange={postUserData} />
          <p>Message</p>
          <textarea placeholder='Your Message' className='border-2 p-3 rounded-md' name="message" cols="20" rows="10" value={userData.message} onChange={postUserData}></textarea>
          <button type='submit' className='bg-gray-100 hover:bg-gray-300 py-4 rounded-md active:bg-black active:text-white'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
