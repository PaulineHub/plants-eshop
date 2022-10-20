import { Link } from 'react-router-dom';
import HomeHero from '../components/HomeHero'
import ConceptSection from '../components/ConceptSection'
import BestSellerSection from '../components/BestSellerSection'
import TestimonialSection from '../components/TestimonialSection'
import ExploreProductsSection from '../components/ExploreProductsSection'
import InstagramSection from '../components/InstagramSection'

const Home = () => {
  return (
    <>
      <HomeHero />
      <ConceptSection />
      <BestSellerSection />
      <TestimonialSection />
      <ExploreProductsSection />
      <InstagramSection />
    </>
  )
}
export default Home
