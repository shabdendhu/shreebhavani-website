import Image from "next/image";
import React from "react";

const ProductCards = () => {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "10px",
      }}
    >
      <Image
        height={"200px"}
        width={"200px"}
        // style={{ height: "200px" }}
        alt="product"
        src="https://www.reliancedigital.in/medias/Nikon-Z7-Camera-Lenses-491431045-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTg0M3xpbWFnZS9qcGVnfGltYWdlcy9oY2YvaGEyLzkwNjk4NjgyODU5ODIuanBnfGM0ZGQ3OGZmZTE4NDdjODI0NTYyN2Q3MzNmMTc2ZDI3MGYzMDllYzIwZGUwMjA2YzFjNjU5ODY1OWY3NDRiMGU"
      />
      <div
        style={{
          background: "gray",
          color: "orange",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "35px",
          fontSize: "20px",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        Contact Now
      </div>
    </div>
  );
};

export default ProductCards;
