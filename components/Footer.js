import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background: "#f2f5ff",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <span
        style={{
          color: "#03344F",
          fontSize: "20px",
          fontFamily: "cursive",
          width: "60%",
          textAlign: "center",
        }}
      >
        श्री ଭବାନୀ ଇଲେକ୍ଟ୍ରୋନିକ୍ସ,ଫର୍ଣ୍ଣିଚର ଓ ମୋବାଇଲ
      </span>
      <span
        style={{
          width: "40%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <a href="https://www.facebook.com/ShreeBhavaniEFM/">
          <Image quality={1} width={40} height={40} src={"/facebook.svg"} />
        </a>
        <a href="https://www.instagram.com/shreebhavaniefm/">
          <Image quality={1} width={40} height={40} src={"/instagram.svg"} />
        </a>
        <a href="https://wa.me/919776541841?text=Hi">
          <Image quality={1} width={40} height={40} src={"/whatsapp.svg"} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
