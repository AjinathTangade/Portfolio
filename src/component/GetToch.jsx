import React from 'react';
import { MotionAnimate } from 'react-motion-animate';
function GetToch() {
    return (
        <>
        <MotionAnimate
        animation='fadeInUp'
        reset={true}
        distance={200}
        delay={1}
        speed={2}>
            <div className="w-full px-5 mb-24 lg:mx-auto lg:max-w-6xl lg:min-h-min lg:py-5 sm:px-6 sm:block">
                <p className='text-emerald-300 text-center pb-4'>04. What’s Next?</p>
                <h4 className='text-3xl text-center lg:text-3xl font-bold leading-8 text-indigo-100 '>Get In Touch</h4>
                <div className='flex justify-center'>
                    <p className="text-indigo-100 p-5 rounded-md text-center w-full lg:w-3/5">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    
                </div>
                <div className='flex justify-center'>
                <button
                        type="button"
                        className="rounded-md border border-emerald-300 px-8 py-3 text-base font-semibold text-emerald-300 hover:shadow-lg hover:shadow-cyan-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                        Say Hello
                    </button>
                </div>              
            </div>
            </MotionAnimate>
        </>
    )
}

export default GetToch;