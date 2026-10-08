import React, { useState } from 'react';
import { initialLead, initialTimelineItems } from '../data/mockLead';
import { CallState, CallOutcome, TimelineItem } from '../types/lead';

import { LeadHeader } from './LeadHeader';
import { StageProgress } from './StageProgress';
import { RecommendedAction } from './RecommendedAction';
import { CallOptions } from './CallOptions';
import { CallingState } from './CallingState';
import { CallCompletedState } from './CallCompletedState';
import { SecondaryActions } from './SecondaryActions';
import { LeadInformation } from './LeadInformation';
import { ActivityTabs } from './ActivityTabs';
import { ActivityComposer } from './ActivityComposer';
import { ActivityTimeline } from './ActivityTimeline';
import { BottomWorkflowBar } from './BottomWorkflowBar';
import { Toast } from './Toast';

export const LeadDetailPanel: React.FC = () => {
  const [lead, setLead] = useState(initialLead);
  const [callState, setCallState] = useState<CallState>('default');
  const [callDuration, setCallDuration] = useState<number>(12);
  const [activeTab, setActiveTab] = useState<string>('Activity');
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>(initialTimelineItems);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger Toast Notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Clipboard copy handler
  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    showToast(`${label} copied to clipboard!`);
  };

  // Call options actions
  const handleCallNowClick = () => {
    if (callState === 'options') {
      setCallState('default');
    } else {
      setCallState('options');
    }
  };

  const handleCallBrowser = () => {
    setCallState('calling');
    setCallDuration(0);
    showToast('Starting browser call...');
  };

  const handleCallPhoneApp = () => {
    setCallState('default');
    showToast(`Opening phone app call to ${lead.phone}...`);
  };

  const handleCopyNumber = () => {
    handleCopyText(lead.phone, 'Phone number');
    setCallState('default');
  };

  // Calling state end call
  const handleEndCall = (durationSecs: number) => {
    setCallDuration(durationSecs);
    setCallState('completed');
  };

  // Call completed save note
  const handleSaveCallNote = (noteText: string, outcome: CallOutcome) => {
    const formattedDuration = `${Math.floor(callDuration / 60)}m ${callDuration % 60}s`;
    const newTimelineItem: TimelineItem = {
      id: Date.now().toString(),
      type: 'call',
      title: `Call completed (${outcome})`,
      subtitle: noteText ? `Note: "${noteText}" • Duration: ${formattedDuration}` : `Call duration: ${formattedDuration}`,
      author: 'Rohan Mehta',
      timestamp: 'Oct 08, 2026, 11:28 AM',
      outcome
    };

    setTimelineItems([newTimelineItem, ...timelineItems]);
    setCallState('default');
    showToast('Call details and note saved successfully!');
  };

  const handleCancelCompleted = () => {
    setCallState('default');
  };

  // Composer note submission
  const handleAddComposerNote = (noteText: string) => {
    const newTimelineItem: TimelineItem = {
      id: Date.now().toString(),
      type: 'note',
      title: 'Note added',
      subtitle: noteText,
      author: 'Rohan Mehta',
      timestamp: 'Oct 08, 2026, 11:28 AM'
    };
    setTimelineItems([newTimelineItem, ...timelineItems]);
    showToast('Note added to timeline');
  };

  // Bottom workflow actions
  const handleDisqualify = () => {
    setLead((prev) => ({ ...prev, stage: 'Disqualified' }));
    showToast('Lead marked as Disqualified');
  };

  const handleQualify = () => {
    setLead((prev) => ({ ...prev, stage: 'Qualified' }));
    showToast('Lead moved to Qualified stage!');
  };

  return (
    <div className="panel-container">
      {/* Lead Header */}
      <LeadHeader lead={lead} />

      {/* Stage Progress Bar */}
      <StageProgress stageName={lead.stage} currentStep={1} totalSteps={5} />

      {/* Main Panel Content Area */}
      <div className="panel-content">
        {/* Dynamic Call Action Card based on Call State */}
        {callState === 'default' && (
          <RecommendedAction
            phone={lead.phone}
            onCallClick={handleCallNowClick}
            onDropdownClick={handleCallNowClick}
            isOptionsOpen={false}
          />
        )}

        {callState === 'options' && (
          <div style={{ position: 'relative' }}>
            <RecommendedAction
              phone={lead.phone}
              onCallClick={handleCallNowClick}
              onDropdownClick={handleCallNowClick}
              isOptionsOpen={true}
            />
            <CallOptions
              phone={lead.phone}
              onCallBrowser={handleCallBrowser}
              onCallPhoneApp={handleCallPhoneApp}
              onCopyNumber={handleCopyNumber}
            />
          </div>
        )}

        {callState === 'calling' && (
          <CallingState phone={lead.phone} onEndCall={handleEndCall} />
        )}

        {callState === 'completed' && (
          <CallCompletedState
            durationSeconds={callDuration}
            onSaveNote={handleSaveCallNote}
            onCancel={handleCancelCompleted}
          />
        )}

        {/* Secondary Actions Row */}
        <SecondaryActions phone={lead.phone} />

        {/* Lead Information Card */}
        <LeadInformation lead={lead} onCopyText={handleCopyText} />

        {/* Activity Navigation Tabs */}
        <ActivityTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        {activeTab === 'Activity' && (
          <>
            <ActivityComposer onAddNote={handleAddComposerNote} />
            <ActivityTimeline items={timelineItems} />
          </>
        )}

        {activeTab !== 'Activity' && (
          <div style={{ padding: '24px 0', textAlign: 'center', color: '#64748b', fontSize: '14px' }}>
            No recent {activeTab.toLowerCase()} entries for this lead.
          </div>
        )}
      </div>

      {/* Bottom Workflow Action Bar */}
      <BottomWorkflowBar onDisqualify={handleDisqualify} onQualify={handleQualify} />

      {/* Toast Feedback Banner */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
};
