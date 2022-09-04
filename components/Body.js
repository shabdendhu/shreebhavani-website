import React from "react";
import Banner from "./Banner";
import ProductCards from "./Cards/ProductCards";
import CategoryBar from "./CategoryBar";

const Body = () => {
  return (
    <>
      <Banner />
      <div
        style={{
          marginTop: "30px",
          // padding:'20px'
        }}
      >
        <CategoryBar />
      </div>
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <h3
          style={{
            textAlign: "center",
            color: "gray",
          }}
        >
          TOP DEALS
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </div>
      </div>
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <h3
          style={{
            textAlign: "center",
            color: "gray",
          }}
        >
          HUGE OFFER
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </div>
      </div>
      <div style={{ maxWidth: "1300px", margin: "auto" }}>
        <h3
          style={{
            textAlign: "center",
            color: "gray",
          }}
        >
          BEST PRICE
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </div>
      </div>
    </>
  );
};

export default Body;
