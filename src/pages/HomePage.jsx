import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PostList from '../components/PostList'

function HomePage({ posts }) {
    return (
        <>
            <Hero />
            <Features />

            <section className="py-8 px-4">
                <PostList posts={posts}/>
            </section>
        </>
    )
}

export default HomePage
