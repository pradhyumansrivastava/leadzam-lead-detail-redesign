import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';

interface ActivityComposerProps {
  onAddNote: (noteText: string) => void;
}

export const ActivityComposer: React.FC<ActivityComposerProps> = ({ onAddNote }) => {
  const [noteInput, setNoteInput] = useState<string>('');

  const quickInserts = ['No answer', 'Follow-up tomorrow', 'Send brochure'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteInput.trim()) return;
    onAddNote(noteInput);
    setNoteInput('');
  };

  const handleQuickInsert = (text: string) => {
    setNoteInput((prev) => (prev ? `${prev} ${text}` : text));
  };

  return (
    <div className="composer-card">
      <form onSubmit={handleSubmit}>
        <div className="composer-input-row">
          <div className="user-avatar-purple">P</div>
          <div className="composer-field-wrapper">
            <input
              id="composer-note-input"
              type="text"
              className="composer-input"
              placeholder="Add a note..."
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
            />
            <button type="button" className="btn-attach" aria-label="Attach file">
              <Paperclip size={16} />
            </button>
            <button type="submit" className="btn-send" aria-label="Send note">
              <Send size={14} />
            </button>
          </div>
        </div>
      </form>

      <div className="quick-inserts-row">
        <span className="quick-insert-label">Quick insert:</span>
        {quickInserts.map((item) => (
          <button
            key={item}
            type="button"
            className="chip-quick"
            onClick={() => handleQuickInsert(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
