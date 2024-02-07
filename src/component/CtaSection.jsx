import React from 'react';
import { MotionAnimate } from 'react-motion-animate'


export function CtaSection() {
    return (
        <section>
         <MotionAnimate animation='fadeInUp'>
            <div className="px-5 h-[500px] lg:flex mx-auto max-w-7xl lg:h-[850px] flex items-center justify-between py-5 sm:px-6 sm:block ">
                <div className="w-full lg:w-4/6">
                    <div className="my-10 lg:my-0">
                        <p className='text-emerald-300 text-lg font-semibold pb-4'>Hi, my name is</p>
                        <h2 className="text-3xl lg:text-6xl font-bold leading-8 text-indigo-100 sm:text-4xl">
                            Hello, I’m <span className='text-emerald-300 font-semibold'>Ajinath Tangade, </span> <br /> Front-end Developer <br /> and Web Developer.
                        </h2>
                        <p className="font-medium mt-4 max-w-xl text-base leading-relaxed text-indigo-100 lg:font-semibold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt eos facilis
                            debitis voluptas iure consectetur odit fugit voluptate recusandae?
                        </p>

                        <form action="#" method="POST" className="mt-8 max-w-xl">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <div className="flex w-full max-w-sm items-center space-x-2">

                                    <button
                                        type="button"
                                        className="rounded-md border border-emerald-300 px-8 py-3 text-base font-semibold text-emerald-300 hover:shadow-lg hover:shadow-cyan-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                    >
                                        Resume
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden w-full lg:w-1/3"></div>
            </div>
            </MotionAnimate>
        </section>
    )
}
