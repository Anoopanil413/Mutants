'use client'
import Link from 'next/link';
import React from 'react'
import logo from '../../../public/actuallogo.png'
import { BsEnvelopeAt, BsInfoSquare } from 'react-icons/bs';
import { FaRedhat, FaTshirt } from 'react-icons/fa';
import { SlHome } from 'react-icons/sl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import lightlogo from '../../../public/lightlogo.png'
import { useTheme } from 'next-themes';

const Sidebar = ({ show, setter }:any) => {

    const pathname = usePathname()
     const {theme}= useTheme()

    const className = " w-auto sm:min-w-[200px] md:min-w-[300px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-200px] md:ml-0";

    


    const MenuItem = ({ icon, name, route }:any) => {
        const colorClass = pathname === route ? "text-white bg-custom-primarylight/5 dark:bg-custom-primarydark/5" : "text-white/50 hover:text-white hover:font-thin";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter((oldVal:any) => !oldVal);
                }}
                className={`flex gap-2 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-custom-primarylight/30 dark:border-custom-primarydark/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div  className='dark:text-custom-primarydark text-custom-primarylight '>{name}</div>
            </Link>
        )
    }


    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0  z-30`}
            onClick={() => {
                setter((oldVal:any) => !oldVal);
            }}
        />
    )


  return (
    <>
    <div className={`${className}${appendClass} bg-black md:bg-inherit border-r-[1px]   border-r-custom-primarylight/35 dark:border-r-custom-primarydark/10 `}>
    <div className="p-2 flex dark:bg-custom-primarydark/5 bg-custom-primarylight/5">
                    <Link href="/" >
                        <Image src={theme == 'light' ? lightlogo.src : logo.src} alt=" Logo" width={180} height={100} />
                    </Link>
                </div>

                <div className="flex flex-col gap-3  dark:border-t-customBg-bgcoldark border-t-customBg-bgcollight" >
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<SlHome className=' dark:text-custom-primarydark text-custom-primarylight' />}
                    />
                    <MenuItem
                        name="T-Shirts"
                        route="/t-shirts"
                        icon={<FaTshirt className=' dark:text-custom-primarydark text-custom-primarylight'/>}
                    />
                    <MenuItem
                        name="Hats"
                        route="/hats"
                        icon={<FaRedhat className=' dark:text-custom-primarydark text-custom-primarylight'/>}
                    />
                    <MenuItem
                        name="About Us"
                        route="/about"
                        icon={<BsInfoSquare className=' dark:text-custom-primarydark text-custom-primarylight'/>}
                    />
                    <MenuItem
                        name="Contact"
                        route="/contact"
                        icon={<BsEnvelopeAt className=' dark:text-custom-primarydark text-custom-primarylight'/>}
                    />
                </div>
                {show ? <ModalOverlay /> : <></>}

      
    </div>
    </>
  )
}

export default Sidebar
