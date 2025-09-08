import { ImageHeroSection } from "./HeroSection";
import FAQSection from "./FaqSection";
import WhyChoose from "./WhyChoose";
import TechnologySection from "./TechnologySection";
import ModelSection from "./ModelSection";
import BrochureSection from "./BrochureSection";

const faqs = [
  {
    question: "Do I need extra software?",
    answer:
      "No—there’s no new software to install. You continue using the same ordering platforms you already have (Uber Eats, DoorDash, Grubhub, etc.), and simply enable the “Self Delivery” option in those apps. We integrate via secure credentials to receive orders and update their status, so you keep full control of your existing accounts while FD365 manages dispatch and tracking.",
  },
  {
    question: "How exactly do I save 5%?",
    answer:
      "Typical marketplace apps charge two separate fees—a 15 % marketplace fee plus a 15 % dispatch fee—so their total cost is around 30 % of each order. FD365 keeps the marketplace fee the same at 15 % but only charges a 10 % dispatch fee, bringing the total to about 25 %. In other words, you pay roughly five percentage points less per order, and that 5 % stays in your pocket instead of going to the delivery platform.",
  },
  {
    question: "Can I keep using Uber Eats or DoorDash?",
    answer:
      "Absolutely. FD365 doesn’t replace your marketplace profiles; it enhances them. You continue using Uber Eats, DoorDash and other ordering platforms, and simply enable the “Self Delivery” option. We integrate via secure credentials to dispatch drivers and update order statuses, so you keep your storefronts and control of your app settings while benefiting from lower fees and expanded delivery range.",
  },
  {
    question: "How do I track orders in real time?",
    answer:
      "Our deliverymanagement system puts every order from all channels into one dashboard for full visibility. Each order automatically generates a branded livetracking link with chat and feedback tools, so you and your customer can watch the progress in real time without switching between apps.",
  },
  {
    question: "What if I need onboarding help?",
    answer:
      "Our team will guide you through every step of the setup. We’ll help you connect your ordering platforms, enable the selfdelivery option and configure your billing and dispatch settings. If you have questions or hit a snag, just reach out— we’re happy to assist. We want the transition to be seamless, so don’t hesitate to call or email us for personalised onboarding support.",
  },
];

const BecomeRestaurantPage = () => {
  return (
    <main>
      {/* EXACT: Hero Section */}
      <ImageHeroSection
        imgUrl="https://res.cloudinary.com/di6d28r5r/image/upload/v1756568047/Gemini_Generated_Image_lppgrklppgrklppg_oypepd.png"
        bigText="Lower Fees. Higher Profits."
        smallText="Keep your setup—pay less on every delivery."
        button="Partner With Us"
        actionUrl="https://form.jotform.com/252262710248452"
      />

      <WhyChoose
        title="Save Instantly"
        firstTitle="Typical Marketplace Fees: 30%"
        firstDesc="High standard costs with competitors."
        secondTitle="FD365 Total: 25%"
        secondDesc="Lower dispatch fees save you money."
        thirdTitle="5% Saved On Every Order"
        thirdDesc="Extra profit straight to your bottom line."
      />
      <TechnologySection
        title="Plug & Play"
        subtitle="Stay On Your Apps. We Handle Delivery."
        firstTitle="No New Apps Required"
        firstDesc="Keep existing platforms, no disruption."
        secondTitle="Choose “Self-Delivery” Mode"
        secondDesc="Enable FD365 within your apps."
        thirdTitle="We Handle The Rest Automatically"
        thirdDesc="Dispatch managed directly by FD365."
        actionText="Partner with Us"
        actionUrl="https://form.jotform.com/252262710248452"
      />

      <ModelSection
        title="Grow With Confidence"
        subtitle="Deliver Further. Reach More Customers Daily."
        firstTitle="Deliver Farther (Up to 10 Miles)"
        firstDesc="Expand reach beyond standard zones."
        secondTitle="Reach More Customers Every Day"
        secondDesc="Grow sales with wider coverage."
        thirdTitle="Keep Your App Presence Intact"
        thirdDesc="Stay visible on major apps."
        actionText="Partner with Us"
        actionUrl="https://form.jotform.com/252262710248452"
      />
      <BrochureSection />
      <FAQSection faqs={faqs} />
    </main>
  );
};

export default BecomeRestaurantPage;
