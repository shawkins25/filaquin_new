import classes from "./video-section.module.css";
import Image from "next/image";
import img from "@/public/video_placeholder_3.png";
import Button from "./button";

const VideoSection = () => {
  return (
    <div className={classes.container}>
      <Button type="shop" imported_class={classes["shop-primary"]} />
      <div className={classes.video_container}>
        {/* <Image className={classes.video_img} src={img} alt={""} fill /> */}
        <iframe
          src="https://fast.wistia.net/embed/iframe/vb74b8gcu7?web_component=true&seo=true"
          title="Filaquin Amazon A+ 90ct (4) Video"
          allow="autoplay; fullscreen"
          // allowtransparency="true"
          // frameborder="0"
          // scrolling="no"
          // class="wistia_embed"
          name="wistia_embed"
          width="100%"
          height="100%"
        ></iframe>
        <script src="https://fast.wistia.net/player.js" async></script>
      </div>
    </div>
  );
};

export default VideoSection;
