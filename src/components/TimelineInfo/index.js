import React from 'react';

const TimelineInfo = ({ event }) => {
    return (
        <div className="timeline-card">
            <h3>{event.role}</h3>
            <h4>{event.company}</h4>
            <p>{event.duration}</p>
            <ul>
                {event.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default TimelineInfo;
