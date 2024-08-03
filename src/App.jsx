import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";


const App = () => {
  return (
    <main className='max-w-7xl m-auto'>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <div className='app'>
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App