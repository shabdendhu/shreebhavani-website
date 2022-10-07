import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

function App({ isMobile }) {
  console.log("====================================");
  console.log(isMobile);
  console.log("====================================");
  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Header />
      <div
        style={{
         paddingTop: "80px",
        }}
      >
        <Body />
      </div>
      <Footer />
    </>
  );
}

App.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }
  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { isMobile };
};
export default App;
