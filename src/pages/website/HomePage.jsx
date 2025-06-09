import React from 'react'
import Hero from '../../components/website/sections/Hero'
import CategorySection from '../../components/website/sections/CategorySection'
import ProductGrid from '../../components/website/ProductGrid'
import FeaturedSection from '../../components/website/sections/FeaturedSection'
import Newsletter from '../../components/website/sections/NewsLetter'

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