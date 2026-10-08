import React from 'react';
import { Calendar, PhoneCall, FileText } from 'lucide-react';
import { TimelineItem } from '../types/lead';

interface ActivityTimelineProps {
  items: TimelineItem[];
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ items }) => {
  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'created':
        return <Calendar size={18} />;
      case 'call':
        return <PhoneCall size={18} />;
      case 'note':
        return <FileText size={18} />;
      default:
        return <FileText size={18} />;
    }
  };

  return (
    <div className="timeline-container" role="feed" aria-label="Activity timeline">
      {items.map((item) => (
        <div key={item.id} className="timeline-item">
          <div className="timeline-line" />
          <div className={`timeline-icon-box ${item.type}`}>
            {getIcon(item.type)}
          </div>
          <div className="timeline-details">
            <div className="timeline-top-row">
              <span className="timeline-title">{item.title}</span>
              <span className="timeline-timestamp">{item.timestamp}</span>
            </div>
            <div className="timeline-bottom-row">
              <span className="timeline-subtitle">{item.subtitle}</span>
              <span className="timeline-author">by {item.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
