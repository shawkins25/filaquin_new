"use client";

import { useState, useRef, useEffect } from "react";
import classes from "./table.module.css";
import { tableData, ingredientsData } from "../components/data/data";

export default function Table() {
  const [activeTab, setActiveTab] = useState<"directions" | "ingredients">(
    "directions"
  );
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "directions", label: "Directions for Use" },
    { id: "ingredients", label: "Ingredients" },
  ]; // Update height whenever active tab changes

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [activeTab]);

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.card}>
          {/* Tabs */}
          <div className={classes.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${classes.tabButton} ${
                  activeTab === tab.id ? classes.activeTab : classes.inactiveTab
                }`}
                onClick={() =>
                  setActiveTab(tab.id as "directions" | "ingredients")
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Animated height wrapper */}
          <div
            className={classes.contentWrapper}
            style={{ height: height, transition: "height 0.4s ease" }}
          >
            <div ref={contentRef} className={classes.content}>
              {activeTab === "directions" && (
                <div>
                  <table className={classes.table}>
                    <thead>
                      <tr>
                        <th>Weight (lbs)</th>
                        <th>Number of soft chews per day</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.weight}</td>
                          <td>{row.chews}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className={classes.italicText}>
                    The number of soft chews administered may be increased or
                    decreased based on your veterinarian’s recommendation and
                    your pet’s stool consistency.
                  </p>
                </div>
              )}
              {activeTab === "ingredients" && (
                <div className={classes.ingredients_container}>
                  <div className={classes.paragraph}>
                    <h4 className={classes.heading}>Ingredients:</h4>
                    <p>{ingredientsData.proprietaryBlend}</p>
                  </div>
                  <div className={classes.paragraph}>
                    <h4 className={classes.heading}>Other Ingredients:</h4>
                    <p>{ingredientsData.otherIngredients}</p>
                  </div>
                  <div className={classes.paragraph}>
                    <h4 className={classes.heading}>Additional Information:</h4>
                    <h4 className={classes.heading}>
                      Your veterinarian is your best ally in managing your dog’s
                      health.
                    </h4>
                    <p>
                      If your dog has any condition that requires medical
                      attention, you should always consult your veterinarian.
                      Provide adequate water access during product
                      administration. If accidental overconsumption occurs,
                      contact a veterinary healthcare provider immediately.
                    </p>
                    <p>
                      Store in a cool, dry area out of direct sunlight. Reseal
                      closure securely after opening to ensure freshness. For
                      use in animals only. Keep out of the reach of children.
                      <br />
                      ♦Contains beta-1,3/1,6-glucan.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
