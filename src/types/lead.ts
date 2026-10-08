export type CallState = 'default' | 'options' | 'calling' | 'completed';

export type CallOutcome = 'No answer' | 'Interested' | 'Not interested' | 'Callback requested';

export interface TimelineItem {
  id: string;
  type: 'created' | 'call' | 'note';
  title: string;
  subtitle: string;
  author: string;
  timestamp: string;
  outcome?: CallOutcome;
}

export interface Lead {
  id: string;
  name: string;
  stage: string;
  assignee: string;
  createdAt: string;
  phone: string;
  email: string;
  location: string;
  leadSource: string;
  company: string;
  companyWebsite: string;
  jobTitle: string;
  interestNeed: string;
}
