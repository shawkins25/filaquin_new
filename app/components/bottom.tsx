import classes from "./bottom.module.css";
import Image from "next/image";
import { greenNMXLogo} from "../../public";
import Button from "./button";

const Bottom = () => {
  return (
    <div className={classes.section}>
      <div className={classes.content_container}>
        <div className={classes.logos_container}>
          <div className={classes.nmx_logo_container}>
            <Image src={greenNMXLogo} alt={"product image"} fill />
          </div>
          <p className={classes.source}>
            *Source: Survey conducted among small animal veterinarians who
            recommended animal supplements
          </p>
        </div>
        <Button
          type="link"
          path="https://www.nutramaxlabs.com/our-products/products-for-your-dog-cat-horse#List-of-Pet-Brands"
          label={"EXPLORE ALL NUTRAMAX SUPPLEMENTS"}
          target="_blank"
        />
      </div>
    </div>
  );
};
export default Bottom;
