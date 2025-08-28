import React from "react";
import { ImageHeroSection } from "./HeroSection";
import FAQSection from "./FaqSection";
import WhyChoose from "./WhyChoose";
import TechnologySection from "./TechnologySection";
import ModelSection from "./ModelSection";
import OurMission from "./OurMissionSection";

const faqs = [
  {
    question: "Who can join FD365?",
    answer:
      "We work with a broad spectrum of food-delivery businesses—local restaurants, pizza shops, ordering services and delivery fleets—because our platform adapts to each operation’s needs. Independent delivery drivers who meet our vetting criteria are also welcome to join. If you run a food business or want to drive for one, FD365 can help you grow.",
  },
  {
    question: "How are you different from Uber/DoorDash?",
    answer:
      "Unlike marketplace apps that take over your entire delivery operation, FD365 works alongside them. You keep your storefronts on Uber Eats, DoorDash or other platforms, and we handle dispatch and delivery on your behalf. Our fee structure is also more favourable: typical apps charge about 15% for marketplace access plus another 15% for dispatch—a total of 30%. FD365 keeps the marketplace fee the same but reduces the dispatch portion to 10%, so your total drops to around 25%. We also extend your delivery radius to 10 miles rather than the 6–7-mile range many apps provide. And because we integrate directly with your existing apps via secure credentials, you retain control of your settings and customer relationships.",
  },
  {
    question: "Do you replace my current app?",
    answer:
      "No, FD365 doesn’t replace your ordering apps. You keep using the same platforms you rely on now—Uber Eats, DoorDash or others. We simply integrate via secure credentials to receive orders, dispatch drivers and update order statuses, leaving your storefronts and settings exactly as they are.",
  },
  {
    question: "Is FD365 available nationwide?",
    answer:
      "FD365 isn’t a distant, faceless fleet—we started by teaming up with restaurants in Florida and California, and those close partnerships still shape everything we do. We’re concentrating on giving those communities exceptional service now while we lay the groundwork for a national presence. As we grow, we’ll carry that same friendly, local touch to restaurants across the country.",
  },
  {
    question: "How do I start the process?",
    answer:
      "Getting started is simple—and there’s no cost to sign up.\n\nFor restaurants: Start by filling out our quick onboarding form. We’ll connect to your ordering platforms and configure the self-delivery option at no charge. There’s no long-term binding agreement; the service runs on a 12-month term that renews automatically but can be cancelled with 30 days’ notice. Once your accounts are linked, we’ll start dispatching drivers right away.\n\nFor drivers: Fill out the Delivery Driver Position Application. After approval, you’ll receive instructions to set up your payroll and download the driver app. Once those steps are complete, you can begin accepting deliveries and earning income.",
  },
];

const AboutPage = () => {
  return (
    <main>
      {/* EXACT: Hero Section */}
      <ImageHeroSection
        imgUrl="https://res.cloudinary.com/di6d28r5r/image/upload/v1756401411/assets/Gemini_Generated_Image_7uei2j7uei2j7uei_1_oriq5q.png"
        bigText="Built for Restaurants. Powered by Drivers."
        smallText="We make food delivery smarter, cheaper, and more flexible."
        button="Learn More"
      />

      <OurMission
        title="Our Mission"
        subtitle="Helping Restaurants Earn More, Drivers Thrive."
        desc="We exist to help restaurants keep more of their profits while creating new opportunities for drivers."
      />
      <TechnologySection
        title="Our Promise"
        subtitle="Lower Costs. Smarter Tech. Simple Setup."
        firstTitle="5% Instant Savings Per Order"
        firstDesc="Save more compared to standard apps."
        secondTitle="Simple Setup With No Disruptions"
        secondDesc="Keep using your existing platforms."
        thirdTitle="Smarter Tech With Live Tracking & Dispatch"
        thirdDesc="Monitor deliveries in real time."
      />

      <OurMission
        title="Our Promise"
        subtitle="Reliable, Affordable, Growth-Focused Delivery."
        desc="Reliable deliveries. Lower fees. Growth for restaurants, drivers, and customers."
      />
      <FAQSection faqs={faqs} />
    </main>
  );
};

export default AboutPage;
