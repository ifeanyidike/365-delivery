import React, { useState } from "react";

const FAQSection = ({ faqs }) => {
  const [faqOpen, setFaqOpen] = useState({
    0: true, // First question open by default - EXACT match
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // UPDATED: FAQ data for FD365 home page

  return (
    <section
      className="container container-md px-6 mb-28 md:mb-28 pt-28 -mt-28"
      id="faq"
    >
      <div
        className="flex flex-col items-center md:max-w-[752px] md:mx-auto"
        itemScope=""
        itemType="https://schema.org/FAQPage"
      >
        <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0 !mb-10 text-center">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-col gap-2 items-center w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full text-primary border-separator rounded-lg border border-solid p-4"
              itemScope=""
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 className="font-semibold mt-0 text-base md:text-lg mb-2">
                <div
                  id={`section-${index}-title`}
                  tabIndex="0"
                  role="button"
                  className="flex text-left content-between items-center w-full cursor-pointer gap-4"
                  aria-expanded={faqOpen[index]}
                  aria-controls={`section-${index}`}
                  onClick={() => toggleFaq(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFaq(index);
                    }
                  }}
                >
                  <span itemProp="name">{faq.question}</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-auto transition-transform shrink-0 ${
                      faqOpen[index] ? "scale-y-[-1]" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.7108 8.71294C19.3201 8.32241 18.6867 8.32241 18.296 8.71294L12.0038 15.002L5.71161 8.71294C5.32092 8.32241 4.68749 8.32241 4.2968 8.71294C3.90611 9.10346 3.90611 9.73663 4.2968 10.1272L10.589 16.4163C11.3704 17.1973 12.6372 17.1973 13.4186 16.4163L19.7108 10.1272C20.1015 9.73663 20.1015 9.10346 19.7108 8.71294Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </h3>
              {/* EXACT: Answer section with proper animation */}
              <div
                className={`transition-all overflow-hidden opacity-100 ${
                  faqOpen[index] ? "max-h-[500px]" : "max-h-0"
                }`}
                id={`section-${index}`}
                role="region"
                aria-labelledby={`section-${index}-title`}
                itemScope=""
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
                style={{ maxHeight: faqOpen[index] ? 500 : 0 }}
              >
                <div itemProp="text">
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
