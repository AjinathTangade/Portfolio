import React from 'react'

export function CtaSection() {
    return (
        <section>

            <div className="lg:flex mx-auto max-w-7xl flex items-center justify-between py-5 sm:px-6 sm:block ">
                <div className="w-full lg:w-w-3/5 lg:h-3/4">
                    <div className="my-10 lg:my-0">
                        <p className='text-emerald-300'>Hi, my name is</p>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Hello, I’m Ajinath Tangade, <br/> Front-end Developer and Web Devloper.
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt eos facilis
                            debitis voluptas iure consectetur odit fugit voluptate recusandae?
                        </p>

                        <form action="#" method="POST" className="mt-8 max-w-xl">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <div className="flex w-full max-w-sm items-center space-x-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <button
                                        type="button"
                                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-2/5"></div>
            </div>
        </section>
    )
}
