import React from 'react'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import ProductGrid from '../components/ProductGrid'
import FeaturedSection from '../components/FeaturedSection'
import Newsletter from '../components/Newsletter'

function HomePage() {
    return (
        <>
            <Hero/>
            <CategorySection />
            <ProductGrid />
            <FeaturedSection />
            <Newsletter />
        </>
    )
}

export default HomePage