'use client'

import React from "react";
import classes from "./footer.module.css";
import {
  nutramaxSupplements,
  nutramaxSupplements2,
  contactInfo,
  aboutLinks,
  termsLinks,
  socialLinks,
} from "./data/data";
import Button from "./button";

interface NutramaxFooterProps {
  logo?: React.ReactNode; //svg or <img />
}

const Footer = ({ logo }: NutramaxFooterProps) => {
  return (
    <footer className={classes.footer_container}>
      {/* Logo Section */}
      <div className={classes.logo_container}>
        <a
          href="https://www.nutramaxlabs.com/"
          aria-label="Nutramax Home"
          target="_blank"
        >
          {logo}
          {/* <img src={logo} alt="Nutramax logo" className={classes.logo} /> */}
        </a>
      </div>
      <div className={classes.top_section}>
        {/* Supplements Section */}
        <div className={classes.supplements_container}>
          {nutramaxSupplements.map((category) => (
            <div className={classes.category_container} key={category.title}>
              <h3>{category.title}</h3>
              {category.links.map((link) => (
                <Button
                  key={link.header}
                  type="link"
                  label={link.header}
                  path={link.path}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={classes.supplements_container}>
          {nutramaxSupplements2.map((category) => (
            <div className={classes.category_container} key={category.title}>
              <h3>{category.title}</h3>
              {category.links.map((link) => (
                <Button
                  key={link.header}
                  type="link"
                  label={link.header}
                  path={link.path}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Contact Information Section */}
        <div className={classes.contact_container}>
          <h3>Contact Information</h3>
          {contactInfo.map((contact) => (
            <Button
              key={contact.title}
              type="link"
              label={contact.title}
              path={contact.path}
            />
          ))}
        </div>
        <div className={classes.about_vet_container}>
          {/* About Section */}
          <div className={classes.about_container}>
            <h3>About Nutramax</h3>
            {aboutLinks.map((link) => (
              <Button
                key={link.title}
                type="link"
                label={link.title}
                path={link.path}
              />
            ))}
          </div>
        </div>
        <div className={classes.about_vet_container}>
          {/* Vet Services Section */}
          <div className={classes.vet_container}>
            <h3>Veterinary Services</h3>
            <Button
              key={"Vet Services"}
              type="link"
              label={"MyNutramax Dashboard"}
              path={"https://mynutramax.com/login/"}
            />
          </div>
        </div>
      </div>
      <div className={classes.bottom_section}>
        {/* Social and Terms Section */}
        <div className={classes.social_and_terms_container}>
          <div className={classes.social_container}>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                className={classes.social_link}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.src} alt={link.alt} />
                {link.label}
              </a>
            ))}
          </div>
          <div className={classes.terms_container}>
            {termsLinks.map((link) => (
              <Button
                key={link.title}
                type="link"
                label={link.title}
                path={link.path}
              />
            ))}
          </div>
        </div>
        <div className={classes.disclaimer_container}>
          <p>
            Veterinary supplements are sold by Nutramax Laboratories Veterinary
            Sciences, Inc.
          </p>
          <p>
            Human supplements are sold by Nutramax Laboratories Consumer Care,
            Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
