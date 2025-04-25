"use client";

import Image from "next/image";
import classes from "./topbar.module.css";
import { filaquinLogo } from "@/public";

const TopBar = () => {
  return (
    <div className={classes.top_bar}>
      <div className={classes.logo_container}>
        <Image src={filaquinLogo} alt="Filaquin Brand" fill priority />
      </div>
    </div>
  );
};
export default TopBar;
