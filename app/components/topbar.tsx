"use client";

import Image from "next/image";
import classes from "./topbar.module.css";
import { filaquinLogo, filaquinBag } from "@/public";
import Button from "./button";
import { useState } from "react";
import { vendors } from "./data/data";
import ShopModal from "./modal";

const TopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.top_bar}>
      <div className={classes.logo_container}>
        <Image src={filaquinLogo} alt="Filaquin Brand" fill priority />
      </div>
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
  );
};
export default TopBar;
