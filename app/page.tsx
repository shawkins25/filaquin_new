// import { NutramaxHeader, Footer } from "@shawkins25/nmx_lib";
import NutramaxHeader from "./components/header";
import Footer from "./components/footer";
import { headerLogo, footerLogo } from "@/public";
import Image from "next/image";
import classes from "./page.module.css";
import TopBar from "./components/topbar";
import Hero from "./components/hero";
import Content from "./components/content";
import Table from "./components/table";
import Bottom from "./components/bottom";
import VideoSection from "./components/video-section";

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
      <TopBar />
      <main className={classes.main}>
        <Hero />
        <VideoSection />
        <Content />
        <Table />
        <Bottom />
      </main>
      <Footer
        logo={
          <div className={classes.footer_logo_container}>
            <Image src={footerLogo} alt="Nutramax logo" fill />
          </div>
        }
      />
    </div>
  );
}
