import React from 'react';
import { Sparkles, Phone, ChevronDown } from 'lucide-react';

interface RecommendedActionProps {
  phone: string;
  onCallClick: () => void;
  onDropdownClick: () => void;
  isOptionsOpen: boolean;
}

export const RecommendedAction: React.FC<RecommendedActionProps> = ({
  phone,
  onCallClick,
  onDropdownClick,
  isOptionsOpen,
}) => {
  return (
    <div className="recommended-card">
      <div className="card-header">
        <div className="header-title-flex">
          <div className="sparkle-badge">
            <Sparkles size={16} />
          </div>
          <span className="rec-title">Recommended Next Action</span>
        </div>
        <a href="#why" className="link-why" onClick={(e) => { e.preventDefault(); alert("AI Recommendation: Lead registered via website form. Immediate phone outreach within 1 hour increases conversion rate by 4x."); }}>
          Why?
        </a>
      </div>

      <p className="rec-description">
        This is a new lead. Start by reaching out to understand their requirements.
      </p>

      <div className="cta-call-group">
        <button
          className="btn-primary-cta"
          onClick={onCallClick}
          aria-expanded={isOptionsOpen}
          aria-label="Call Now primary action"
        >
          <Phone size={18} />
          <span>Call Now</span>
          <span style={{ opacity: 0.85, fontSize: '14px', fontWeight: 500 }}>
            ({phone})
          </span>
          <span
            className="cta-arrow"
            onClick={(e) => {
              e.stopPropagation();
              onDropdownClick();
            }}
            title="Call Options"
          >
            <ChevronDown size={18} />
          </span>
        </button>
      </div>
    </div>
  );
};
