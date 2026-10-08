import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { CallOutcome } from '../types/lead';

interface CallCompletedStateProps {
  durationSeconds: number;
  onSaveNote: (note: string, outcome: CallOutcome) => void;
  onCancel: () => void;
}

export const CallCompletedState: React.FC<CallCompletedStateProps> = ({
  durationSeconds,
  onSaveNote,
  onCancel,
}) => {
  const [noteText, setNoteText] = useState<string>('');
  const [selectedOutcome, setSelectedOutcome] = useState<CallOutcome>('Interested');

  const outcomes: CallOutcome[] = [
    'No answer',
    'Interested',
    'Not interested',
    'Callback requested',
  ];

  const formatDuration = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSave = () => {
    onSaveNote(noteText, selectedOutcome);
  };

  return (
    <div className="completed-card" role="region" aria-label="Call Completed Summary">
      <div className="completed-header">
        <div className="calling-info-left">
          <div className="completed-icon-badge">
            <Check size={20} />
          </div>
          <div>
            <h3 className="completed-title">Call completed</h3>
            <p className="completed-subtitle">
              Call ended • {durationSeconds > 0 ? formatDuration(durationSeconds) : '00:03:24'}
            </p>
          </div>
        </div>

        <div className="completed-date-badge">
          Oct 08, 2026, 11:28 AM
        </div>
      </div>

      <div className="note-input-container">
        <label htmlFor="call-note-input" className="note-label">
          Add a quick note about this call
        </label>
        <textarea
          id="call-note-input"
          className="note-textarea"
          placeholder="Type your notes here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
      </div>

      <div className="outcome-section">
        <span className="outcome-label">Call Outcome</span>
        <div className="outcome-pills-row" role="radiogroup" aria-label="Call Outcome">
          {outcomes.map((outcome) => (
            <button
              key={outcome}
              type="button"
              className={`outcome-pill ${selectedOutcome === outcome ? 'selected' : ''}`}
              onClick={() => setSelectedOutcome(outcome)}
              role="radio"
              aria-checked={selectedOutcome === outcome}
            >
              {outcome}
            </button>
          ))}
        </div>
      </div>

      <div className="completed-actions-row">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className="btn-primary" onClick={handleSave}>
          Save Note
        </button>
      </div>
    </div>
  );
};
