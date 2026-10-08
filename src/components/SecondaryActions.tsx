import React from 'react';
import { MessageSquare, FileText, CheckSquare, Calendar } from 'lucide-react';

interface SecondaryActionsProps {
  phone: string;
}

export const SecondaryActions: React.FC<SecondaryActionsProps> = ({ phone }) => {
  const handleWhatsApp = () => {
    alert(`Opening WhatsApp chat for ${phone}`);
  };

  const handleNote = () => {
    const el = document.getElementById('composer-note-input');
    if (el) el.focus();
  };

  const handleToDo = () => {
    alert('Create To-Do task for this lead');
  };

  const handleFollowUp = () => {
    alert('Schedule a follow-up reminder for this lead');
  };

  return (
    <div className="secondary-actions-grid" role="group" aria-label="Secondary actions">
      <button className="btn-secondary-action" onClick={handleWhatsApp}>
        <MessageSquare size={16} className="icon-whatsapp" />
        <span>WhatsApp</span>
      </button>

      <button className="btn-secondary-action" onClick={handleNote}>
        <FileText size={16} className="icon-note" />
        <span>Note</span>
      </button>

      <button className="btn-secondary-action" onClick={handleToDo}>
        <CheckSquare size={16} className="icon-todo" />
        <span>To-Do</span>
      </button>

      <button className="btn-secondary-action" onClick={handleFollowUp}>
        <Calendar size={16} className="icon-followup" />
        <span>Follow-up</span>
      </button>
    </div>
  );
};
