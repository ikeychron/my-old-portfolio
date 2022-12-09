import { useState } from "react";

// Next
import Router from "next/router";

// Layout
import Head from "src/components/Atoms/Head";
import Loader from "src/components/Atoms/Loader";
import Navbar from "src/components/Molecules/Navbar";
import Footer from "src/components/Molecules/Footer";

// Styles
import "react-lazy-load-image-component/src/effects/blur.css";
import "src/styles/fonts.css";
import "src/styles/main.scss";
import "src/styles/loader.css";

const MyApp = ({ Component, pageProps }) => {
  // Show Loader
  const [loading, setLoading] = useState(false);

  Router.onRouteChangeStart = () => setLoading(true);
  Router.onRouteChangeComplete = () => setLoading(false);
  Router.onRouteChangeError = (err) => console.error(err);

  return (
    <>
      <Head />
      {/* Main */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <Component {...pageProps} />

          <Footer />
        </>
      )}
    </>
  );
};

export default MyApp;
