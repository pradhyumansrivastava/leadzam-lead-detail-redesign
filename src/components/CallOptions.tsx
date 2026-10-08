import React from 'react';
import { Monitor, Smartphone, Copy } from 'lucide-react';

interface CallOptionsProps {
  phone: string;
  onCallBrowser: () => void;
  onCallPhoneApp: () => void;
  onCopyNumber: () => void;
}

export const CallOptions: React.FC<CallOptionsProps> = ({
  phone,
  onCallBrowser,
  onCallPhoneApp,
  onCopyNumber,
}) => {
  return (
    <div className="call-options-dropdown" role="menu" aria-label="Call options dropdown">
      <div
        className="option-item"
        onClick={onCallBrowser}
        role="menuitem"
        tabIndex={0}
      >
        <div className="option-icon-box">
          <Monitor size={18} />
        </div>
        <div className="option-text-group">
          <div className="option-title-row">
            <span className="option-title">Call via Browser</span>
            <span className="recommended-pill">(Recommended)</span>
          </div>
          <span className="option-subtitle">Use your browser to make the call</span>
        </div>
      </div>

      <div className="option-divider" />

      <div
        className="option-item"
        onClick={onCallPhoneApp}
        role="menuitem"
        tabIndex={0}
      >
        <div className="option-icon-box">
          <Smartphone size={18} />
        </div>
        <div className="option-text-group">
          <span className="option-title">Call via Phone App</span>
          <span className="option-subtitle">Open in your default calling app</span>
        </div>
      </div>

      <div className="option-divider" />

      <div
        className="option-item"
        onClick={onCopyNumber}
        role="menuitem"
        tabIndex={0}
      >
        <div className="option-icon-box">
          <Copy size={18} />
        </div>
        <div className="option-text-group">
          <span className="option-title">Copy Phone Number</span>
          <span className="option-subtitle">{phone}</span>
        </div>
      </div>
    </div>
  );
};
