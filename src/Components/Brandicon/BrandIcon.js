import React from "react";
import {
  SiApple,
  SiHp,
  SiNintendoswitch,
  SiLogitech,
  SiXbox,
  SiPlaystation5,
  SiSamsung,
  SiHuawei,
  SiLg,
  SiEpson,
  SiXiaomi,
  SiLenovo,
  SiAsus,
  SiDell,
} from "react-icons/si";

const BrandIcon = (brandName) => {
  switch (brandName) {
    case "Apple":
      return <SiApple size={"2rem"} />;
    case "Hp":
      return <SiHp size={"2rem"} />;
    case "Epson":
      return <SiEpson size={"2rem"} />;
    case "Nintendoswitch":
      return <SiNintendoswitch size={"2rem"} />;
    case "Logitech":
      return <SiLogitech size={"2rem"} />;
    case "Xbox":
      return <SiXbox size={"2rem"} />;
    case "Playstation5":
      return <SiPlaystation5 size={"4rem"} />;
    case "Samsung":
      return <SiSamsung size={"2rem"} />;
    case "Huawei":
      return <SiHuawei size={"2rem"} />;
    case "Lg":
      return <SiLg size={"2rem"} />;
    case "Xiaomi":
      return <SiXiaomi size={"2rem"} />;
    case "Lenovo":
      return <SiLenovo size={"2rem"} />;
    case "Asus":
      return <SiAsus size={"2rem"} />;
    case "Dell":
      return <SiDell size={"2rem"} />;
    default:
      return <div>Brand not found!</div>;
  }
};

export default BrandIcon;
