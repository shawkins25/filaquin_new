import { NutramaxHeader, Footer } from "@shawkins25/nmx_lib";
import { headerLogo, footerLogo } from "@/public";
import Image from "next/image";
import classes from "./page.module.css";
import TopBar from "./components/topbar";
import Hero from "./components/hero";
import Content from "./components/content";
import Table from "./components/table";
import Bottom from "./components/bottom";

export default function Home() {
  return (
    <div className={classes.page}>
      {/* <NutramaxHeader
        logo={
          <div className={classes.header_logo_container}>
            <Image src={headerLogo} alt="Nutramax logo" fill priority />
          </div>
        }
      /> */}
      <TopBar />
      <main className={classes.main}>
        <Hero />
        <Content />
        <Table />
        <Bottom />
      </main>
      {/* <Footer
        logo={
          <div className={classes.footer_logo_container}>
            <Image src={footerLogo} alt="Nutramax logo" fill />
          </div>
        }
      /> */}
    </div>
  );
}
