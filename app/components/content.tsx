"use client";

import classes from "./content.module.css";
import { contentBullets } from "./data/data";
import { filaquinBag, caretDown } from "../../public";
import Image from "next/image";
import Button from "./button";
import { useState } from "react";
import { vendors } from "./data/data";
import ShopModal from "./modal";

const Content = () => {
  const [count, setCount] = useState("90");
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.content_section_container}>
        <div className={classes.mobile_product_outer_section}>
          <div className={classes.mobile_product_section}>
            <div className={classes.mobile_product_img_container}>
              <Image
                className={classes.product_img}
                src={filaquinBag}
                alt={"product image"}
                fill
              />
            </div>
            {/* <div className={classes.mobile_product_logo_container}>
            <Image
              className={classes.logo_img}
              src={nmxSmallLogo}
              alt={"Nutramax logo"}
              fill
            />
          </div> */}
          </div>
          {/* <p>
          *Source: Survey conducted among small animal veterinarians who
          recommended animal supplements.
        </p> */}
        </div>
        <div className={classes.desktop_product_outer_section}>
          <div className={classes.desktop_product_section}>
            <div className={classes.desktop_product_img_container}>
              <Image
                className={classes.product_img}
                src={filaquinBag}
                alt={"product image"}
                fill
              />
            </div>
            {/* <div className={classes.desktop_product_logo_container}>
              <Image
                className={classes.logo_img}
                src={nmxSmallLogo}
                alt={"Nutramax logo"}
                fill
              />
            </div>
            <p>
              *Source: Survey conducted among small animal veterinarians who
              recommended animal supplements.
            </p> */}
          </div>
        </div>
        <div className={classes.content_section}>
          <h1>
            Filaquin<span>&#8482;</span> Anal Gland Supplement For Dogs
          </h1>
          <h3>Count: 132 Soft Chews</h3>
          <ul className={classes.content_bullet_list}>
            {contentBullets.map((item) => (
              <li key={item} className={classes.bullet_point}>
                {item}
              </li>
            ))}
          </ul>
          <div className={classes.shopping_container}>
            <div className={classes.count_container}>
              <label htmlFor="count">Count: </label>
              <select
                name="count"
                id="count"
                className={classes.select_wrapper}
                value={count}
                onChange={(e) => setCount(e.target.value)}
              >
                <option value="90">90 - Soft Chews</option>
                <option value="132">132 - Soft Chews</option>
              </select>

              <span className={classes.caret_icon} aria-hidden="true">
                {caretDown}
              </span>
            </div>
            {count === "132" ? (
              <p className={classes.exclusive}>
                Available Exclusively from your Veterinarian.
              </p>
            ) : (
              <Button
                type="shop"
                imported_class={classes["shop-primary"]}
                onClick={() => setOpen(true)}
              />
            )}
          </div>
          <ShopModal
            isOpen={open}
            onClose={() => setOpen(false)}
            productName="Filaquin Anal Gland Supplement"
            count="90"
            productImage={filaquinBag}
            vendors={vendors}
          />
        </div>
        {/* <div className={classes.mobile_product_outer_section}>
        <div className={classes.mobile_product_section}>
          <div className={classes.mobile_product_img_container}>
            <Image
              className={classes.product_img}
              src={filaquinBag}
              alt={"product image"}
              fill
            />
          </div>
          <div className={classes.mobile_product_logo_container}>
            <Image
              className={classes.logo_img}
              src={nmxSmallLogo}
              alt={"Nutramax logo"}
              fill
            />
          </div>
        </div>
        <p>
          *Source: Survey conducted among small animal veterinarians who
          recommended animal supplements.
        </p>
      </div> */}
      </div>
    </div>
  );
};
export default Content;
