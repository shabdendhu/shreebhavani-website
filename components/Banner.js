import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Image
        width={1900}
        height={400}
        src="https://www.reliancedigital.in/medias/10-Umbrella-Offer-Carousel-Banner-30-08-2022.jpg?context=bWFzdGVyfGltYWdlc3w5Njg0MHxpbWFnZS9qcGVnfGltYWdlcy9oMzUvaDViLzk4ODcxMTA1NjE4MjIuanBnfGM0Y2EyZjc2MjUzZWVhODg1NmJjOGNjMjBlYzhjMTg5OGRkNzBlZDNlNDU2MmVjY2M2YWFiODRkMzQ3NTgwMDE"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
