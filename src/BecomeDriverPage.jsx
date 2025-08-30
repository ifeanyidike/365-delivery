import React from "react";
import { ImageHeroSection } from "./HeroSection";
import FAQSection from "./FaqSection";
import WhyChoose from "./WhyChoose";
import TechnologySection from "./TechnologySection";
import ModelSection from "./ModelSection";

const faqs = [
  {
    question: "How do I sign up?",
    answer:
      "To get started, fill out the Delivery Driver Position Application. Once your application is approved, Everee will send you an email and a text message. Download the Everee app and enter the required details—your SSN or TIN, personal and contact information—and sign the tax documents. This sets up your payroll with an Everee Visa Pay Card, which you can use to access your weekly earnings or transfer them to your bank. Then download the First Delivery driver app using the phone number from your application, enter the code sent via text and make sure location services are enabled. If you get stuck at any point, our support team is here to help.",
  },
  {
    question: "How are drivers paid?",
    answer:
      "Drivers are paid through the Everee platform. Once you’ve set up your payroll information, funds are deposited to your Everee Visa Pay Card each week as soon as payroll is processed. You can spend directly from the card or transfer your earnings to your own bank account at any time.",
  },
  {
    question: "Can I also work with Uber/DoorDash?",
    answer:
      "Yes. FD365 drivers are independent contractors, so you’re free to continue working with other delivery platforms. We don’t require exclusivity, meaning you can accept orders from Uber Eats, DoorDash and similar apps while also driving for FD365.",
  },
  {
    question: "Do I have to work fixed shifts?",
    answer:
      "We don’t impose traditional fixed shifts, but we do schedule deliveries in blocks. You can pick the time slots—morning, afternoon, evening or late night—that fit your life. Once you claim a block, you’re committed to being available for that window, but you decide which blocks to work and how many to take.",
  },
  {
    question: "What support is available to me?",
    answer:
      "As an FD365 driver you’re never on your own. We offer live support during delivery hours—just call 561-872-6155 or email mark@fooddelivery365.com. Our team can help with app setup, payout questions and on-the-road issues, and we provide tutorials to walk you through using the First Delivery app. If you have any questions about your payments or the dispatch system, you can reach out at any time, and we’ll guide you through the process.",
  },
];

const BecomeDriverPage = () => {
  return (
    <main>
      {/* EXACT: Hero Section */}
      <ImageHeroSection
        imgUrl="https://res.cloudinary.com/di6d28r5r/image/upload/v1756568295/Gemini_Generated_Image_5v8zh55v8zh55v8z_ed5r2s.png"
        bigText="Drive More. Earn More."
        smallText="Flexible hours, steady income, instant payouts."
        button="Apply Now"
        actionUrl="https://form.jotform.com/251184158830154"
      />

      <WhyChoose
        title="Why Drive With FD365"
        firstTitle="More Orders Through Automated Dispatch"
        firstDesc="Reliable, consistent deliveries every day."
        secondTitle="Longer Delivery Range (Up to 10 Miles)"
        secondDesc="Earn more by going further."
        thirdTitle="Keep More of What You Earn"
        thirdDesc="Transparent payouts without hidden fees."
      />
      <TechnologySection
        title="Flexibility First"
        subtitle="Work Your Way. On Your Schedule."
        firstTitle="Work When You Want"
        firstDesc="Choose delivery blocks that suit you."
        secondTitle="No Exclusivity"
        secondDesc="Keep driving with other delivery apps."
        thirdTitle="Get Paid Quickly"
        thirdDesc="Fast weekly payments to Everee card."
        actionText="Partner with Us"
        actionUrl="https://form.jotform.com/251184158830154"
      />

      <ModelSection
        title="Driver Support"
        subtitle="Help And Tools Whenever You Need."
        firstTitle="Live Assistance When You Need It"
        firstDesc="On-demand support during delivery hours."
        secondTitle="Transparent Billing & Payouts"
        secondDesc="Clear, accurate weekly driver statements."
        thirdTitle="Easy Driver App"
        thirdDesc="Simple management with mobile driver app."
        actionText="Partner with Us"
        actionUrl="https://form.jotform.com/251184158830154"
      />

      <FAQSection faqs={faqs} />
    </main>
  );
};

export default BecomeDriverPage;
