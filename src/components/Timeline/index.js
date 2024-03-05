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
        if (selectedDot === index) {
            setSelectedDot(null);
        } else {
            setSelectedDot(index);
        }
    }

    return (
        <Timeline className="timeline-main" position="alternate">
            {timelineData.map((event, index) => (
                <TimelineItem key={index}>
                    <TimelineOppositeContent className={`${selectedDot === index ? 'opposite-fade-in' : 'opposite-fade-out'} ${index % 2 === 0 ? '' : 'alternate'}`} sx={{ m: 'auto 0' }} align="right" variant="body2">{selectedDot === index && (event.wkOrEd === "wk"? "Work Experience" : "Education")}</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot className={`timeline-dot ${event.wkOrEd === "wk" ? 'work-timeline-dot' : 'school-timeline-dot'} ${selectedDot === index ? 'timeline-dot-active' : ''}`} onClick={() => handleDotClick(index)}>
                            {event.wkOrEd === "wk"? <Work /> : <School />}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className={`${selectedDot === index ? 'fade-in' : 'fade-out'} ${index % 2 === 0 ? '' : 'alternate'}`} sx={{ py: '12px', px: 2 }}>
                    {selectedDot === index && <TimelineInfo event={event} />}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
};

export default TimelineComponent;
