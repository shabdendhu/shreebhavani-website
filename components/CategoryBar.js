import React from "react";
import Image from "next/image";
const CategoryBar = () => {
  const category = [
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991659/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Audio_rd8pkk.png/mxw_2048,f_auto`,
    },
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991658/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Phone_qhq1wa.png/mxw_2048,f_auto`,
    },
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991658/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/TV_by2xka.png/mxw_2048,f_auto`,
    },
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991659/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Laptop_zp1dxi.png/mxw_2048,f_auto`,
    },
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991659/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/AC_gw4ktn.png/mxw_2048,f_auto`,
    },
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991657/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Ref_jmphdw.png/mxw_2048,f_auto`,
    },
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991658/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/WM_a9evzk.png/mxw_2048,f_auto`,
    },
    {
      image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991657/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/ka_v9m9zt.png/mxw_2048,f_auto`,
    },
    // {
    //   image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991658/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Grooming_olyszz.png/mxw_2048,f_auto`,
    // },
    // {
    //   image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991657/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Tablets_t4ezyx.png/mxw_2048,f_auto`,
    // },
    // {
    //   image: `https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991658/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/camera_lk2wn3.png/mxw_2048,f_auto`,
    // },
  ];
  return (
    <div
      className="noscrollbar"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        // overflowY: "scroll",
        // overflowY: "hidden",
        margin: "auto",
        width: "100%",
        // height: "125px",
        flexWrap: "wrap",
        // padding:"0px 10px"
      }}
    >
      {category.map((e, i) => (
        <div
          key={i}
          style={{
            margin: "2px",
          }}
        >
          <Image
           quality={1}
            width={"150px"}
            height={"170px"}
            // layout="fill"
            style={{
              backgroundColor:'#040398',
              borderRadius:'10px',
              padding:'10px'
            }}
            alt="category"
            src={e.image}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;
