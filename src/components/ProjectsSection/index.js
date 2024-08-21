import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

import ProjectCard from '../ProjectCard';
import projectsData from './projectData';

const ProjectSection = forwardRef((props, ref) => {
    console.log('projectsData:', projectsData); // Debugging line

    const sectionRef = useRef(null);

    useImperativeHandle(ref, () => ({
        scrollToSection: () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }));

    return (
        <div ref={sectionRef}>
            <h3 className='titleText'>Projects</h3>
            <div className="project-section">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
});

export default ProjectSection;