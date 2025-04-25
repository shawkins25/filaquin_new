import classes from "./content.module.css";
import { contentBullets } from "./data/data";
import { filaquinBag, nmxSmallLogo } from "../../public";
import Image from "next/image";

const Content = () => {
  return (
    <div className={classes.content_section_container}>
      <div className={classes.desktop_product_section}>
        <div className={classes.desktop_product_img_container}>
          <Image
            className={classes.product_img}
            src={filaquinBag}
            alt={"product image"}
            fill
          />
        </div>
        <div className={classes.desktop_product_logo_container}>
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
        </p>
      </div>
      <div className={classes.content_section}>
        <h1>
          Filaquin<span>&#8482;</span> Anal Gland Supplement For Dogs
        </h1>
        <h2>Count: 132 Soft Chews</h2>
        <ul>
          {contentBullets.map((item) => (
            <li key={item} className={classes.bullet_point}>
              {item}
            </li>
          ))}
        </ul>
        <p className={classes.exclusive}>
          Available Exclusively from your Veterinarian.
        </p>
      </div>
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
        <div className={classes.mobile_product_logo_container}>
          <Image
            className={classes.logo_img}
            src={nmxSmallLogo}
            alt={"Nutramax logo"}
            fill
          />
        </div></div>
        <p>
          *Source: Survey conducted among small animal veterinarians who
          recommended animal supplements.
        </p>
      </div>
    </div>
  );
};
export default Content;
