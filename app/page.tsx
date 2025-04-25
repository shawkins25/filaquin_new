import { NutramaxHeader } from "@shawkins25/nmx_lib";
import { headerLogo } from "@/public";
import Image from "next/image";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.page}>
      <NutramaxHeader
        logo={
          <div className={classes.header_logo_container}>
            <Image src={headerLogo} alt="Nutramax logo" fill priority />
          </div>
        }
      />
      <main className={classes.main}>
        <section className={classes.section_1}></section>
        <section className={classes.section_2}></section>
        <section className={classes.section_3}></section>
        <section className={classes.section_4}></section>
      </main>
      <footer className={classes.footer}>
        
      </footer>
    </div>
  );
}
