import About from "./components/About";
import Hero from "./components/Hero";
import Expansion from "./components/Expansion";
import HorizontalScrollCarousel from "./components/HorizontalDemo";
export default function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900 ' >
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(1,65,34,0.7),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className='container mx-auto p-8'>
        <Hero></Hero>
        
        <About />
        
        <HorizontalScrollCarousel></HorizontalScrollCarousel>
       
      </div>
    </div>
  );

}