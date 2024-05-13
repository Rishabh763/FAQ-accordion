import React, { useState } from 'react'
import './index.css'

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


  const [selected,setSelected] = useState(null);

  function handleSingleAccordion(getCurrent){
    setSelected(getCurrent === selected ? null : getCurrent)

  }

  return (
    <div className='content-grid min-h-screen'>
      <header className='h-48 full-width'>
        
      </header>
      <div className='relative -top-32 flex flex-col items-center bg-black mx-auto p-6 md:p-12 rounded-lg h-fit place-content-start'>
        <h1>FAQs</h1>
        <div className='max-w-[400px]'>
          {
          data.map((item) => 
           (
             <div className="flex flex-col mb-6" key={item.id} >
               <div className='flex items-center justify-between gap-4 mb-3 cursor-pointer' onClick={() => handleSingleAccordion(item.id)}>
                 <div className={`${selected === item.id ? "text-purple-600" : "text-white"} hover:text-purple-700 transition-colors`}>
                  {item.question}
                 </div>
                 <span className='text-3xl'>
                  {
                  selected === item.id ? 
                  <div>
                    -
                  </div> : 
                  <div>
                    +
                  </div>
                 }
                 </span>
               </div>
                 {
                  selected === item.id ?
                  <div className='opacity-50'>
                    {item.answer}
                  </div> : null
                 }
             </div>
             
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
