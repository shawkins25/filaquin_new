"use client";

import { useState } from "react";
import classes from "./table.module.css";

export default function Table() {
  const [activeTab, setActiveTab] = useState("directions");

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.card}>
          {/* Tabs */}
          <div className={classes.tabs}>
            <button
              className={`${classes.tabButton} ${
                activeTab === "directions"
                  ? classes.activeTab
                  : classes.inactiveTab
              }`}
              onClick={() => setActiveTab("directions")}
            >
              Directions for Use
            </button>
            <button
              className={`${classes.tabButton} ${
                activeTab === "ingredients"
                  ? classes.activeTab
                  : classes.inactiveTab
              }`}
              onClick={() => setActiveTab("ingredients")}
            >
              Ingredients
            </button>
          </div>
          {/* Content */}
          <div className={classes.content}>
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
                    <tr>
                      <td>&lt;15</td>
                      <td>½</td>
                    </tr>
                    <tr>
                      <td>15 - 25</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>26 - 50</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>51 - 75</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>&gt;75</td>
                      <td>4</td>
                    </tr>
                  </tbody>
                </table>
                <p className={classes.italicText}>
                  The number of soft chews administered may be increased or
                  decreased based on your veterinarian’s recommendation and your
                  pet’s stool consistency.
                </p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <div>
                <div className={classes.paragraph}>
                  <h3 className={classes.heading}>Ingredients:</h3>
                  <p className={classes.paragraph}>
                    Proprietary Blend NMXFBR4<span>&#8482;</span>: Yeast extract♦, apple fiber,
                    yeast culture (postbiotic), and psyllium husk fiber.....2000
                    mg.
                  </p>
                </div>
                <div className={classes.paragraph}>
                  <h3 className={classes.heading}>Other Ingredients:</h3>
                  <p className={classes.paragraph}>
                    Glycerin, green tea extract, lecithin, mixed tocopherols,
                    peanut flour, rosemary extract, silicon dioxide, starch, and
                    vegetable oil.
                  </p>
                </div>
                <div>
                  <h3 className={classes.heading}>Additional Information:</h3>
                  <p className={classes.boldParagraph}>
                    Your veterinarian is your best ally in managing your dog’s
                    health.
                  </p>
                  <p className={classes.paragraph}>
                    If your dog has any condition that requires medical
                    attention, you should always consult your veterinarian.
                    Provide adequate water access during product administration.
                    If accidental overconsumption occurs, contact a veterinary
                    healthcare provider immediately.
                  </p>
                  <p className={classes.paragraph}>
                    Store in a cool, dry area out of direct sunlight. Reseal
                    closure securely after opening to ensure freshness. For use
                    in animals only. Keep out of the reach of children.
                  </p>
                  <p className={classes.paragraph}>
                    ♦Contains beta-1,3/1,6-glucan.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
