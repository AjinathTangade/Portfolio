import React from 'react'

function AboutUs() {
  return (
    <>
      <div className="mx-auto max-w-5xl h-[700px] py-5 sm:px-6 sm:block ">
        <h4 className='lg:text-3xl font-bold leading-8 text-indigo-100'> <span className='text-emerald-300 text-2xl font-semibold pb-4 pr-3'>01.</span>About Me</h4>
        <div className=' flex items-center justify-between'>
          <div className="w-full lg:w-3/5">
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
  <ul className='flex font-medium mt-4 max-w-xl text-sm	leading-relaxed text-indigo-100'>
    <div>
    
    <li className="before:content-['▹'] before:text-emerald-300 block text-sm font-medium text-slate-700">JavaScript (ES6+)</li>
    <li>React</li>
    <li>Node.js</li>
    </div>
    <div>
    <li>TypeScript</li>
    <li>Eleventy</li>
    <li>WordPress</li>
    <li>WordPress</li>

    </div>
    
  </ul>
</div>

          </div>
          <div className="w-full lg:w-2/5">
            

          </div>
        </div>
      </div>
    </>
  )
}


export default AboutUs