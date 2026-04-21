import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section className='relative z-10 min-h-screen flex flex-col justify-center pt-36 pb-24 overflow-hidden'>
        <div className='absolute inset-0 -z-10 pointer-events-none'>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />

            <div className='absolute inset-0 dark:bg-grid-white/[0.03] bg-grid-black/[0.2]' />
            <div className='absolute inset-0 bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]' />
        </div>

        <div className='inline-flex self-start items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[.03] backdrop-blur-sm'>
            <span className='relative flex h-1.5 w-1.5'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping' />
                <span className='relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400' />
            </span>
            <span className='font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70'>
                Currently building
            </span>
        </div>

        <h1 className='mt-8 font-bold tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9]'>
            Alec Li<span className='text-purple'>.</span>
        </h1>

        <p className='mt-10 max-w-3xl text-xl md:text-2xl lg:text-3xl font-light leading-snug text-white-100'>
            Full-stack developer shipping <span className='text-white'>AI-powered products</span> — currently Co-Founder & CTO at <span className='text-white'>Cerevolt</span> and <span className='text-white'>Cuttr AI</span>.
        </p>

        <div className='mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
            <span>Toronto, ON</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Full-stack · AI · Mobile</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Next.js · React Native · Python</span>
        </div>

        <div className='mt-14 flex flex-wrap gap-3'>
            <a
                href='#cuttr'
                className='group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-purple text-black-100 font-medium hover:bg-white transition-colors'
            >
                View work
                <FaArrowDown className='text-sm transition-transform group-hover:translate-y-0.5' />
            </a>
            <a
                href='#contact'
                className='group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/15 hover:border-white/40 text-white font-medium transition-colors'
            >
                Get in touch
                <FaArrowRight className='text-sm transition-transform group-hover:translate-x-0.5' />
            </a>
        </div>
    </section>
  )
}

export default Hero
