"use client";

import { FunctionComponent } from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import React from 'react';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

interface ProjectsProps {

}

const Projects: FunctionComponent<ProjectsProps> = () => {

    const { ref } = useSectionInView("Projects", 0.35);

    return (
        <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

export default Projects;