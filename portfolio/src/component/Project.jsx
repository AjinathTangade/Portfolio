import React from "react";


function Project() {

    return (
        <>
            <div className="min-h-screen px-5 mb-24 lg:mx-auto lg:max-w-6xl lg:min-h-min lg:py-5 sm:px-6 sm:block">
                <h4 className='text-2xl before:w-[70px] before:absolute before:border before:border-[#233554] before:top-4 before:right-0 lg:text-3xl lg:w-4/5 font-bold leading-8 text-indigo-100 relative lg:before:absolute lg:before:w-[380px] lg:before:rounded-md lg:before:border lg:before:border-[#233554] lg:before:right-0 lg:before:top-4'> <span className='text-emerald-300 text-2xl font-semibold pb-4 pr-3 md:text-2xl'>03.</span>Some Things I’ve Built</h4>
                <div className="block lg:flex mt-16">
                    <div className="">
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="project_img" />
                    </div>
                    <div className="text-right">
                        <p className="text-emerald-300 mt-5">Featured Project</p>
                        <h3 className='text-2xl font-bold text-indigo-100 hover:text-emerald-300 mt-1'>Education</h3>
                        <div className="my-6">
                            <p className="text-indigo-100 bg-[#112240] p-5 rounded-md lg:-ml-16">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        </div>
                        <div className="mt-4">
                            <span className="mb-2 mr-2 inline-block px-3 py-1 text-sm font-semibold text-indigo-100">
                                #Macbook
                            </span>
                            <span className="mb-2 mr-2 inline-block px-3 py-1 text-sm font-semibold text-indigo-100">
                                #Apple
                            </span>
                            <span className="mb-2 inline-block pl-3 py-1 text-sm font-semibold text-indigo-100">
                                #Laptop
                            </span>
                        </div>
                        <div className="flex gap-5 justify-end mt-3">
                            <a href="#" className="hover:bg-emerald-300"><img src="/src/assets/github.svg" alt="git_img" className="h-5 w-5 object-cover " /></a>
                            <a href="#"> <img src="/src/assets/external-link.svg" alt="external_link" className="h-5 w-5 object-cover text-[#8892b0]" /></a>
                        </div>
                    </div>
                </div>

                <div className="block lg:flex mt-20">
                    <div className="text-left z-10">
                        <span className="text-emerald-300">Featured Project</span>
                        <h3 className='text-2xl font-bold text-indigo-100 hover:text-emerald-300 mt-1'>Education</h3>
                        <div className="my-6">
                            <p className="text-indigo-100 bg-[#112240] p-5 rounded-md lg:-mr-16 z-10">A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                        </div>
                        <div className="mt-4">
                            <span className="mb-2  inline-block pr-3 py-1 text-sm font-semibold text-indigo-100">
                                #Macbook
                            </span>
                            <span className="mb-2 mr-2 inline-block px-3 py-1 text-sm font-semibold text-indigo-100">
                                #Apple
                            </span>
                            <span className="mb-2 inline-block pl-3 py-1 text-sm font-semibold text-indigo-100">
                                #Laptop
                            </span>
                        </div>
                        <div className="flex gap-5 justify-start mt-3 mb-3">
                            <a href="#" className="hover:bg-emerald-300"><img src="/src/assets/github.svg" alt="git_img" className="h-5 w-5 object-cover " /></a>
                            <a href="#"> <img src="/src/assets/external-link.svg" alt="external_link" className="h-5 w-5 object-cover text-[#8892b0]" /></a>
                        </div>
                    </div>
                    <div className="">
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="project_img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;