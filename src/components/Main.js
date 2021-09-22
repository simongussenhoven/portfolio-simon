import React from 'react'
import Header from './Header'
import About from './About'
import Courses from './Courses'
import FadeIn from 'react-fade-in'


function Main () {
    return (
        <main id="main">
        <FadeIn>
            <Header/>
            <About/>
            <Courses/>
        </FadeIn>
        </main>
    )
}
export default Main