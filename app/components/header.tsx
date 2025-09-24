'use client'

import React from "react";
import classes from "./header.module.css";
import Button from "./button";

interface NutramaxHeaderProps {
  logo?: React.ReactNode; //svg or <img />
}

const NutramaxHeader = ({ logo }: NutramaxHeaderProps) => {
    
  return (
    <>
      <section
        className={`${classes.header_container} ${classes.material_symbols_rounded}`}
      >
        <div className={classes.left}>
          <Button
            type="logo"
            logo={logo}
            imported_class={`${classes.nav_item} ${classes.nav_logo_link}`}
            path="https://www.nutramaxlabs.com/"
            aria_label="Nutramax Home"
            // onClick={handleLinkClick}
            target="_blank"
          />
          <Button
            type="link"
            label="Over 30 Years of Unmatched Quality"
            imported_class={`${classes.nav_item} ${classes.years_quality_link}`}
            path="https://www.nutramaxlabs.com/"
            // onClick={handleLinkClick}
            target="_blank"
          />
        </div>
        <div className={classes.right}>
          <Button
            // id="supplements-dropdown"
            type="link"
            label="Nutramax Supplements"
            path="https://www.nutramaxlabs.com/our-products/products-for-your-dog-cat-horse"
            imported_class={`${classes.nav_item} ${classes.supplements_list_button}`}
            // menuList={nutramaxSupplements}
            // isActive={activeDropdown === "supplements-dropdown"}
            // onDropdownToggle={handleDropdownToggle}
            target="_blank"
          />
          <Button
            type="link"
            label="Contact Us"
            imported_class={`${classes.nav_item} ${classes.contact_button}`}
            path="https://www.nutramaxlabs.com/contact"
            // onClick={handleLinkClick}
            target="_blank"
          />
          <Button
            type="link"
            label="For Veterinarians"
            path="https://mynutramax.com/login/"
            imported_class={`${classes.nav_item} ${classes.for_vets_button}`}
            // onClick={handleLinkClick}
            target="_blank"
          />
        </div>
      </section>
      {/* {activeDropdown && (
        <div
          className={classes.backdrop}
          onClick={() => setActiveDropdown(null)}
        />
      )} */}
    </>
  );
};
export default NutramaxHeader;
