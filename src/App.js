import React, { useState } from 'react'
import './index.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

function App() {
  const data = [
    {
      id: 1,
      question : "What is Frontend Mentor, and how will it help me?",
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."

    },
    {
      id: 2,
      question : "Is Frontend Mentor free?",
      answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."

    },
    {
      id: 3,
      question : "Can I use Frontend Mentor projects in my portfolio?",
      answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"

    },
    {
      id: 4,
      question : "What is Frontend Mentor, and how will it help me?",
      answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    },
  ]


  const [selected,setSelected] = useState(1);

  function handleSingleAccordion(getCurrent){
    setSelected(getCurrent === selected ? null : getCurrent)

  }

  return (
    <div className='content-grid min-h-screen'>
      <header className='h-48 full-width'>
        
      </header>
      <div className='relative max-w-[550px] -top-32 flex flex-col  gap-4 bg-white mx-auto p-6 sm:p-12 rounded-lg h-fit'>
        <h1 className='text-5xl font-bold mb-4'>
            <img src='/assets/icon-star.svg' alt="star" className='inline-block mr-4'/>
            FAQs
          </h1>
          {
          data.map((item) => 
           (
             <div className="w-full  flex flex-col mb-2  font-semibold" key={item.id} >
               <div className='text-pretty flex items-center justify-between gap-2 md:gap-6 cursor-pointer' onClick={() => handleSingleAccordion(item.id)}>
                 <div className={`hover:text-purple-800 transition-colors`}>
                  {item.question}
                 </div>
                 <span className='text-2xl '>
                  {
                  selected === item.id ? 
                  <FaCircleMinus className='text-black'/> :
                  <FaCirclePlus className=' text-purple-800'  />
                 }
                 </span>
               </div>
                 <div   className={`transition-all ease-in-out duration-700 overflow-hidden ${
                   selected === item.id ? 'max-h-64' : 'max-h-0'
                 }`}
                 >
                    <div className='text-grayish-purple font-normal mr-6'>
                      {item.answer}
                    </div> 
                   
                 </div>
             </div>
             
          ))
          }
      </div>
    </div>
  )
}

export default App

