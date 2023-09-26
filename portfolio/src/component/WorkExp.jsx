import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


function WorkExp() {
    return (
        <>
            <div className="min-h-screen px-5 mb-24 lg:mx-auto lg:max-w-5xl lg:h-[650px] lg:py-5 sm:px-6 sm:block">
                <h4 className='text-2xl before:w-[220px] before:absolute before:border before:border-slate-100 before:top-4 before:right-0 lg:text-3xl lg:w-4/5 font-bold leading-8 text-indigo-100 relative lg:before:absolute lg:before:w-[420px] lg:before:rounded-md lg:before:border lg:before:border-slate-100 lg:before:right-0 lg:before:top-4'> <span className='text-emerald-300 text-2xl font-semibold pb-4 pr-3 md:text-2xl'>02.</span>Where I’ve Worked</h4>
                <div className="flex flex-col py-8 ">
                    <h3 className='lg:text-lg font-bold leading-8 text-indigo-100 border-l-2 border-[#233554] px-5 py-3'>Company Experiences</h3>
                    <Tabs className="-mx-3 space-y-6 flex border-l-2 border-[#233554]">
                        <TabList className="w-1/6">
                            <Tab className="flex transform px-5 py-3 mb-2 text-indigo-100 text-sm font-medium transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Company</Tab>
                            <Tab className="flex transform px-5 py-3 my-2 text-indigo-100 text-sm font-medium transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <Tab className="flex transform px-5 py-3 my-2 text-indigo-100 text-sm font-medium transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <Tab className="flex transform px-5 py-3 my-2 text-indigo-100 text-sm font-medium transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <h3 className='lg:text-lg font-bold  text-indigo-100'>Education</h3>
                            <Tab className="flex transform px-5 py-3 my-2 text-indigo-100 text-sm font-medium transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                            <Tab className="flex transform px-5 py-3 mt-2 text-indigo-100 text-sm font-medium transition-colors duration-300 hover:bg-[#112240] hover:text-emerald-300 focus:border-l-2  focus:border-emerald-300 focus:text-emerald-300 focus:bg-[#112240]">Title 2</Tab>
                        </TabList>
                        <div className="w-3/5">
                            <TabPanel >
                                <h2 className='text-white'>Any content 1</h2>
                            </TabPanel>
                            <TabPanel >
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