import './styles.css';

import React from 'react';

import { ProgressBar } from 'react-bootstrap';

const Timeline = () => {
    const timelineData = [
        {
            title: 'Education',
            events: [
                {
                    date: '2010 - 2014',
                    description: 'Bachelor\'s Degree in Computer Science',
                    institution: 'University of XYZ',
                },
                {
                    date: '2015 - 2017',
                    description: 'Master\'s Degree in Software Engineering',
                    institution: 'ABC University',
                },
            ],
        },
        {
            title: 'Work Experience',
            events: [
                {
                    date: '2017 - 2019',
                    description: 'Software Engineer at Company A',
                    institution: 'Company A',
                },
                {
                    date: '2019 - Present',
                    description: 'Senior Software Engineer at Company B',
                    institution: 'Company B',
                },
            ],
        },
    ];

    return (
        <div className="timeline">
            {/* {timelineData.map((item, index) => (
                <div key={index} className="timeline-section">
                    <h2>{item.title}</h2>
                    {item.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="timeline-event">
                            <div className="event-date">{event.date}</div>
                            <div className="event-description">{event.description}</div>
                            <div className="event-institution">{event.institution}</div>
                        </div>
                    ))}
                </div>
            ))} */}
            
            <ProgressBar now={50} className='timeline-vertical'></ProgressBar>
        </div>
    );
};

export default Timeline;
