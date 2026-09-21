import { ASSISTANT_URGENT, DEMO_URL, DISCLOSURE, flags, userFacingCopy } from "@/lib/cardiacpath";

describe("CardiacPath board copy", () => {
  const copy = userFacingCopy();

  it("keeps the required disclosures and the 911 path", () => {
    expect(copy).toContain(DISCLOSURE);
    expect(copy).toContain("Synthetic data only");
    expect(copy).toContain("Not for clinical use");
    expect(copy).toContain("Not HIPAA-cleared");
    expect(copy).toContain("call 911");
    expect(ASSISTANT_URGENT).toContain("call 911 now");
    expect(copy).toContain("do not name a condition");
    expect(copy).toContain("not allowed to diagnose");
    expect(copy.toLowerCase()).not.toContain("the assistant diagnoses");
  });

  it("does not use em dashes or double hyphens", () => {
    expect(copy).not.toContain("\u2014");
    expect(copy).not.toContain("\u2013");
    expect(copy).not.toContain("--");
  });

  it("points at the working demo and lists both urgent symptom flags", () => {
    expect(DEMO_URL).toBe("https://cardiacpath-production.up.railway.app");
    expect(flags.map((flag) => flag.label)).toEqual(
      expect.arrayContaining([
        "Chest pain reported",
        "Dizziness or fainting",
        "Shortness of breath",
      ]),
    );
  });

  it("does not claim the beta has clinical outcomes", () => {
    expect(copy).toContain("This beta has not been studied");
    expect(copy.toLowerCase()).not.toContain("reduces mortality");
    expect(copy.toLowerCase()).not.toContain("hipaa compliant");
    expect(copy.toLowerCase()).not.toContain("hipaa-compliant");
  });
});
