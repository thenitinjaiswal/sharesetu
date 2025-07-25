import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import HowItWorks from '../components/HowitWorks';
import BlogPreview from '../components/BlogPreview';

export default function Home() {
  return (
    <div>
      <Hero />
      
        <ServicesGrid />
      

      {/* Enhanced How It Works Section */}
      <HowItWorks />

      <BlogPreview />
    </div>
  );
}
