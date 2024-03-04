import React from 'react';

const TimelineInfo = ({ event }) => {
    return (
        <div className="timeline-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date}</p>
        </div>
    );
};

export default TimelineInfo;
