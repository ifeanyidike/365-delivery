import React from "react";
import { ImageHeroSection } from "./HeroSection";
import FAQSection from "./FaqSection";
import WhyChoose from "./WhyChoose";
import TechnologySection from "./TechnologySection";
import ModelSection from "./ModelSection";
import { CallUs, EmailUs, OnlineAccess } from "./MessageSections";

const faqs = [
  {
    question: "How quickly will you respond?",
    answer:
      "Our team responds quickly during delivery hours and will get back to you as soon as possible if messages are sent after hours.",
  },
  {
    question: "Can I get onboarding help?",
    answer:
      "Yes. Our support team provides full onboarding guidance and step-by-step setup assistance.",
  },
  {
    question: "Do you provide live support?",
    answer: "Yes. Live support is available daily between 8 a.m. and 10 p.m.",
  },
  {
    question: "Is billing handled directly online?",
    answer:
      "Yes. Billing and account access are managed securely online at pay.fooddelivery365.com.",
  },
  {
    question: "How do I reset my login?",
    answer:
      "Use the “Forgot Password” option on the portal or contact our support team for assistance.",
  },
];

const ContactPage = () => {
  return (
    <main>
      {/* EXACT: Hero Section */}
      <ImageHeroSection
        imgUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
        bigText="Let's Get You Started."
        smallText="Our team is here to help you deliver smarter."
        button="Contact Us"
      />

      <CallUs />
      <EmailUs />
      <OnlineAccess />

      {/* EXACT: Partners Section */}
      {/* <PartnersSection /> */}

      {/* EXACT: Benefits Section - Why FD365 */}
      {/* <BenefitsSection /> */}

      {/* EXACT: Become Merchant Section - image + text layout */}
      {/* <BecomeMerchantSection /> */}

      {/* EXACT: Become Driver Section - image + text layout */}
      {/* <BecomeDriverSection /> */}

      {/* EXACT: Requirements Section */}
      {/* <RequirementsSection /> */}

      {/* EXACT: How It Works Section */}
      {/* <HowItWorks /> */}

      {/* EXACT: FAQ Section */}
      <FAQSection faqs={faqs} />
    </main>
  );
};

export default ContactPage;
