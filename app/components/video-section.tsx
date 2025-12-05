import classes from "./video-section.module.css";
import Image from "next/image";
import img from "@/public/video_placeholder_3.png";
import Button from "./button";

const VideoSection = () => {
  return (
    <div className={classes.container}>
      <Button type="shop" imported_class={classes["shop-primary"]} />
      <div className={classes.video_container}>
        <Image className={classes.video_img} src={img} alt={""} fill />
      </div>
    </div>
  );
};

export default VideoSection;
