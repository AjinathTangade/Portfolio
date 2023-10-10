import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



function WorkExp() {
    return (
        <>
            <div className="px-5 mb-24 lg:mx-auto lg:max-w-3xl lg:h-[510px] lg:py-5 sm:px-6 sm:block">
                <h4 className='text-2xl before:w-[100px] before:absolute before:border before:border-[#233554] before:top-4 before:right-0 lg:text-3xl font-bold leading-8 text-indigo-100 relative lg:before:absolute lg:before:w-[350px] lg:before:rounded-md lg:before:border lg:before:border-[#233554] lg:before:right-0 lg:before:top-4'> <span className='text-emerald-300 text-2xl font-semibold pb-4 pr-3 md:text-2xl'>02.</span>Where I’ve Worked</h4>
                <div className="flex flex-col py-8 ">
                    <Tabs className=" space-x-20 space-y-14 lg:space-y-14 lg:space-x-10 flex border-l-2 border-[#233554]">
                        <TabList className="w-1/6">
                            <h3 className='lg:text-lg font-bold w-[230px] text-indigo-100 px-5 pb-3 border-b border-emerald-300'>Company Experiences</h3>
                            <Tab className="flex transform px-5 py-3 mb-2 outline-none text-indigo-100 text-sm font-medium w-32 transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Company</Tab>
                            <Tab className="flex transform px-5 py-3 my-2 outline-none text-indigo-100 text-sm font-medium w-32 transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <Tab className="flex transform px-5 py-3 my-2 outline-none text-indigo-100 text-sm font-medium w-32 transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <Tab className="flex transform px-5 py-3 my-2 outline-none text-indigo-100 text-sm font-medium w-32 transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <h3 className='lg:text-lg font-bold w-[230px] text-indigo-100 px-5 pb-3 border-b border-emerald-300'>Education</h3>
                            <Tab className="flex transform px-5 py-3 my-2 outline-none text-indigo-100 text-sm font-medium w-32 transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <Tab className="flex transform px-5 py-3 mt-2 outline-none text-indigo-100 text-sm font-medium w-32 transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                        </TabList>
                        <div className="">
                            <TabPanel className="ml-5">
                                <h2 className='text-white'>Any content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quae magnam. Distinctio unde, voluptatum maxime cumque voluptatem iste optio sunt. </h2>
                                <h2 className='text-white'>Any content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quae magnam. Distinctio unde, voluptatum maxime cumque voluptatem iste optio sunt. </h2>
                                <h2 className='text-white'>Any content 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quae magnam. Distinctio unde, voluptatum maxime cumque voluptatem iste optio sunt. </h2>
                                <h2 className='text-white'>Any content 1 teakeir  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quae magnam. Distinctio unde, voluptatum maxime cumque voluptatem iste optio sunt. </h2>
                            </TabPanel>
                            <TabPanel>
                                <h2 className='text-white'>Any content 8</h2>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default WorkExp