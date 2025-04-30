import classes from "./bottom.module.css";
import Image from "next/image";
import { greenNMXLogo, vetClaimLogo } from "../../public";

const Bottom = () => {
  return (
    <div className={classes.section}>
      <div className={classes.logos_container}>
        <div className={classes.nmx_logo_container}>
          <Image src={greenNMXLogo} alt={"product image"} fill />
        </div>
        <div className={classes.vet_claim_container}>
          <Image src={vetClaimLogo} alt={"product image"} fill />
        </div>
      </div>
      <p className={classes.source}>
        *Source: Survey conducted among small animal veterinarians who
        recommended animal supplements
      </p>
    </div>
  );
};
export default Bottom;
