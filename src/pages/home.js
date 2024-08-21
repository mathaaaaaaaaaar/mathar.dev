import React, { forwardRef } from 'react';

import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectsSection';
import TimelineComponent from '../components/Timeline';

const Home = forwardRef((props, ref) => {
  return (
    <div >
        <HeroSection />
        <TimelineComponent />
        <ProjectSection ref={ref}/>
    </div>
  );
});
  
export default Home;