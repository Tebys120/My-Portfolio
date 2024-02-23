import React from 'react'
import ProjectItem from './ProjectItem'
import fakeShop from '../assets/fake-shop.jpg'
import eBook from '../assets/e-book.jpg'
import fakeShopWebp from '../assets/fake-shop.webp'
import eBookWebp from '../assets/e-book.webp'


const Projects = () => {
    return (
        <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>Altough i have worked on a few real projects, i have also developed some fictitious projects and others that were never be deployed.</p>
             
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem imgWebp={fakeShopWebp} imgJpg={fakeShop} title="Fake Shop" description="React+Redux"/>
                <ProjectItem imgWebp={eBookWebp} imgJpg={eBook} title="E-Book" description="React"/>
            </div>
        </div>
    )
}

export default Projects
