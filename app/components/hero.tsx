import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div className={classes.hero_section}>
      <div className={classes.hero_content_container}>
        <h1>Support Your Dog’s Anal Gland Health with Filaquin<span>&#8482;</span> </h1>
        <p>Filaquin<span>&#8482;</span> features NMXFBR4<span>&#8482;</span>, our proprietary blend of yeast extract (beta-glucan), apple fiber, yeast culture (postbiotic), and psyllium husk fiber. This combination offers both insoluble and soluble fibers along with prebiotics and postbiotics. Fiber helps support normal stool consistency while prebiotics and postbiotics help support digestive health. </p>
        <p className={classes.exclusive}>Available Exclusively from your Veterinarian.</p>
      </div>
    </div>
  );
};
export default Hero;
