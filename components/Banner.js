import Image from "next/image";
// import React from "react";

// const Banner = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//       }}
//     >
//       <Image
//         width={1900}
//         height={400}
//         src="https://www.reliancedigital.in/medias/10-Umbrella-Offer-Carousel-Banner-30-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w5Njg0MHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDViLzk4ODcxMTA1NjE4MjIuanBnfGM0Y2EyZjc2MjUzZWVhODg1NmJjOGNjMjBlYzhjMTg5OGRkNzBlZDNlNDU2MmVjY2M2YWFiODRkMzQ3NTgwMDE"
//         alt="banner"
//       />
//     </div>
//   );
// };

// export default Banner;
import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const HomeBanner = () => {
  const CommonDiseases = [
    "https://www.reliancedigital.in/medias/10-Umbrella-Offer-Carousel-Banner-30-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w5Njg0MHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDViLzk4ODcxMTA1NjE4MjIuanBnfGM0Y2EyZjc2MjUzZWVhODg1NmJjOGNjMjBlYzhjMTg5OGRkNzBlZDNlNDU2MmVjY2M2YWFiODRkMzQ3NTgwMDE",
    "https://www.reliancedigital.in/medias/10-Umbrella-Offer-Carousel-Banner-30-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w5Njg0MHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDViLzk4ODcxMTA1NjE4MjIuanBnfGM0Y2EyZjc2MjUzZWVhODg1NmJjOGNjMjBlYzhjMTg5OGRkNzBlZDNlNDU2MmVjY2M2YWFiODRkMzQ3NTgwMDE",
    // "https://www.reliancedigital.in/medias/10-Umbrella-Offer-Carousel-Banner-30-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w5Njg0MHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDViLzk4ODcxMTA1NjE4MjIuanBnfGM0Y2EyZjc2MjUzZWVhODg1NmJjOGNjMjBlYzhjMTg5OGRkNzBlZDNlNDU2MmVjY2M2YWFiODRkMzQ3NTgwMDE",
    // "https://www.reliancedigital.in/medias/10-Umbrella-Offer-Carousel-Banner-30-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w5Njg0MHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDViLzk4ODcxMTA1NjE4MjIuanBnfGM0Y2EyZjc2MjUzZWVhODg1NmJjOGNjMjBlYzhjMTg5OGRkNzBlZDNlNDU2MmVjY2M2YWFiODRkMzQ3NTgwMDE",
    // "https://www.reliancedigital.in/medias/10-Umbrella-Offer-Carousel-Banner-30-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w5Njg0MHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDViLzk4ODcxMTA1NjE4MjIuanBnfGM0Y2EyZjc2MjUzZWVhODg1NmJjOGNjMjBlYzhjMTg5OGRkNzBlZDNlNDU2MmVjY2M2YWFiODRkMzQ3NTgwMDE",
  ];

  return (
    <>
      <div
        className="hide-scroll-bar"
        style={{
          // padding: "10px 0px",
        }}
      >
        <AutoPlaySwipeableViews>
          {CommonDiseases.map((data, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                // marginRight: "5px",
                // marginLeft: "5px",
                width: "100%",
                // margin:'5px',
                overflow: "hidden",
                // height: "100%",
                position: "relative",
                background: "white",
                // borderRadius: "20px",
                border: "1px solid rgb(126 217 255)",
                display: "flex",
                alignItems: "center",
                justifyContent:'center'
              }}
            >
              <Image width={1565} height={350} src={data} alt="banner" />
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    </>
  );
};
export default HomeBanner;
