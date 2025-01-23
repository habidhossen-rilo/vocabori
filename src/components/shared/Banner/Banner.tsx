import Image from "next/image";
import style from "./banner.module.css";

const Banner = () => {
  return (
    <div className={style.bannerContainer}>
      <Image src="/banner.png" alt="banner" width={900} height={300} />
    </div>
  );
};

export default Banner;
