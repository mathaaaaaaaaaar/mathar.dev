import './styles.css';

import React from 'react';

import {
  School,
  Work,
} from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';

import TimelineInfo from '../TimelineInfo';
import timelineData from './timelineData';

const TimelineComponent = () => {
    return (
        <Timeline position="alternate">
            {timelineData.map((event, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2">{event.wkOrEd == "wk"? "Work Experience" : "Education"}</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            {event.wkOrEd == "wk"? <Work /> : <School />}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <TimelineInfo event={event} />
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default TimelineComponent;
