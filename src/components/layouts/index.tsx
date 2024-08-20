'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar';
import MenuBarMobile from './menuBarMobile';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

export default function Layout({ pageTitle, children }:any) {
    // Concatenate page title (if exists) to site title
    let titleConcat = "Responsive Sidebar Example";
    if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

    // Mobile sidebar visibility state
    const [showSidebar, setShowSidebar] = useState(false);
    const [themeSetter, setThemeSetter] = useState(false);

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
                    <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen relative">
                        <div className='absolute ' style={themeSetter? {  right: 'calc(-28px)', top:'60px' }:{right: '10px', top:'60px'}} onClick={openThemeSetter}>
                        <ThemeProvider/>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}