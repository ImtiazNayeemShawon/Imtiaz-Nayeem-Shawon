import "../styles/globals.css";
import Navigation from "./Navbar";
import Footer from "./Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="">
        <Navigation />
      </div>

      <Component {...pageProps} />
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
