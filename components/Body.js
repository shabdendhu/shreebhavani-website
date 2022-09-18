import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Body = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <Image
          quality={1}
          width={1300}
          height={700}
          layout="responsive"
          src="/Body.svg"
        />

        <div
          //  style={{
          //       // position: "absolute",
          //       background: "#DFE9F4",
          //       bordeRadius: "10px",
          //       top: "10%",
          //       right: "5%",
          //       // height: "55%",
          //       width: "100%",
          //       display: "flex",
          //       justifyContent: "space-around",
          //       flexDirection: "column",
          //       padding: "20px",
          //       borderRadius: "10px",
          //     }}
          // style={{
          //   position: "absolute",
          //   background: "#DFE9F4",
          //   bordeRadius: "10px",
          //   top: "10%",
          //   right: "5%",
          //   // height: "55%",
          //   width: "45%",
          //   display: "flex",
          //   justifyContent: "space-around",
          //   flexDirection: "column",
          //   padding: "20px",
          //   borderRadius: "10px",
          // }}
          className="intro"
        >
          <div
            style={{
              marginLeft: "20px",
              color: "#333333",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "20px",
              fontStyle: "normal",
              fontFamily: "cursive",
            }}
          >
            New Arrival
          </div>
          <div
            style={{
              margin: "20px",
              color: "#054C73",
              fontWeight: "700",
              fontSize: "3rem",
              lineHeight: "65px",
              fontFamily: "cursive",
            }}
          >
            <span>
              Discover Our <br /> New Collection{" "}
            </span>
          </div>
          <div
            style={{
              margin: "20px",
              color: "#333333",
              fontFamily: "cursive",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <div
            style={{
              // display: "flex",
              // flexDirection: "row",
              // alignItems: "center",
              // padding: "25px 72px",
              // gap: "10px",
              // position: "absolute",
              // width: "229px",
              // height: "18%",
              // minWidth: "250px",
              // maxWidth: "300px",
              width: "200px",
              padding: "10px",

              backgroundColor: "#054C73",
              borderRadius: "50px",
              fontSize: "22px",
              textAlign: "center",
              color: "white",
              fontFamily: "cursive",
            }}
          >
            Buy Now
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#F2F5FF",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <Image quality={1} src={"/truck.svg"} height={50} width={50} />
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "15px",
            }}
          >
            <span
              style={{
                // fontFamily: "Montserrat",
                fontSize: "24px",
                lineHeight: "29px",
                fontWeight: 600,
                color: "#333333",
              }}
            >
              Free Delivery
            </span>
            <span
              style={{
                // fontFamily: "Montserrat",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "#333333",
              }}
            >
              Description for the Delivery
            </span>
          </span>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <Image quality={1} src={"/24support.svg"} height={50} width={50} />
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "15px",
            }}
          >
            <span
              style={{
                // fontFamily: "Montserrat",
                fontSize: "24px",
                lineHeight: "29px",
                fontWeight: 600,
                color: "#333333",
              }}
            >
              Support 24/7
            </span>
            <span
              style={{
                // fontFamily: "Montserrat",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "#333333",
              }}
            >
              Description for the Support
            </span>
          </span>
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <Image quality={1} src={"/truck.svg"} height={50} width={50} />
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "15px",
            }}
          >
            <span
              style={{
                // fontFamily: "Montserrat",
                fontSize: "24px",
                lineHeight: "29px",
                fontWeight: 600,
                color: "#333333",
              }}
            >
              100% Authentic
            </span>
            <span
              style={{
                // fontFamily: "Montserrat",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 400,
                color: "#333333",
              }}
            >
              Description for the Delivery
            </span>
          </span>
        </span>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "32px",
              lineHheight: "39px",
              color: "#333333",
            }}
          >
            Inspiration Collection
          </span>
          <span
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#666666",
            }}
          >
            Inspiration Collection descriptions should meet the topic
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Image
            quality={1}
            style={{
              borderRadius: "170px 0px 0px 0px",
            }}
            height={434}
            width={355}
            src="/watch.svg"
          />
          <Image quality={1} height={434} width={355} src="/binbag.svg" />
          <Image
            quality={1}
            style={{
              borderRadius: "0px 0px 170px 0px",
            }}
            height={434}
            width={355}
            src="/lamp2.svg"
          />
        </div>
      </div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "32px",
              lineHheight: "39px",
              color: "#333333",
            }}
          >
            Browse The Range
          </span>
          <span
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#666666",
            }}
          >
            Browse The Range descriptions should meet the topic
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Image
            quality={1}
            style={{
              borderRadius: "170px 0px 0px 0px",
            }}
            height={434}
            width={355}
            src="/watch.svg"
          />
          <Image quality={1} height={434} width={355} src="/binbag.svg" />
          <Image
            quality={1}
            style={{
              borderRadius: "0px 0px 170px 0px",
            }}
            height={434}
            width={355}
            src="/lamp2.svg"
          />
        </div>
      </div>
      <div
        style={{
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#03344F",
            background: "#f2f5ff",
            width: "60%",
            padding: "5% 5%",
            borderRadius: "10px",
            // margin: "20px",
            position: "relative",
            // marginRight: "200px",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              marginBottom: "5%",
            }}
          >
            Message
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#03344F",
                fontSize: "20px",
                margin: "5px",
              }}
            >
              Name
            </span>
            <input
              style={{
                border: "1px solid #03344f54",
                height: "30px",
                borderRadius: "20px",
                outline: "none",
                fontSize: "17px",
                color: "#03344F",
                padding: "0px 10px",
                width: "70%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#03344F",
                fontSize: "20px",
                margin: "5px",
              }}
            >
              Phone
            </span>
            <input
              style={{
                border: "1px solid #03344f54",
                height: "30px",
                borderRadius: "20px",
                outline: "none",
                fontSize: "17px",
                color: "#03344F",
                padding: "0px 10px",
                width: "70%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#03344F",
                fontSize: "20px",
                margin: "5px",
              }}
            >
              Name
            </span>
            <textarea
              style={{
                border: "1px solid #03344f54",
                height: "150px",
                borderRadius: "10px",
                outline: "none",
                fontSize: "17px",
                color: "#03344F",
                padding: "0px 10px",
                width: "70%",
              }}
            />
          </div>
        </div>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FShreeBhavaniEFM&tabs=timeline&width=350&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          style={{ border: "none", overflow: "hidden",width:'500px' }}
          // scrolling="no"
          // frameborder="0"
          // allowfullscreen="true"
          // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
       
      </div>
    </div>
  );
};

export default Body;
