import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer id='contact' className='relative z-10 pt-32 pb-12'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent' />

        <div className='mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
            <span className='text-purple'>04</span>
            <span className='h-3 w-px bg-white/20' />
            <span>Contact</span>
        </div>

        <div className='mt-8'>
            <h2 className='font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[0.95]'>
                Let&apos;s build <br className='hidden md:block' />
                <span className='text-purple'>something.</span>
            </h2>
            <p className='mt-10 max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white-100'>
                I&apos;m not actively looking for new opportunities, but my inbox is always open. Whether it&apos;s a question, a collab, or just a hello — I&apos;ll get back to you.
            </p>
        </div>

        <div className='mt-12'>
            <a
                href='mailto:yunshen08@gmail.com'
                className='group inline-flex items-center gap-3 md:gap-5 font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl text-purple hover:text-white transition-colors'
            >
                yunshen08@gmail.com
                <FaArrowRight className='text-xl md:text-3xl transition-transform group-hover:translate-x-1' />
            </a>
        </div>

        <div className='mt-24 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row md:items-center justify-between gap-6'>
            <div className='font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50'>
                © 2026 Alec Li · Built with Next.js & Tailwind
            </div>

            <div className='flex items-center gap-3'>
                {socialMedia.map((profile) => (
                    <a
                        key={profile.img}
                        href={profile.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-white/40 transition-colors'
                    >
                        <img
                            src={profile.img}
                            alt={String(profile.id)}
                            width={16}
                            height={16}
                        />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
