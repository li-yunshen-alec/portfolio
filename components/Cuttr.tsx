import React from 'react'

const Cuttr = () => {
  return (
    <section id="cuttr" className='relative z-10 pt-32 pb-24'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
            <span className='text-purple'>01</span>
            <span className='h-3 w-px bg-white/20' />
            <span>2025 — Present</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Co-Founder, CTO</span>
            <span className='h-3 w-px bg-white/20' />
            <span>React Native · Expo · Next.js</span>
        </div>

        <div className='mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
            <h2 className='font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl'>
                Cuttr AI
            </h2>
            <p className='max-w-md text-base md:text-lg text-white-100 font-light'>
                Find your perfect hairstyle — AI-powered face analysis, virtual try-ons, and cuts tailored to you.
            </p>
        </div>

        <div className='mt-16 rounded-2xl overflow-hidden border border-white/[.08]'>
            <img
                src='/cuttrapple.jpeg'
                alt='cuttr on the app store'
                className='w-full'
            />
        </div>

        <div className='mt-24 grid grid-cols-3 border-y border-white/10'>
            <div className='py-10 px-4 md:px-8 text-center border-r border-white/10'>
                <div className='font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl'>
                    15K<span className='text-purple'>+</span>
                </div>
                <div className='mt-3 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
                    Users served
                </div>
            </div>
            <div className='py-10 px-4 md:px-8 text-center border-r border-white/10'>
                <div className='font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl'>
                    4.7<span className='text-purple'>&#9733;</span>
                </div>
                <div className='mt-3 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
                    App store rating
                </div>
            </div>
            <div className='py-10 px-4 md:px-8 text-center'>
                <div className='font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl'>
                    iOS<span className='text-purple'>+</span>Android
                </div>
                <div className='mt-3 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
                    Live on stores
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
                    Cuttr AI is an AI-powered hairstyle finder built with React Native and Expo. Users scan their face to get personalized style recommendations and virtual try-ons powered by computer vision and LLM-based analysis of face shapes and features. As Co-Founder & CTO, I architected the app, integrated the AI pipeline, built the subscription monetization engine, and shipped the Next.js + Tailwind web presence for SEO and user acquisition.
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
                    <h3 className='font-semibold text-xl md:text-2xl'>Face-shape analysis</h3>
                    <p className='mt-2 text-white-100 font-light'>Computer vision identifies face shapes and features to ground every recommendation in the user&apos;s actual structure.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Virtual try-ons</h3>
                    <p className='mt-2 text-white-100 font-light'>LLM-assisted style rendering lets users preview cuts before committing in the chair.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Personalized recommendations</h3>
                    <p className='mt-2 text-white-100 font-light'>Tailored style suggestions driven by both visual analysis and user preferences.</p>
                </div>
                <div className='py-6'>
                    <h3 className='font-semibold text-xl md:text-2xl'>Subscription monetization</h3>
                    <p className='mt-2 text-white-100 font-light'>Built a subscription engine alongside a Next.js + Tailwind web presence optimized for SEO and paid acquisition.</p>
                </div>
            </div>
        </div>

        <div className='mt-24 rounded-2xl overflow-hidden border border-white/[.08]'>
            <img
                src='/cuttrgoogleplay.jpeg'
                alt='cuttr on google play'
                className='w-full'
            />
        </div>
    </section>
  )
}

export default Cuttr
