import React, { useState, useEffect } from 'react';
import { PhoneCall, Mic, MicOff, Grid, PhoneOff, FileText, MoreHorizontal } from 'lucide-react';

interface CallingStateProps {
  phone: string;
  onEndCall: (durationSeconds: number) => void;
}

export const CallingState: React.FC<CallingStateProps> = ({ phone, onEndCall }) => {
  const [seconds, setSeconds] = useState<number>(12); // starts at 12s matching ref PNG 3
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="calling-card" role="region" aria-label="Active Call">
      <div className="calling-header">
        <div className="calling-info-left">
          <div className="calling-icon-badge">
            <PhoneCall size={20} />
          </div>
          <div>
            <h3 className="calling-title">Calling...</h3>
            <p className="calling-subtitle">Connecting your call to {phone}</p>
          </div>
        </div>

        <div className="timer-pill">
          <span className="pulse-dot" />
          <span>{formatTimer(seconds)}</span>
        </div>
      </div>

      <div className="calling-controls-row">
        <button
          className={`control-item ${isMuted ? 'active-toggle' : ''}`}
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? 'Unmute microphone' : 'Mute microphone'}
        >
          <div className="control-btn-circle">
            {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
          </div>
          <span>{isMuted ? 'Muted' : 'Mute'}</span>
        </button>

        <button className="control-item" aria-label="Open Keypad">
          <div className="control-btn-circle">
            <Grid size={20} />
          </div>
          <span>Keypad</span>
        </button>

        <button
          className="control-item end-call-item"
          onClick={() => onEndCall(seconds)}
          aria-label="End Call"
        >
          <div className="control-btn-circle">
            <PhoneOff size={20} />
          </div>
          <span>End Call</span>
        </button>

        <button className="control-item" aria-label="Add Note during call">
          <div className="control-btn-circle">
            <FileText size={20} />
          </div>
          <span>Add Note</span>
        </button>

        <button className="control-item" aria-label="More call options">
          <div className="control-btn-circle">
            <MoreHorizontal size={20} />
          </div>
          <span>More</span>
        </button>
      </div>
    </div>
  );
};
