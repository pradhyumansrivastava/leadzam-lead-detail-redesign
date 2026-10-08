import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BottomWorkflowBarProps {
  onDisqualify: () => void;
  onQualify: () => void;
}

export const BottomWorkflowBar: React.FC<BottomWorkflowBarProps> = ({
  onDisqualify,
  onQualify,
}) => {
  return (
    <div className="bottom-workflow-bar">
      <div className="sync-status">
        <span className="sync-dot" />
        <span>Auto-sync active</span>
      </div>

      <div className="workflow-buttons">
        <button
          type="button"
          className="btn-disqualify"
          onClick={onDisqualify}
        >
          Mark Disqualified
        </button>

        <button
          type="button"
          className="btn-qualify"
          onClick={onQualify}
        >
          <span>Move to Qualified</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
