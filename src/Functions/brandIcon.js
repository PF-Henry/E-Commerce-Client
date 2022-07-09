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

const brandIcon = (brandName) => {
  switch (brandName) {
    case "Apple":
      return <SiApple />;
    case "Hp":
      return <SiHp />;
    case "Epson":
      return <SiEpson />;
    case "Nintendoswitch":
      return <SiNintendoswitch />;
    case "Logitech":
      return <SiLogitech />;
    case "Xbox":
      return <SiXbox />;
    case "Playstation5":
      return <SiPlaystation5 />;
    case "Samsung":
      return <SiSamsung />;
    case "Huawei":
      return <SiHuawei />;
    case "Lg":
      return <SiLg />;
    case "Xiaomi":
      return <SiXiaomi />;
    case "Lenovo":
      return <SiLenovo />;
    case "Asus":
      return <SiAsus />;
    case "Dell":
      return <SiDell />;
    default:
      return <div>Brand not found!</div>;
  }
};

export default brandIcon;
