"use client";

import React from "react";
import classes from "./footer.module.css";
import {
  petSupplements,
  humanSupplements,
  contactInfo,
  aboutLinks,
  termsLinks,
  socialLinks,
} from "./data/data";
import Button from "./button";

interface NutramaxFooterProps {
  logo?: React.ReactNode;
}

interface FooterSectionProps {
  title: string;
  links: { label: string; path: string }[];
}
const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className={classes.section_group}>
    <h3>{title}</h3>
    {links.map((link) => (
      <Button
        key={link.label}
        type="link"
        label={link.label}
        path={link.path}
        target="_blank"
      />
    ))}
  </div>
);

const supplementSections = [
  ...petSupplements.map((s) => ({
    title: s.title,
    links: s.links.map((l) => ({ label: l.header, path: l.path })),
  })),
  ...humanSupplements.map((s) => ({
    title: s.title,
    links: s.links.map((l) => ({ label: l.header, path: l.path })),
  })),
];
const aboutSection = {
  title: "About Nutramax",
  links: aboutLinks.map((l) => ({ label: l.title, path: l.path })),
};
const contactSection = {
  title: "Contact Information",
  links: contactInfo.map((c) => ({ label: c.title, path: c.path })),
};
const vetSection = {
  title: "Veterinary Services",
  links: [
    { label: "MyNutramax Dashboard", path: "https://mynutramax.com/login/" },
  ],
};

const Footer = ({ logo }: NutramaxFooterProps) => {
  return (
    <footer className={classes.footer_container}>
      {/* Logo */}
      <div className={classes.logo_container}>
        <a
          href="https://www.nutramaxlabs.com/"
          target="_blank"
          aria-label="Nutramax Home"
        >
          {logo}
        </a>
      </div>
      {/* Top Section */}
      <div className={classes.top_section}>
        {supplementSections.map((sec) => (
          <FooterSection key={sec.title} title={sec.title} links={sec.links} />
        ))}
        <FooterSection {...contactSection} />
        <FooterSection {...aboutSection} />
        <FooterSection {...vetSection} />
      </div>
      {/* Bottom Section */}
      <div className={classes.bottom_section}>
        <div className={classes.social_and_terms_container}>
          <div className={classes.social_container}>
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                className={classes.social_link}
              >
                <img src={s.src} alt={s.alt} />
                {s.label}
              </a>
            ))}
          </div>
          <div className={classes.terms_container}>
            {termsLinks.map((t) => (
              <Button key={t.title} type="link" label={t.title} path={t.path} target="_blank"/>
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
