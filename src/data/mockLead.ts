import { Lead, TimelineItem } from '../types/lead';

export const initialLead: Lead = {
  id: '#72',
  name: 'Ananya Iyer',
  stage: 'Fresh',
  assignee: 'Unassigned',
  createdAt: 'Dec 10, 2024, 10:24 AM',
  phone: '+91 91234 56789',
  email: 'ananya.iyer@example.com',
  location: 'Bengaluru, Karnataka',
  leadSource: 'Website',
  company: 'Tata Consultancy Services',
  companyWebsite: '—',
  jobTitle: 'Product Manager',
  interestNeed: 'Commercial Property Inquiry'
};

export const initialTimelineItems: TimelineItem[] = [
  {
    id: '1',
    type: 'created',
    title: 'Lead created',
    subtitle: 'Lead added via website',
    author: 'System',
    timestamp: 'Dec 10, 2024, 10:24 AM'
  },
  {
    id: '2',
    type: 'call',
    title: 'Call attempt',
    subtitle: 'No answer',
    author: 'Rohan Mehta',
    timestamp: 'Dec 10, 2024, 11:02 AM'
  },
  {
    id: '3',
    type: 'note',
    title: 'Note added',
    subtitle: 'Tried calling, no response. Will follow up tomorrow.',
    author: 'Rohan Mehta',
    timestamp: 'Dec 10, 2024, 11:05 AM'
  }
];
