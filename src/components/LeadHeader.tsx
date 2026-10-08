import React from 'react';
import { X, User, Calendar, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Lead } from '../types/lead';

interface LeadHeaderProps {
  lead: Lead;
}

export const LeadHeader: React.FC<LeadHeaderProps> = ({ lead }) => {
  return (
    <div className="lead-header">
      <div className="header-top">
        <div className="title-group">
          <h1 className="lead-name">{lead.name}</h1>
          <span className="badge-fresh">{lead.stage}</span>
        </div>
        <button className="btn-icon-ghost" aria-label="Close panel">
          <X size={20} />
        </button>
      </div>

      <div className="lead-id">{lead.id}</div>

      <div className="header-subrow">
        <div className="subrow-left">
          <div className="assignee-select" tabIndex={0} role="button" aria-label="Lead assignee dropdown">
            <User size={14} />
            <span>{lead.assignee}</span>
            <ChevronDown size={14} />
          </div>
          <div className="divider-vertical" />
          <div className="created-date">
            <Calendar size={14} />
            <span>Created on {lead.createdAt}</span>
          </div>
        </div>
        <button className="btn-icon-ghost" aria-label="More actions">
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};
