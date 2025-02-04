import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center
    items-center flex-col max-w-7xl m-auto'>
        <nav className='flex justify-between items-center w-full pt-3'>
            <img src={logo} alt="logo" className='w-36 object-contain' />
            <button
            type='button'
            onClick={() => window.open('https://wa.link/2m99cs')}
            className='black_btn'
            >
                Contact
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Summarize, an open-source
            article summarizer that transforms lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero