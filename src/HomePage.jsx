import HeroSection from "./HeroSection";
import FAQSection from "./FaqSection";
import WhyChoose from "./WhyChoose";
import TechnologySection from "./TechnologySection";
import ModelSection from "./ModelSection";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "To get started, just fill out our Restaurant Onboarding Form. As soon as we receive it, we’ll activate the selfdelivery mode and link your account, so we can start dispatching drivers for your orders. If you don’t see the selfdelivery option, you may need to contact your marketplace app to request this feature.",
  },
  {
    question: "Do I need new software or apps?",
    answer: (
      <div>
        <p>
          <strong>No, Stay on your favourite platforms</strong> – Continue
          accepting orders through Uber Eats, DoorDash, Grubhub and other
          thirdparty marketplaces. We integrate directly with these services
          using secure credentials so you don’t need new software or apps.
        </p>
      </div>
    ),
  },
  {
    question: "How do the 5% savings work?",
    answer:
      "Typical marketplace apps charge two separate fees—a 15 % marketplace fee plus a 15 % dispatch fee—so their total cost is around 30 % of each order. FD365 keeps the marketplace fee the same at 15 % but only charges a 10 % dispatch fee, bringing the total to about 25 %. In other words, you pay roughly five percentage points less per order, and that 5 % stays in your pocket instead of going to the delivery platform.",
  },
  {
    question: "What's the delivery range?",
    answer:
      "FD365’s standard delivery area is a 10mile radius, which is wider than the typical 6–7mile range offered by most fooddelivery apps. If you need to go beyond 10 miles, we can arrange longer runs with your approval.",
  },
  {
    question: "Is support available 24/7?",
    answer:
      "Our support operates during delivery hours—8 a.m. to 10 p.m., seven days a week. We offer customer assistance throughout these hours. Messages sent outside of this window will be answered as soon as our team is back online.",
  },
];

const HomePage = () => {
  return (
    <main>
      {/* EXACT: Hero Section */}
      <HeroSection
        videoUrl="https://res.cloudinary.com/di6d28r5r/video/upload/v1756886577/Made-with-champ2_l6fv46.mp4"
        bigText="A Smarter Way to Deliver"
        smallText="Lower fees, wider reach, and more profit for everyone."
        linkText1="Become a driver"
        linkText2="Become a merchant"
      />

      <WhyChoose
        title="Why FD365"
        firstTitle="Save 5% instantly on every order"
        firstDesc="Lower dispatch fees compared to standard apps."
        secondTitle="Keep Using Uber Eats, DoorDash & Others"
        secondDesc="Stay on your favorite delivery platforms seamlessly."
        thirdTitle="Expand Delivery Range Up to 10 Miles"
        thirdDesc="Serve more customers with wider delivery zones."
      />
      <TechnologySection
        title="Smarter Technology"
        subtitle="Simple Tools. Smarter Orders. Better Results."
        firstTitle="Real-Time Order Tracking"
        firstDesc="Monitor every order as it moves."
        secondTitle="Automatic Driver Dispatch"
        secondDesc="Fast, reliable matching with available drivers."
        thirdTitle="API Integration With Your Apps"
        thirdDesc="Connect directly to your current systems."
      />

      <ModelSection
        title="One Model. All Benefits."
        subtitle="One Platform. Shared Success For All."
        firstTitle="Restaurants Keep More Profit"
        firstDesc="Lower fees mean healthier bottom lines."
        secondTitle="Drivers Earn More With Extra Orders"
        secondDesc="Steady demand with longer delivery ranges."
        thirdTitle="Customers Enjoy Faster, Reliable Delivery"
        thirdDesc="Quicker service with greater consistency."
      />
      <FAQSection faqs={faqs} />
    </main>
  );
};

export default HomePage;
