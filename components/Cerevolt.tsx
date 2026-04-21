import React from 'react'

const Cerevolt = () => {
  return (
    <section id="cerevolt" className='relative z-10 pt-32 pb-24'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
            <span className='text-purple'>02</span>
            <span className='h-3 w-px bg-white/20' />
            <span>2025 — Present</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Co-Founder, CTO</span>
            <span className='h-3 w-px bg-white/20' />
            <span>macOS · Windows · AI</span>
        </div>

        <div className='mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
            <h2 className='font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl'>
                Cerevolt
            </h2>
            <p className='max-w-md text-base md:text-lg text-white-100 font-light'>
                AI that protects your focus — a context-aware distraction blocker for macOS and Windows.
            </p>
        </div>

        <div className='mt-16 rounded-2xl overflow-hidden border border-white/[.08]'>
            <img
                src='/cerevolt1.png'
                alt='cerevolt landing page'
                className='w-full'
            />
        </div>

        <div className='mt-24 grid grid-cols-3 border-y border-white/10'>
            <div className='py-10 px-4 md:px-8 text-center border-r border-white/10'>
                <div className='font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl'>
                    50<span className='text-purple'>+</span>
                </div>
                <div className='mt-3 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
                    Beta users
                </div>
            </div>
            <div className='py-10 px-4 md:px-8 text-center border-r border-white/10'>
                <div className='font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl'>
                    Top<span className='text-purple'> 10%</span>
                </div>
                <div className='mt-3 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
                    Of YC applicants
                </div>
            </div>
            <div className='py-10 px-4 md:px-8 text-center'>
                <div className='font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl'>
                    macOS<span className='text-purple'>+</span>Win
                </div>
                <div className='mt-3 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
                    Native clients
                </div>
            </div>
        </div>

        <div className='mt-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12'>
            <div className='md:col-span-3'>
                <div className='font-mono text-xs tracking-[0.25em] uppercase text-purple'>
                    About
                </div>
            </div>
            <div className='md:col-span-9'>
                <p className='text-lg md:text-xl font-light leading-relaxed text-white-100'>
                    Cerevolt is an AI-powered, context-aware distraction blocker for macOS and Windows. It senses when you&apos;re drifting, blocks distractions instantly, and keeps you locked in on what matters. As Co-Founder & CTO, I&apos;m leading development, building intelligent screen and application monitoring pipelines, and designing core UI/UX flows to promote habit formation.
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
                    <h3 className='font-semibold text-xl md:text-2xl'>Context-aware blocking</h3>
                    <p className='mt-2 text-white-100 font-light'>Real-time evaluation of user context and task relevance, powered by intelligent screen and application monitoring pipelines.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Cross-platform native</h3>
                    <p className='mt-2 text-white-100 font-light'>Built for both macOS and Windows with frictionless onboarding and daily use in mind.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Habit-forming UX</h3>
                    <p className='mt-2 text-white-100 font-light'>Core UI/UX flows designed to promote focus habits rather than punishing users into compliance.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Iterative model refinement</h3>
                    <p className='mt-2 text-white-100 font-light'>Ongoing user interviews and model tuning to improve context classification accuracy across diverse workflows.</p>
                </div>
            </div>
        </div>

        <div className='mt-24 rounded-2xl overflow-hidden border border-white/[.08]'>
            <video
                src='/cerevolt2.mp4'
                className='w-full'
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    </section>
  )
}

export default Cerevolt
