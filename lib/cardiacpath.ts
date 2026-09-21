export const DEMO_URL = "https://cardiacpath-production.up.railway.app";
export const PATIENT_URL = `${DEMO_URL}/patient`;
export const CLINICIAN_URL = `${DEMO_URL}/clinician`;

export const DISCLOSURE =
  "Demo build. Synthetic data only. Not for clinical use. Not HIPAA-cleared.";

export const ASSISTANT_URGENT =
  "This could be serious. If you're having chest pain or pressure, trouble breathing, or you feel faint, stop what you're doing and call 911 now. I've flagged your care team as well. Do not wait to see if it passes.";

export const ON_TRACK =
  "On track. Check-ins complete and vitals within target.";

export type Tier = "emergent" | "attention" | "track";

export type Flag = {
  tier: Tier;
  when: string;
  label: string;
};

export const flags: Flag[] = [
  {
    tier: "emergent",
    when: "Chest pain or pressure reported at today's check-in",
    label: "Chest pain reported",
  },
  {
    tier: "emergent",
    when: "Dizziness or a fainting episode reported",
    label: "Dizziness or fainting",
  },
  {
    tier: "emergent",
    when: "Shortness of breath reported",
    label: "Shortness of breath",
  },
  {
    tier: "emergent",
    when: "Blood pressure at or above 180 systolic or 110 diastolic",
    label: "Hypertensive crisis",
  },
  {
    tier: "emergent",
    when: "Resting heart rate 120 or higher",
    label: "Tachycardia",
  },
  {
    tier: "emergent",
    when: "Oxygen saturation under 90%",
    label: "Low oxygen saturation",
  },
  {
    tier: "emergent",
    when: "Weight up 3 lb in 24 hours",
    label: "Rapid weight gain",
  },
  {
    tier: "emergent",
    when: "Weight up 5 lb in 7 days",
    label: "Weight gain this week",
  },
  {
    tier: "attention",
    when: "Rapid or irregular heartbeat reported",
    label: "Palpitations",
  },
  {
    tier: "attention",
    when: "Swelling in the legs or ankles reported",
    label: "Peripheral swelling",
  },
  {
    tier: "attention",
    when: "Unusual tiredness with normal activity reported",
    label: "Unusual fatigue",
  },
  {
    tier: "attention",
    when: "Concern about the surgical or access site",
    label: "Incision site concern",
  },
  {
    tier: "attention",
    when: "Blood pressure at or above 160 systolic or 100 diastolic, unless it has already reached 180 systolic or 110 diastolic",
    label: "Elevated blood pressure",
  },
  {
    tier: "attention",
    when: "Systolic blood pressure under 90",
    label: "Low blood pressure",
  },
  {
    tier: "attention",
    when: "Resting heart rate above 100 and under 120",
    label: "High resting heart rate",
  },
  {
    tier: "attention",
    when: "Resting heart rate under 45",
    label: "Low heart rate",
  },
  {
    tier: "attention",
    when: "Oxygen saturation under 93% and at least 90%",
    label: "Borderline oxygen",
  },
  {
    tier: "attention",
    when: "Weight up 2 lb in a day or 3 lb in a week, below the emergent weight cut",
    label: "Weight trending up",
  },
  {
    tier: "attention",
    when: "Effort rated 15 or higher out of 20",
    label: "Exercise felt hard",
  },
  {
    tier: "attention",
    when: "Today's cardiac medications not logged",
    label: "Missed medication today",
  },
  {
    tier: "attention",
    when: "Any medication under 70% adherence over 14 days",
    label: "Low medication adherence",
  },
  {
    tier: "attention",
    when: "Any refill with 2 days of supply or less",
    label: "Refill running out",
  },
  {
    tier: "attention",
    when: "Rehab attendance under 60% this period",
    label: "Missing rehab sessions",
  },
];

export const tierLabel: Record<Tier, string> = {
  emergent: "Emergent",
  attention: "Needs attention",
  track: "On track",
};

export const contents = [
  { href: "#gap", label: "The hours between sessions" },
  { href: "#doors", label: "Two ways into the demo" },
  { href: "#morning", label: "How a morning works" },
  { href: "#rules", label: "The rules, in the open" },
  { href: "#assistant", label: "What the assistant will say" },
  { href: "#program", label: "What the program still owns" },
  { href: "#limits", label: "What this beta is not" },
  { href: "#sources", label: "Sources" },
];

export const sources = [
  {
    title: "2023 AHA/ACC chronic coronary disease guideline",
    detail:
      "Class 1 referral to cardiac rehabilitation after a recent heart attack, stent, or bypass.",
    href: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001168",
  },
  {
    title: "42 CFR 410.49",
    detail:
      "Medicare cardiac rehab: up to 36 sessions, required components, and a treatment plan signed every 30 days.",
    href: "https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-410/subpart-B/section-410.49",
  },
  {
    title: "CMS Change Request 12497",
    detail:
      "As of January 1, 2024, a nonphysician practitioner may supervise cardiac rehab when direct-supervision rules are met.",
    href: "https://www.cms.gov/files/document/r12497cp.pdf",
  },
  {
    title: "AHA and AACVPR core components, 2024",
    detail:
      "Assessment, nutrition, weight, risk factors, psychosocial care, exercise, activity counseling, and program quality. Delivery can change. The components do not.",
    href: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001289",
  },
  {
    title: "Medicare participation, 2016 to 2017",
    detail:
      "24.4% of eligible fee-for-service beneficiaries attended at least one session. Among those who started, 26.9% completed 36 or more.",
    href: "https://www.ahajournals.org/doi/10.1161/CIRCOUTCOMES.119.005902",
  },
  {
    title: "2025 AHA/ACC high blood pressure guideline",
    detail:
      "The overarching treatment goal is under 130/80 mm Hg for adults, with stated exceptions.",
    href: "https://professional.heart.org/en/science-news/2025-high-blood-pressure-guideline/top-things-to-know",
  },
  {
    title: "American Heart Association, heart failure symptoms",
    detail:
      "Call the care team for a gain of more than 2 or 3 pounds in a day, or 5 pounds in a week. Call 911 for severe trouble breathing, chest pain, or fainting.",
    href: "https://www.heart.org/en/health-topics/heart-failure/warning-signs-of-heart-failure/managing-heart-failure-symptoms",
  },
];

export const narrative = {
  kicker: "Working beta for a cardiac rehab team",
  title: "CardiacPath",
  lede:
    "A companion for the hours between supervised sessions. The patient logs blood pressure, weight, medications, and symptoms. The care team sees a queue ordered by urgency, with the reason written out. The software flags. A clinician decides.",
  openDemo: "Open the working demo",
  headerDemo: "Working demo",
  howMorning: "How a morning works",
  gapTitle: "The hours between sessions",
  gap: [
    "Outpatient cardiac rehabilitation is the treatment, not an optional class. After a recent heart attack, stent, or bypass, referral is a Class 1 recommendation. Medicare Part B covers up to 36 one-hour sessions over up to 36 weeks. Each program has to include physician-prescribed exercise, risk-factor counseling, a psychosocial assessment, outcomes assessment, and an individualized treatment plan a physician reviews and signs every 30 days.",
    "The session is supervised. The other days are not. A missed antiplatelet, a quiet gain in weight, or a symptom that waits until the next visit is the gap this beta is built to show. It does not replace the treadmill, the exercise prescription, or the signed plan.",
    "Use of the program is still low. Among Medicare fee-for-service beneficiaries with a qualifying event in 2016, 24.4% attended at least one outpatient session. Of those who started, 26.9% completed 36 or more sessions. Those figures describe cardiac rehab in the United States. They are not results from CardiacPath.",
  ],
  doorsTitle: "Two ways into the demo",
  patientTitle: "Patient",
  patientBody:
    "Robert Hale, 62, day 21 of Phase II after a coronary stent. Ejection fraction 48%. His chart lists metoprolol, atorvastatin, aspirin, clopidogrel, and lisinopril, each with a plain-language reason. He can check in, read a short lesson, and ask the assistant a question.",
  patientCta: "Enter as Robert Hale",
  teamTitle: "Care team",
  teamBody:
    "Ana Alvarez, NP, is the synthetic rehab clinician. Her console is ten invented patients, sorted so emergent rows sit above the rest. Opening a row shows the trigger, the recent readings, medications, rehab attendance, and a way to message back. She is not a real clinician, and the panel is not a real census.",
  teamCta: "Enter as Ana Alvarez, NP",
  morningTitle: "How a morning works",
  morningIntro:
    "This is the path the demo was built to show. It takes a few minutes, and every step is already in the product.",
  steps: [
    "Open the patient app as Robert Hale and start today's check-in. Record blood pressure, heart rate, weight, symptoms, whether medications were taken, mood, minutes of activity, and effort on a 6 to 20 scale.",
    "The rules run in the browser. They do not call a model, and they do not name a condition.",
    "If the symptom is chest pain or pressure, Robert's row becomes Emergent. The reason on the row is the sentence \"Chest pain reported.\"",
    "Switch to the care team view. Robert moves to the top of the queue, with that reason attached.",
    "Open his chart. The same triggers, the recent trend, his medications, and a reply are on one screen.",
  ],
  rulesTitle: "The rules, in the open",
  rulesIntro:
    "The highest matching flag sets the tier. Emergent sorts above needs attention, which sorts above on track. If nothing matches, the row reads: On track. Check-ins complete and vitals within target.",
  rulesNotes: [
    "These cuts belong to this beta. They are printed here so a medical director can accept them, change them, or reject them. They are not a protocol for this hospital until a clinician owns them.",
    "Chest pain, trouble breathing, and fainting are 911 symptoms in the assistant. A rapid weight gain is a same-day flag for possible fluid. The beta places both in Emergent so neither is buried under a milder row. Whether those two kinds of red should share a tier is a clinical decision. The American Heart Association tells people with heart failure to call their team for a gain of more than 2 or 3 pounds in a day, or 5 pounds in a week, and to call 911 for chest pain, fainting, or severe trouble breathing.",
    "The 2025 blood pressure guideline sets an overarching treatment goal under 130/80 mm Hg. This beta does not flag that goal. It flags 160/100 for review and 180/110 as emergent. A reading of 148/86 can be above the treatment goal and still look quiet in the queue.",
    "The shortness-of-breath checkbox does not separate breathlessness at rest from breathlessness on a planned walk. At rest, the right action is 911. With exertion, the team may want a different flag. The entered heart rate is treated as a resting rate. Mood is stored and shown, and it does not by itself change the tier. A real psychosocial assessment still happens in the program.",
    "The weight rule is applied to every synthetic patient, including people whose event was a stent and whose chart does not say heart failure. A medical director may want that flag only when fluid retention is a real risk.",
  ],
  assistantTitle: "What the assistant will say",
  assistantBody: [
    "The assistant matches words. It is not a model, and it is not allowed to diagnose. Chest pain, chest pressure, trouble breathing, fainting, jaw pain, left-arm pain, and a cold sweat all take the same path: tell the patient to call 911, and flag the care team.",
    "The match is literal. A sentence that contains those words is treated as urgent, including a denial such as \"I did not faint.\" Over-calling toward 911 is the safer miss. Reading negation correctly is still unfinished.",
    "Outside that path it can explain a medicine in ordinary language, list how many days of supply are left, or send the care team a note. It will not say what a symptom is.",
  ],
  programTitle: "What the program still owns",
  program: [
    "Cardiac rehab is still a medically supervised secondary-prevention program. Since January 1, 2024, a nurse practitioner or other nonphysician practitioner may supervise the session when the rules for direct supervision are met. CardiacPath does not supervise exercise, and it does not sign the treatment plan.",
    "The 2024 AHA and AACVPR statement keeps the core of the program intact even when some of it is delivered at home: patient assessment, nutrition, weight, risk-factor management, psychosocial care, aerobic and strength training, activity counseling, and program quality. A new channel does not shrink that list.",
    "In the demo, the chart shows sessions completed out of 36, attendance, weekly active minutes against a target of 150, the phase, and an individualized treatment plan review counted on a 30-day cycle. The 150 minutes are an activity target in the demo. They are not a substitute for the supervised hour.",
    "Lessons cover warning signs, what a stent, bypass, or valve procedure changes at home, why each medicine exists, activity, daily weight, and mood. They are education for a synthetic patient. They are not orders.",
    "The census includes stent, bypass, a heart attack treated with a stent, valve replacement, and catheter ablation. Medicare eligibility is narrower than that list. Ablation by itself is not one of the usual covered indications. This demo is a workflow. It is not an eligibility engine.",
  ],
  limitsTitle: "What this beta is not",
  limits: [
    "Not a place to type a real name, medical record number, phone number, or real reading. Every patient was invented.",
    "Not HIPAA-cleared. A check-in stays in the browser tab. Closing the tab clears it. Nothing here is a medical record, and nothing is sent to an electronic health record.",
    "Not a diagnosis, a risk score, or a reason to wait before calling 911.",
    "Not security. This demo is a public web address. A code typed into the page would not protect a patient. A real pilot needs server-side accounts, a business associate agreement with every vendor that could see data, an audit log, and a medical director who signs the thresholds.",
    "Not evidence that CardiacPath changes mortality, enrollment, or adherence. The outcome numbers on this page are from published cardiac rehab research. This beta has not been studied.",
  ],
  sourcesTitle: "Sources",
  sourcesIntro:
    "Clinical facts on this page come from the documents below. Product facts come from the working demo this page links to.",
  foot:
    "Synthetic patients only. For a walkthrough with the rehab team, open the demo and follow the morning above.",
};

export function userFacingCopy(): string {
  const flagText = flags.map((flag) => `${flag.when} ${flag.label}`).join("\n");
  const sourceText = sources
    .map((source) => `${source.title} ${source.detail}`)
    .join("\n");
  return [
    DISCLOSURE,
    ASSISTANT_URGENT,
    ON_TRACK,
    flagText,
    sourceText,
    ...contents.map((item) => item.label),
    ...Object.values(tierLabel),
    ...Object.values(narrative).flatMap((value) =>
      Array.isArray(value) ? value : [value],
    ),
  ].join("\n");
}
