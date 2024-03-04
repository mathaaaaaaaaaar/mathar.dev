import React from 'react';

import { Card } from 'react-bootstrap';

const TimelineInfo = ({ event }) => {
    return (
        <Card className='text-center timeline-card'>
            <Card.Header>{event.company}</Card.Header>
            <Card.Body>
                <Card.Title>{event.role}</Card.Title>
                <Card.Text>
                    <ul>
                        {event.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </Card.Text>
            </Card.Body>
            <Card.Footer>{event.duration}</Card.Footer>
        </Card>
    );
};

export default TimelineInfo;
