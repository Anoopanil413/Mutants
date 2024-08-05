'use client'
import Link from 'next/link';
import React from 'react'
import logo from '../../../public/actuallogo.png'
import { BsEnvelopeAt, BsInfoSquare } from 'react-icons/bs';
import { FaRedhat, FaTshirt } from 'react-icons/fa';
import { SlHome } from 'react-icons/sl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Sidebar = ({ show, setter }:any) => {

    const pathname = usePathname()

    const className = "bg-customPrimary-dark w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";


    const MenuItem = ({ icon, name, route }:any) => {
        // Highlight menu item based on currently displayed route
        const colorClass = pathname === route ? "text-white" : "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter((oldVal:any) => !oldVal);
                }}
                className={`flex gap-2 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-customPrimary-primarylight/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div className='text-customPrimary-secondarylight'>{name}</div>
            </Link>
        )
    }


    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter((oldVal:any) => !oldVal);
            }}
        />
    )


  return (
    <>
    <div className={`${className}${appendClass}`}>
    <div className="p-2 flex ">
                    <Link href="/">
                        <Image src={logo.src} alt=" Logo" width={180} height={100} />
                    </Link>
                </div>

                <div className="flex flex-col gap-3">
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<SlHome />}
                    />
                    <MenuItem
                        name="T-Shirts"
                        route="/t-shirts"
                        icon={<FaTshirt />}
                    />
                    <MenuItem
                        name="Hats"
                        route="/hats"
                        icon={<FaRedhat />}
                    />
                    <MenuItem
                        name="About Us"
                        route="/about"
                        icon={<BsInfoSquare />}
                    />
                    <MenuItem
                        name="Contact"
                        route="/contact"
                        icon={<BsEnvelopeAt />}
                    />
                </div>
                {show ? <ModalOverlay /> : <></>}

      
    </div>
    </>
  )
}

export default Sidebar
