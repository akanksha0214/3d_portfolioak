"use client";
import React from 'react';
import { projects, moreProject } from "../../data/index";
import { PinContainer } from './ui/PinContainer';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import Image from 'next/image';

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading'>
                Some Selected {' '}
                <span className='text-purple'>Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                                {/* <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src='./bg.png' alt='bg-img' />
                                </div> */}
                                <Image src={img}
                                    width={1000} height={500}
                                    alt={title}
                                    className='z-10 absolute bottom-0'
                                    style={{ height: 'auto' }} />
                            </div>
                            <h1 className='text-purple font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}>
                                            <Image width={50} height={50} src={icon} alt={icon} className='p-2' style={{ height: 'auto' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </PinContainer>
                    </div>
                ))}
                <div className="flex flex-col md:flex-row gap-4">
                    {moreProject.map((project) => (
                        <div
                            key={project.id}
                            className="cursor-pointer"
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            <MagicButton title={project.title} icon={<FaLocationArrow />} position="left" />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default RecentProjects;




