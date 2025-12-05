"use client";

import classes from "./hero.module.css";
import Image from "next/image";
import { nmxSmallLogoSVG, dogIMG, filaquinBag } from "../../public";
import Button from "./button";
import { useState } from "react";
import { vendors } from "./data/data";
import ShopModal from "./modal";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.hero_section}>
      <div className={classes.hero_content_container}>
        <div className={classes.logo_container}>
          <Image
            className={classes.logo_img}
            src={nmxSmallLogoSVG}
            alt={"Nutramax logo"}
            fill
          />
        </div>
        <h1>
          Support Your Dog’s Anal Gland Health with Filaquin<span>&#8482;</span>
        </h1>
        <p className={classes.hero_content_p}>
          Contains fiber to help support normal stool consistency, along with
          prebiotics and postbiotics to support digestive health.
        </p>
        <Button
          type="shop"
          imported_class={classes["shop-primary"]}
          onClick={() => setOpen(true)}
        />
        <ShopModal
          isOpen={open}
          onClose={() => setOpen(false)}
          productName="Filaquin Anal Gland Supplement"
          count="90"
          productImage={filaquinBag}
          vendors={vendors}
        />
      </div>
      <div className={classes.dog_img_container}>
        <Image
          className={classes.dog_img}
          src={dogIMG}
          alt={"Stinky dog image"}
          fill
        />
      </div>
    </div>
  );
};
export default Hero;
