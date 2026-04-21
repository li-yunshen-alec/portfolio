import { projects } from '@/data'
import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const RecentProjects = () => {
  return (
    <section id="projects" className='relative z-10 pt-32 pb-24'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
            <span className='text-purple'>Archive</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Hackathons & side projects</span>
        </div>

        <div className='mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
            <h2 className='font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl'>
                Archive
            </h2>
            <p className='max-w-md text-base md:text-lg text-white-100 font-light'>
                A small collection of hackathon wins, early experiments, and things worth keeping around.
            </p>
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <a
                    key={id}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative flex flex-col overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.02] hover:border-white/20 transition-colors'
                >
                    <div className='aspect-[16/10] overflow-hidden bg-[#13162d]'>
                        <img
                            src={img}
                            alt={title}
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                        />
                    </div>

                    <div className='p-6 md:p-8 flex-1 flex flex-col'>
                        <div className='flex items-start justify-between gap-4'>
                            <h3 className='font-semibold text-xl md:text-2xl leading-tight'>
                                {title}
                            </h3>
                            <FaArrowUpRightFromSquare className='text-white/40 text-sm mt-1.5 transition-all group-hover:text-purple group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                        </div>

                        <p className='mt-3 text-white-100 font-light line-clamp-2'>
                            {des}
                        </p>

                        <div className='mt-auto pt-6 flex items-center'>
                            {iconLists.map((icon, index) => (
                                <div
                                    key={index}
                                    className='w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center'
                                    style={{
                                        transform: `translateX(-${4 * index}px)`,
                                    }}
                                >
                                    <img src={icon} alt={icon} className='p-1.5 w-full h-full' />
                                </div>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </section>
  )
}

export default RecentProjects
