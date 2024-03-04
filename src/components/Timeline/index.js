import {
  React,
  useState,
} from 'react';

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

    const [selectedDot, setSelectedDot] = useState(null);

    const handleDotClick = (index) => {
        setSelectedDot(index);
    }

    return (
        <Timeline position="alternate">
            {timelineData.map((event, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent className={selectedDot === index ? 'fade-in' : 'fade-out'} sx={{ m: 'auto 0' }} align="right" variant="body2">{selectedDot === index && (event.wkOrEd == "wk"? "Work Experience" : "Education")}</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className={selectedDot === index ? 'timeline-dot-active' : ''} onClick={() => handleDotClick(index)}>
                            {event.wkOrEd == "wk"? <Work /> : <School />}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className={selectedDot === index ? 'fade-in' : 'fade-out'} sx={{ py: '12px', px: 2 }}>
                    {selectedDot === index && <TimelineInfo event={event} />}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default TimelineComponent;
