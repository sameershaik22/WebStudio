import Hero from '../components/sections/Hero.jsx';
import WhyUs from '../components/sections/WhyUs.jsx';
import WhoWeAre from '../components/sections/WhoWeAre.jsx';
import Showcase from '../components/sections/Showcase.jsx';
import Process from '../components/sections/Process.jsx';
import CTA from '../components/sections/CTA.jsx';

export default function Home() {
  return (
    <div className="page-home">
      <Hero />
      <WhyUs />
      <WhoWeAre />
      <Showcase />
      <Process />
      <CTA />
    </div>
  );
}
