"use client";
import { FunctionComponent } from 'react';
import SectionHeading from './SectionHeading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educationData } from '@/lib/data';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from './ThemeContext';

interface EducationProps {

}

const Education: FunctionComponent<EducationProps> = () => {
    const { ref } = useSectionInView("Education")
    const { theme } = useTheme();
    return (
        <section ref={ref} id="education" className='scroll-mt-28 mb-28 sm:mb-40'>
            <SectionHeading>My education</SectionHeading>
            <VerticalTimeline lineColor="">
                {educationData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            visible
                            contentStyle={{
                                background:
                                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.15)",
                                border: "2px solid rgba(0, 0, 0, 0.15)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.7rem solid #9ca3af"
                                        : "0.7rem solid rgba(255, 255, 255, 0.7)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "3rem",
                            }}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !my-2 !text-sm italic">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/70 !text-md">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}

export default Education;