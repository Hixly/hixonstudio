import {
  ASSISTANT_URGENT,
  CLINICIAN_URL,
  DEMO_URL,
  DISCLOSURE,
  ON_TRACK,
  PATIENT_URL,
  contents,
  flags,
  narrative,
  sources,
  tierLabel,
} from "@/lib/cardiacpath";

function DemoLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="cp-sr"> (opens in a new tab)</span>
    </a>
  );
}

export default function Landing() {
  return (
    <>
      <a className="cp-skip" href="#content">
        Skip to content
      </a>
      <header className="cp-header">
        <a href="#content">
          <img
            className="cp-logo"
            src="/cardiacpath/logo-h-white.png"
            alt="CardiacPath"
            width={132}
            height={28}
          />
        </a>
        <DemoLink className="cp-header-link" href={DEMO_URL}>
          {narrative.headerDemo}
        </DemoLink>
      </header>
      <div className="cp-intro">
        <div className="cp-wrap" id="content">
          <p className="cp-kicker">{narrative.kicker}</p>
          <h1>{narrative.title}</h1>
          <p className="cp-lede">{narrative.lede}</p>
          <div className="cp-actions">
            <DemoLink className="cp-button" href={DEMO_URL}>
              {narrative.openDemo}
            </DemoLink>
            <a className="cp-textlink" href="#morning">
              {narrative.howMorning}
            </a>
          </div>
          <p className="cp-disclosure">{DISCLOSURE}</p>
          <ul className="cp-contents">
            {contents.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main>
        <section className="cp-section" id="gap">
          <div className="cp-wrap">
            <h2>{narrative.gapTitle}</h2>
            {narrative.gap.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="cp-section" id="doors">
          <div className="cp-wrap">
            <h2>{narrative.doorsTitle}</h2>
            <div className="cp-doors">
              <article className="cp-door">
                <h3>{narrative.patientTitle}</h3>
                <p>{narrative.patientBody}</p>
                <DemoLink href={PATIENT_URL}>{narrative.patientCta}</DemoLink>
              </article>
              <article className="cp-door">
                <h3>{narrative.teamTitle}</h3>
                <p>{narrative.teamBody}</p>
                <DemoLink href={CLINICIAN_URL}>{narrative.teamCta}</DemoLink>
              </article>
            </div>
          </div>
        </section>

        <section className="cp-section" id="morning">
          <div className="cp-wrap">
            <h2>{narrative.morningTitle}</h2>
            <p>{narrative.morningIntro}</p>
            <ol className="cp-steps">
              {narrative.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cp-section" id="rules">
          <div className="cp-wrap">
            <h2>{narrative.rulesTitle}</h2>
            <p>{narrative.rulesIntro}</p>
            <div>
              {flags.map((flag) => (
                <div className="cp-rule" key={flag.label}>
                  <div className={`cp-tier ${flag.tier}`}>{tierLabel[flag.tier]}</div>
                  <p>
                    <strong>{flag.label}.</strong> {flag.when}.
                  </p>
                </div>
              ))}
              <div className="cp-rule">
                <div className="cp-tier track">{tierLabel.track}</div>
                <p>
                  <strong>{tierLabel.track}.</strong> {ON_TRACK}
                </p>
              </div>
            </div>
            {narrative.rulesNotes.map((note, index) => (
              <p className={index === 0 ? "cp-follow" : undefined} key={note}>
                {note}
              </p>
            ))}
          </div>
        </section>

        <section className="cp-section" id="assistant">
          <div className="cp-wrap">
            <h2>{narrative.assistantTitle}</h2>
            {narrative.assistantBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote className="cp-quote">{ASSISTANT_URGENT}</blockquote>
          </div>
        </section>

        <section className="cp-section" id="program">
          <div className="cp-wrap">
            <h2>{narrative.programTitle}</h2>
            {narrative.program.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="cp-section" id="limits">
          <div className="cp-wrap">
            <h2>{narrative.limitsTitle}</h2>
            {narrative.limits.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="cp-section" id="sources">
          <div className="cp-wrap">
            <h2>{narrative.sourcesTitle}</h2>
            <p>{narrative.sourcesIntro}</p>
            <ul className="cp-sources">
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href}>{source.title}</a>
                  {". "}
                  {source.detail}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="cp-wrap cp-foot">
        <img
          src="/cardiacpath/logo-h-navy.png"
          alt="CardiacPath"
          width={104}
          height={22}
        />
        <p>{narrative.foot}</p>
      </footer>
    </>
  );
}
