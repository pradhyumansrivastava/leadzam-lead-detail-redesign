import React, { useState } from 'react';
import {
  Info,
  Edit2,
  Phone,
  MapPin,
  Mail,
  Target,
  Building,
  Globe,
  Briefcase,
  Tag,
  Copy,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Lead } from '../types/lead';

interface LeadInformationProps {
  lead: Lead;
  onCopyText: (text: string, label: string) => void;
}

export const LeadInformation: React.FC<LeadInformationProps> = ({
  lead,
  onCopyText,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="lead-info-card">
      <div className="info-card-header">
        <div className="info-header-title">
          <Info size={18} color="#64748b" />
          <span>Lead Information</span>
        </div>
        <button className="btn-edit-link">
          <Edit2 size={14} />
          <span>Edit</span>
        </button>
      </div>

      <div className="info-grid">
        {/* Row 1 */}
        <div className="info-item">
          <div className="info-item-row">
            <Phone size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Phone</span>
              <div className="info-value-row">
                <span className="info-value">{lead.phone}</span>
                <button
                  className="btn-copy"
                  onClick={() => onCopyText(lead.phone, 'Phone number')}
                  title="Copy Phone Number"
                  aria-label="Copy phone number"
                >
                  <Copy size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-item-row">
            <MapPin size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Location</span>
              <div className="info-value-row">
                <span className="info-value">{lead.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="info-item">
          <div className="info-item-row">
            <Mail size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Email</span>
              <div className="info-value-row">
                <span className="info-value">{lead.email}</span>
                <button
                  className="btn-copy"
                  onClick={() => onCopyText(lead.email, 'Email address')}
                  title="Copy Email Address"
                  aria-label="Copy email address"
                >
                  <Copy size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-item-row">
            <Target size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Lead Source</span>
              <div className="info-value-row">
                <span className="info-value">{lead.leadSource}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="info-item">
          <div className="info-item-row">
            <Building size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Company</span>
              <div className="info-value-row">
                <span className="info-value">{lead.company}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-item-row">
            <Globe size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Company Website</span>
              <div className="info-value-row">
                <span className="info-value" style={{ color: '#94a3b8' }}>
                  {lead.companyWebsite}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="info-item">
          <div className="info-item-row">
            <Briefcase size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Job Title</span>
              <div className="info-value-row">
                <span className="info-value">{lead.jobTitle}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-item-row">
            <Tag size={16} className="info-icon" />
            <div className="info-content">
              <span className="info-label">Interest / Need</span>
              <div className="info-value-row">
                <span className="info-value">{lead.interestNeed}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <>
            <div className="info-item">
              <div className="info-item-row">
                <Info size={16} className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Preferred Contact Time</span>
                  <div className="info-value-row">
                    <span className="info-value">Weekdays (10:00 AM - 4:00 PM)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-item-row">
                <Tag size={16} className="info-icon" />
                <div className="info-content">
                  <span className="info-label">Estimated Budget</span>
                  <div className="info-value-row">
                    <span className="info-value">₹50L - ₹1.5 Cr</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <button
        className="show-more-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Show less details' : 'Show more details'}</span>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    </div>
  );
};
