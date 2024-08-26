'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar';
import MenuBarMobile from './menuBarMobile';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import Image from 'next/image';
import bgimg1 from '../../../public/bgimg1.png'
import bgimg2 from '../../../public/bgimg2.png'
import bgimg3 from '../../../public/bgimg3.png'
import bgimg4 from '../../../public/bgimg4.png'
import bgimg5 from '../../../public/bgimg5.png'

export default function Layout({ pageTitle, children }:any) {
    // Concatenate page title (if exists) to site title
    let titleConcat = "Responsive Sidebar Example";
    if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

    // Mobile sidebar visibility state
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [themeSetter, setThemeSetter] = useState<boolean>(false);

    const openThemeSetter = ()=>{
        setThemeSetter(!themeSetter)
    }

    return (
        <>
            <Head>
                <title>{titleConcat}</title>
            </Head>
            <div className="min-h-screen ">
            <div className="flex">
                    <MenuBarMobile setter={setShowSidebar} />
                    <Sidebar show={showSidebar} setter={setShowSidebar} />
                    <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen relative mainbgsetter " >
                        <Image src={bgimg3} alt='*' className='opacity-5 absolute z-10 w-[100%] h-[100%]'/> 
                        <Image src={bgimg4} alt='*' className='opacity-5 absolute z-10 w-[30%] h-[30%] top-32 right-4'/> 
                        <Image src={bgimg5} alt='*' className='opacity-5 absolute z-10 w-[30%] h-[30%] bottom-20 left-5'/> 
                        <div className='fixed z-20' style={!themeSetter? {  right: 'calc(-50px)', top:'60px' }:{right: '10px', top:'60px'}} onClick={openThemeSetter}>
                        <ThemeProvider showIcon={themeSetter}/>
                        </div>
                        <div className='mt-[80px] md:mt-0'>
                        {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}