import React from 'react';

import Pro from "../assets/pro.jpg";
const menuItems = [
  {
    text: 'JavaScript (ES6+)',
  },
  {
    text: 'React',
  },
  {
    text: 'Node.js',
  },
  {
    text: 'TypeScript',
  },
  {
    text: 'Eleventy',
  },
  {
    text: 'WordPress',
  },
]
function AboutUs() {
  return (
    <>
      <div className="mx-auto max-w-5xl h-[700px] py-5 sm:px-6 sm:block ">
        <h4 className='lg:text-3xl font-bold leading-8 text-indigo-100'> <span className='text-emerald-300 text-2xl font-semibold pb-4 pr-3'>01.</span>About Me</h4>
        <div className=' flex justify-between'>
          <div className="w-full lg:w-3/5 pr-8">
            <p className="font-medium mt-4 max-w-xl text-base leading-relaxed text-indigo-100 lg:font-semibold">
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="font-medium mt-4 max-w-xl text-base leading-relaxed text-indigo-100 lg:font-semibold">
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p className="font-medium mt-4 max-w-xl text-base leading-relaxed text-indigo-100 lg:font-semibold">
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            <p className="font-medium mt-4 max-w-xl text-base leading-relaxed text-indigo-100 lg:font-semibold">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className=''>
              <ul className='flex flex-wrap font-medium mt-4 w-4/5 text-sm	leading-relaxed text-indigo-100'>
                {menuItems.map((item) => (
                  <li key={item.text} className="text-indigo-100 before:content-['▹'] before:text-emerald-300 block text-sm font-medium w-2/5 py-1">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-start align-top mt-5">
            <div className="z-10 relative  before:absolute before:inset-5 before:h-[390px] before:w-[310px] before:rounded-md before:-rotate-5 before:border-2 before:z-[-1] before:border-emerald-300
            before:transform before:translate-x-1 before:hover:translate-x-0 before:duration-500 before:ease-in-out after:absolute after:-inset-0.5 after:-rotate-5 after:bg-teal-500 after:rounded-lg after:top-[3px] after:opacity-50 after:h-[91%] after:w-[81%] after:hover:hidden">
              <img src={Pro} alt="profile" className="w-4/5 z-10 rounded-md transform translate-y-1 hover:translate-y-0 duration-500 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default AboutUs;