// // import React, { useState } from "react";
// // import "./App.css";

// // // Import all the perfect components
// // import Navigation from "./Navigation";
// // import HeroSection from "./HeroSection";
// // import BenefitsSection from "./BenefitsSection";
// // import BecomeMerchantSection from "./BecomeMerchantSection";
// // import RequirementsSection from "./RequirementsSection";
// // import HowToBecomeDelivery from "./HowToBecomeDelivery";
// // import FaqSection from "./FaqSection";
// // import HowItWorks from "./HowItWorks";
// // import PartnersSection from "./PartnersSection";

// // function App() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   return (
// //     <div id="___gatsby">
// //       <div style={{ outline: "none" }} tabIndex="-1" id="gatsby-focus-wrapper">
// //         {/* PERFECT: Navigation Section */}
// //         <Navigation
// //           mobileMenuOpen={mobileMenuOpen}
// //           setMobileMenuOpen={setMobileMenuOpen}
// //         />

// //         {/* PERFECT: Main Content - EXACT structure from bolt.html */}
// //         <main>
// //           {/* PERFECT: Hero Section */}
// //           <HeroSection />
// //           <PartnersSection />

// //           {/* PERFECT: Benefits Section */}
// //           <BenefitsSection />

// //           {/* PERFECT: Boost Earnings Section */}
// //           <BecomeMerchantSection />

// //           {/* PERFECT: Requirements Section */}
// //           <RequirementsSection />

// //           {/* PERFECT: How It Works Section */}
// //           <HowToBecomeDelivery />

// //           <HowItWorks />

// //           {/* PERFECT: FAQ Section */}
// //           <FaqSection />
// //         </main>

// //         {/* PERFECT: Footer Section - Add your existing Footer component */}
// //         {/* <Footer /> */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import "./App.css";

// // Import all the components
// import Navigation from "./Navigation";
// import HeroSection from "./HeroSection";
// import PartnersSection from "./PartnersSection";
// import BecomeMerchantSection from "./BecomeMerchantSection";
// import BecomeDriverSection from "./BecomeDriverSection";
// import RequirementsSection from "./RequirementsSection";
// import HowItWorks from "./HowItWorks";
// import FaqSection from "./FaqSection";
// import Footer from "./FooterSection";

// function App() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div id="___gatsby">
//       <div style={{ outline: "none" }} tabIndex="-1" id="gatsby-focus-wrapper">
//         {/* Navigation Section */}
//         <Navigation
//           mobileMenuOpen={mobileMenuOpen}
//           setMobileMenuOpen={setMobileMenuOpen}
//         />

//         {/* Main Content */}
//         <main>
//           {/* Hero Section */}
//           <HeroSection />

//           {/* Partners Section - NEW */}
//           <PartnersSection />

//           {/* Become a Merchant Section - UPDATED (replaces BoostEarningsSection) */}
//           <BecomeMerchantSection />

//           {/* Become a Driver Section - UPDATED (replaces HowToBecomeDelivery) */}
//           <BecomeDriverSection />

//           {/* Requirements Section - KEPT */}
//           <RequirementsSection />

//           {/* How It Works Section - KEPT */}
//           <HowItWorks />

//           {/* FAQ Section - UPDATED */}
//           <FaqSection />
//         </main>

//         {/* Footer Section - Add your existing Footer component if needed */}
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;

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
