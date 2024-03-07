import {
  React,
  useEffect,
  useRef,
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
import { Divider } from '@mui/material';

import TimelineInfo from '../TimelineInfo';
import timelineData from './timelineData';

const TimelineComponent = () => {
    // const [selectedDot, setSelectedDot] = useState(null);

    // const handleDotClick = (index) => {
    //     if (selectedDot === index) {
    //         setSelectedDot(null);
    //     } else {
    //         setSelectedDot(index);
    //     }
    // }

    const timelineRefs = useRef([]);
    timelineRefs.current = [];

    const addToRefs = (el) => {
        if (el && !timelineRefs.current.includes(el)) {
            timelineRefs.current.push(el);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    } else {
                        entry.target.classList.remove('fade-in');
                    }
                });
            },
            { threshold: 0.1 } // adjust as needed
        );

        timelineRefs.current.forEach(ref => observer.observe(ref));

        return () => {
            if (timelineRefs.current) {
                timelineRefs.current.forEach(ref => observer.unobserve(ref));
            }
        };
    }, []);

    return (
        // <div className='timeline-parent'>
        //     <Divider />
        //     <Timeline className="timeline-main" position="alternate">
        //         {timelineData.map((event, index) => (
        //             <TimelineItem key={index}>
        //                 <TimelineOppositeContent className={`${selectedDot === index ? 'opposite-fade-in' : 'opposite-fade-out'} ${index % 2 === 0 ? '' : 'alternate'}`} sx={{ m: 'auto 0' }} align="right" variant="body2">{selectedDot === index && (event.wkOrEd === "wk"? "Work Experience" : "Education")}</TimelineOppositeContent>
        //                 <TimelineSeparator>
        //                     <TimelineConnector />
        //                     <TimelineDot className={`timeline-dot ${event.wkOrEd === "wk" ? 'work-timeline-dot' : 'school-timeline-dot'} ${selectedDot === index ? 'timeline-dot-active' : ''}`} onClick={() => handleDotClick(index)}>
        //                         {event.wkOrEd === "wk"? <Work /> : <School />}
        //                     </TimelineDot>
        //                     <TimelineConnector />
        //                 </TimelineSeparator>
        //                 <TimelineContent className={`${selectedDot === index ? 'fade-in' : 'fade-out'} ${index % 2 === 0 ? '' : 'alternate'}`} sx={{ py: '12px', px: 2 }}>
        //                 {selectedDot === index && <TimelineInfo event={event} />}
        //                 </TimelineContent>
        //             </TimelineItem>
        //         ))}
        //     </Timeline>
        // </div>

        <div className='timeline-parent'>
            <Divider />
            <Timeline className="timeline-main" position="alternate">
                {timelineData.map((event, index) => (
                    <TimelineItem key={index} ref={addToRefs} className='timeline-item'>
                        <TimelineOppositeContent className={`${index % 2 === 0 ? '' : 'alternate'}`} sx={{ m: 'auto 0' }} align="right" variant="body2">{(event.wkOrEd === "wk"? "Work Experience" : "Education")}</TimelineOppositeContent>
                         <TimelineSeparator>
                             <TimelineConnector />
                             <TimelineDot className={`timeline-dot ${event.wkOrEd === "wk" ? 'work-timeline-dot' : 'school-timeline-dot'}`} >
                                 {event.wkOrEd === "wk"? <Work /> : <School />}
                             </TimelineDot>
                             <TimelineConnector />
                         </TimelineSeparator>
                         <TimelineContent className={` ${index % 2 === 0 ? '' : 'alternate'}`} sx={{ py: '12px', px: 2 }}>
                         <TimelineInfo event={event} />
                         </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default TimelineComponent;
