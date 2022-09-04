import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        background: "#040398",
        height: "100px",
        display: "flex",
        alignItems: "center",
        padding: "0px 15px",
      }}
    >
      <span
        style={{
          color: "#FFFFFF",
          fontSize: "75px",
        }}
        className="material-icons"
      >
        menu
      </span>

      <span
        style={{
          color: "#FFFFFF",
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
        {/* <span
          style={{
            fontSize: "25px",
          }}
        >
          श्री
        </span>{" "}
        <span
          style={{
            fontSize: "27px",
          }}
        >
          ଭବାନୀ
        </span> */}
        <span style={
          {
            fontSize:"30px"
          }
        }>Full Name</span>
      </span>
      {/* {dimention.width > 600 && (
        <div
          style={{
            width: "50%",
            position: "relative",
            //   overflow:'hidden'
          }}
        >
          <input
            placeholder="Search Product Here"
            style={{
              height: "40px",
              borderRadius: "10px",
              border: "1px solid white",
              margin: "0px 20px",
              width: "90%",
              outline: "none",
              fontSize: "20px",
              padding: "0px 15px",
            }}
          />
          <span
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "8px",
              right: "32px",
              color: "white",
            }}
            className="material-icons"
          >
            search
          </span>
        </div>
      )} */}
    </div>
  );
};

export default Header;
