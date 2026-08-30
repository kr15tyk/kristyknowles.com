export type WorkVisualVariant = 'feature' | 'analysis' | 'roster'

type Props = {
  variant: WorkVisualVariant
  compact?: boolean
}

const rosterGroups = Array.from({ length: 4 }, (_, groupIndex) =>
  Array.from({ length: 15 }, (_, playerIndex) => groupIndex * 15 + playerIndex + 1),
)

export default function WorkVisual({ variant, compact = false }: Props) {
  const className = `work-visual work-visual-${variant}${compact ? ' work-visual-compact' : ''}`

  if (variant === 'feature') {
    return (
      <div className={className} role="img" aria-label="Editorial feature layout for the Denae Benites profile, showing the headline, reporting trail, and factual-review status">
        <div className="visual-topline">
          <span>She’s On First</span>
          <b>FEATURE / 01</b>
        </div>
        <div className="feature-layout">
          <div className="feature-copy">
            <span className="visual-kicker">THE FIRST HOME RUN WAS ONLY THE BEGINNING</span>
            <strong>Denae Benites found the stage baseball had denied her.</strong>
            <p>A player feature built from official records, independent reporting, and a visible source trail.</p>
          </div>
          <div className="feature-reporting">
            <span className="feature-status">FACTUAL REVIEW PENDING</span>
            <div className="reporting-card">
              <b>REPORTING TRAIL</b>
              <span><i /> Team USA records</span>
              <span><i /> Independent reporting</span>
              <span><i /> WPBL box scores</span>
            </div>
          </div>
        </div>
        <div className="visual-footer"><span>WRITING</span><span>RESEARCH</span><span>DATA INTEGRATION</span></div>
      </div>
    )
  }

  if (variant === 'analysis') {
    return (
      <div className={className} role="img" aria-label="WPBL analysis board showing the workflow from official box scores through transparent qualification thresholds">
        <div className="visual-topline">
          <span>WPBL / FIRST MONTH</span>
          <b>DATA NOTE / 02</b>
        </div>
        <div className="analysis-layout">
          <div className="analysis-heading">
            <span className="visual-kicker">EARLY SIGNAL · VISIBLE UNCERTAINTY</span>
            <strong>What can the first month tell us?</strong>
          </div>
          <div className="analysis-board">
            <div className="analysis-path" aria-hidden="true">
              <span>Official<br />box scores</span><i>→</i>
              <span>Clean<br />records</span><i>→</i>
              <span>Player<br />totals</span><i>→</i>
              <span>Qualified<br />leaders</span>
            </div>
            <div className="analysis-methods">
              <div><span>PA</span><b>Opportunity visible</b></div>
              <div><span>IP</span><b>Workload visible</b></div>
              <div><span>Q</span><b>Thresholds applied</b></div>
            </div>
          </div>
        </div>
        <div className="visual-footer"><span>SAMPLE SIZE</span><span>METHODOLOGY</span><span>CONTEXT</span></div>
      </div>
    )
  }

  return (
    <div className={className} role="img" aria-label="The Inaugural 60 data product shown as four opening-day roster groups containing exactly sixty player records">
      <div className="visual-topline">
        <span>THE INAUGURAL 60</span>
        <b>DATA PRODUCT / 03</b>
      </div>
      <div className="roster-layout">
        <div className="roster-summary">
          <span className="visual-kicker">A FOUNDING CLASS, STRUCTURED TO LAST</span>
          <strong><em>60</em> player records</strong>
          <p>Four opening-day rosters. One source-backed record.</p>
        </div>
        <div className="roster-grid" aria-hidden="true">
          {rosterGroups.map((group, groupIndex) => (
            <div className="roster-group" key={groupIndex}>
              <span>ROSTER {String(groupIndex + 1).padStart(2, '0')}</span>
              <div>
                {group.map((playerNumber) => <i key={playerNumber}>{String(playerNumber).padStart(2, '0')}</i>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="visual-footer"><span>PROFILES</span><span>STATS</span><span>SOURCE TRAILS</span></div>
    </div>
  )
}
