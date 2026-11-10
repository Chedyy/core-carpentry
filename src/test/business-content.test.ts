import { describe, expect, it } from "vitest";
import { BUSINESS, GOOGLE_RATING, SERVICES, googleReviews } from "@/data/mockData";

describe("Wood Core Carpentry content", () => {
  it("lists the nine services 01-09 in the required order", () => {
    expect(SERVICES.map((s) => `${s.number} ${s.title}`)).toEqual([
      "01 Residential Framing",
      "02 Finish Carpentry",
      "03 Custom Decks & Pergolas",
      "04 Home Renovations",
      "05 Interior Trim & Moulding",
      "06 Custom Woodworking",
      "07 Basement Finishing",
      "08 Door & Window Installation",
      "09 General Carpentry Repairs",
    ]);
  });

  it("states the Stamford / Fairfield County service area", () => {
    expect(BUSINESS.serviceAreaFull).toContain("Stamford, Greenwich, Darien, New Canaan, Norwalk, & Fairfield County, CT");
    expect(BUSINESS.serviceAreaFull).not.toMatch(/Westchester/);
  });

  it("shows a 5.0 Google rating header", () => {
    expect(GOOGLE_RATING.score).toBe("5.0");
    expect(GOOGLE_RATING.label).toBe("Based on Google Reviews");
  });

  it("only uses Connecticut towns for review locations", () => {
    for (const review of googleReviews) expect(review.location).toMatch(/, CT$/);
  });
});
