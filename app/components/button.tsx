"use client";

import React from "react";
import classes from "./button.module.css";
import logoSRC from "../../public/logo.svg";
import Image from "next/image";
import cartIcon from "@/public/cart.svg";

export interface ButtonProps {
  id?: string;
  type: string;
  label?: string;
  logo?: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  aria_label?: string;
  target?: string;
  imported_class?: string;
  disabled?: boolean;
  path?: string;
  menuList?: { title: string; links: { header: string; path: string }[] }[];
  mobileMenuList?: {
    title: string;
    links: { header: string; img: string; path: string }[];
  }[];
  isActive?: boolean;
  onDropdownToggle?: (id: string) => void;
}

const Button = ({
  id,
  type,
  label,
  logo,
  onClick,
  aria_label,
  target,
  imported_class,
  path,
  menuList,
  mobileMenuList,
  isActive = false,
  onDropdownToggle,
}: ButtonProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    console.log("Button clicked:", id, "isActive:", isActive);
    if (type === "dropdown" && id && onDropdownToggle) {
      onDropdownToggle(id);
    }
    if (onClick) onClick(event);
  };

  const baseClass = `${classes.button} ${imported_class} ${
    isActive ? classes.active : ""
  }`;

  if (type === "link" && path) {
    return (
      <a
        href={path || "#"}
        className={`${baseClass} ${classes.link}`}
        target={target}
        onClick={handleClick}
      >
        {label}
      </a>
    );
  } else if (type === "logo") {
    return (
      <a
        href={path || "#"}
        className={`${baseClass} ${classes.link} ${classes.logo_link}`}
        aria-label={aria_label}
        target={target}
        onClick={handleClick}
      >
        {logo ? (
          logo
        ) : (
          <img src={logoSRC} alt="Nutramax logo" className={classes.logo} />
        )}
      </a>
    );
  } else if (type === "jump") {
    return (
      <button id={id} className={`${baseClass}`} onClick={handleClick}>
        {label}
      </button>
    );
  } else if (type === "shop") {
    return (
      <button
        id={id}
        className={`${baseClass} ${classes.shop}`}
        onClick={handleClick}
      >
        SHOP HERE
        <div className={classes.icon_container}>
          <Image src={cartIcon} alt="" fill />
        </div>
      </button>
    );
  } else if (type === "dropdown") {
    return (
      <div className={`${classes.dropdown} ${isActive ? classes.active : ""}`}>
        <button
          id={id}
          className={`${classes.button} ${
            classes.dropdown_button
          } ${imported_class} ${isActive ? classes.active : ""}`}
          onClick={handleClick}
          aria-label={aria_label || `${label} dropdown`}
          aria-expanded={isActive}
        >
          {label}
        </button>
        {isActive && menuList && (
          <div className={classes.dropdown_menu}>
            {menuList?.map((category, index) => (
              <div key={index} className={classes.dropdown_category}>
                <h3 className={classes.dropdown_title}>{category.title}</h3>
                <ul className={classes.dropdown_list}>
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.path}
                        className={classes.dropdown_link}
                        onClick={handleClick}
                        target="_blank"
                      >
                        {link.header}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {isActive && mobileMenuList && (
          <div className={classes.mobile_dropdown_menu}>
            {mobileMenuList?.map((category, index) => (
              <div key={index} className={classes.mobile_dropdown_category}>
                <h3 className={classes.mobile_dropdown_title}>
                  {category.title}
                </h3>
                <ul className={classes.mobile_dropdown_list}>
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.path}
                        className={classes.mobile_dropdown_link}
                        onClick={handleClick}
                        target="_blank"
                      >
                        {link.img && <img src={link.img} alt="product image" />}
                        <div>{link.header}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else if (type === "submit") {
    return (
      <button
        id={id}
        className={`${baseClass} ${classes.submit}`}
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button id={id} className={`${baseClass}`} onClick={handleClick}>
        {label}
      </button>
    );
  }
};

export default Button;
