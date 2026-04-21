import React from 'react'

const Project1 = () => {
  return (
    <section id="wizdomcode" className='relative z-10 pt-32 pb-24'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
            <span className='text-purple'>03</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Earlier project</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Solo</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Next.js · Node · MongoDB</span>
        </div>

        <div className='mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
            <h2 className='font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl'>
                WizdomCode
            </h2>
            <p className='max-w-md text-base md:text-lg text-white-100 font-light'>
                An educational platform that streamlines the way people learn competitive programming.
            </p>
        </div>

        <div className='mt-16 rounded-2xl overflow-hidden border border-white/[.08]'>
            <img
                src='/wizdomcode1.png'
                alt='wizdomcode'
                className='w-full'
            />
        </div>

        <div className='mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12'>
            <div className='md:col-span-3'>
                <div className='font-mono text-xs tracking-[0.25em] uppercase text-purple'>
                    About
                </div>
            </div>
            <div className='md:col-span-9'>
                <p className='text-lg md:text-xl font-light leading-relaxed text-white-100'>
                    WizdomCode is an educational platform that offers a streamlined method of learning competitive programming. A comprehensive, modern solution to the traditional pains of finding suitable problems, tracking progress, and setting up development environments.
                </p>
            </div>
        </div>

        <div className='mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12'>
            <div className='md:col-span-3'>
                <div className='font-mono text-xs tracking-[0.25em] uppercase text-purple'>
                    What I built
                </div>
            </div>
            <div className='md:col-span-9 divide-y divide-white/10'>
                <div className='py-6 first:pt-0'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Problem bank</h3>
                    <p className='mt-2 text-white-100 font-light'>Extensive database of over 250 competitive programming problems with test cases and solutions.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Dynamic roadmap</h3>
                    <p className='mt-2 text-white-100 font-light'>A streamlined path of learning goals that lets users progress logically and tracks topic mastery over time.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Integrated IDE</h3>
                    <p className='mt-2 text-white-100 font-light'>Built-in code editor and file system lets users create, modify, and run code against preset or custom test cases.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Online judge</h3>
                    <p className='mt-2 text-white-100 font-light'>Backend server runs user-submitted code against test cases and returns structured submission status.</p>
                </div>
            </div>
        </div>

        <div className='mt-24 rounded-2xl overflow-hidden border border-white/[.08]'>
            <img
                src='/wizdomcode7.png'
                alt='wizdomcode'
                className='w-full'
            />
        </div>
    </section>
  )
}

export default Project1
