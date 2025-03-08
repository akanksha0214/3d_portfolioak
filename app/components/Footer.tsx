import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { BackgroundBeam } from './ui/BackgroundBeam'
import Image from 'next/image';



const Footer = () => {
    return (
        <footer className='w-full h-full pt-20 pb-10 relative' id="contact">
            {/* Add BackgroundBeam */}
            <div className="absolute inset-0 z-0">
                <BackgroundBeam />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Looking to elevate your digital presence ?  <span className='text-purple'>Let’s make it happen!</span>
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                    Let’s create something together!
                </p>
                <a href='mailto:akankshak0214@gmail.com'>
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right' />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Akanksha Kushwaha</p>
                <div className='flex items-center md:gap-3 gap-6 mt-4'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter 
                        backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={profile.img}
                                    alt={profile.img}
                                    width={20}
                                    height={20}
                                />
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
