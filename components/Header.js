import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        // height: "80px",
        display: "flex",
        alignItems: "center",
        padding: "0px 15px",
      }}
    >
      <span
        style={{
          color: "#054C73",
          fontWeight: 800,
          margin: "0px 10px",
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt="image"
          style={{
            // height: "80px",
            marginTop: "5px",
          }}
          height={80}
          width={80}
          src="/logo2.png"
        />
        <span
          style={{
            fontSize: "30px",
            fontFamily:'cursive',
            fontWeight:600
          }}
        >
          श्री Bhavani Electronics, Furniture & Mobiles
        </span>
        {/* (श्री ଭବାନୀ ଇଲେକ୍ଟ୍ରୋନିକ୍ସ,ଫର୍ଣ୍ଣିଚର ଓ ମୋବାଇଲ) */}
      </span>
    </div>
  );
};

export default Header;
