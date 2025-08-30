import React, { useState } from "react";
import "./App.css";

// Import all the EXACT same components
import Navigation from "./Navigation";
import HomePage from "./HomePage";
// You'll need to create these other page components following the same pattern
// import BecomeDriverPage from "./BecomeDriverPage";
// import BecomeRestaurantPage from "./BecomeRestaurantPage";
// import AboutPage from "./AboutPage";
// import ContactPage from "./ContactPage";
// import TermsPage from "./TermsPage";
import Footer from "./FooterSection";
import BecomeDriverPage from "./BecomeDriverPage";
import BecomeRestaurantPage from "./BecomeRestaurantPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import TermsPage from "./TermsPage";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/driver":
        return <BecomeDriverPage />;
      case "/restaurant":
        return <BecomeRestaurantPage />;
      case "/about":
        return <AboutPage />;
      case "/contact":
        return <ContactPage />;
      case "/terms":
        return <TermsPage />;
      case "/privacy":
        return <PrivacyPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div id="___gatsby">
      <div style={{ outline: "none" }} tabIndex="-1" id="gatsby-focus-wrapper">
        {/* EXACT: Navigation Section - same as original */}
        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          currentPath={currentPath}
          navigate={navigate}
        />

        {/* EXACT: Main Content - same structure as original */}
        <main>{renderPage()}</main>

        {/* EXACT: Footer Section - same as original */}
        <Footer navigate={navigate} />
      </div>
    </div>
  );
}

export default App;
