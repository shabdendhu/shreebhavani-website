import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
// import Banner from "./Banner";
import ProductCards from "./Cards/ProductCards";
import CategoryBar from "./CategoryBar";
import Link from "next/link";
const Banner = dynamic(() => import('./Banner'), {
  ssr: false
})
const Body = () => {
  return (
    <>
        <Image
          width={1300}
          height={700}
          // layout="responsive"
          src="/Body.svg" />

      <div style={{
        // position: "absolute",
  
        background: "#DFE9F4",
        bordeRadius: "10px",
      }}>
        <div style={{
          marginLeft: "20px", color: "#333333", fontWeight: 600,
          fontSize: "16px",
          lineHeight: "20px"
        }}>
          <p>New Arrival</p>
        </div>
        <div style={{
          marginLeft: "20px", color: "#054C73",
          fontWeight: "700",
          fontSize: "52px",
          lineHeight: "65px"
        }}>
          <span>Discover Our <br /> New Collection </span>
        </div>
        {/* <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <span>jbjkbjkbjcbjkb kcjbweicbiwebuc ubciwbe iucweubcijewbcuwe
            uigciuweciubwiucbw uicuybwecu</span></div> */}
        <div>
          <button style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flexStart",
          padding: "25px 72px",
          gap: "10px",
          position: "absolute",
          width: "229px",
          height: "70px",
          backgroundColor: "#054C73",
          borderRadius: "50px"
          }}>Buy Now </button>
          
      </div>

    </div>
      {/* <Banner /> */ }
  {/* <div
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
      </div> */}
    </>
  );
};

export default Body;
