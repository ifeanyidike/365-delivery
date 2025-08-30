const PrivacyPolicyPage = () => {
  const currentDate = "August 30, 2025";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-layer-surface min-h-screen">
      {/* Header */}
      <div className="bg-neutral-primary text-static-key-light py-16">
        <div className="container container-md px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-semibold text-4xl md:text-6xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Your privacy matters to us. Learn how we collect, use, and protect
              your information.
            </p>
            <p className="text-sm opacity-75 mt-4">
              Last updated: {currentDate}
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container container-md px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-layer-floor-2 rounded-lg p-6 mb-12 border border-separator">
            <h2 className="font-semibold text-lg md:text-xl mb-4 text-primary">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { id: "section-1", title: "1. Information We Collect" },
                { id: "section-2", title: "2. How We Use Your Information" },
                { id: "section-3", title: "3. How We Share Your Information" },
                {
                  id: "section-4",
                  title: "4. Cookies & Tracking Technologies",
                },
                { id: "section-5", title: "5. Data Security" },
                { id: "section-6", title: "6. Your Rights & Choices" },
                { id: "section-7", title: "7. Children's Privacy" },
                { id: "section-8", title: "8. Third-Party Links" },
                { id: "section-9", title: "9. Changes to This Policy" },
                { id: "section-10", title: "10. Contact Us" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-action-primary hover:text-active-action-primary hover:underline py-1 transition-colors duration-200"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-6">
              FD365 ("Company," "we," "us," or "our") respects your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our website
              FoodDelivery365.com (the "Site"), mobile services, and related
              offerings (together, the "Services").
            </p>
            <div className="bg-warning-secondary border-l-4 border-warning-primary p-4 rounded-r-lg">
              <p className="text-base leading-relaxed text-primary">
                <strong>
                  By using our Services, you agree to the terms of this Privacy
                  Policy.
                </strong>{" "}
                If you do not agree, please discontinue use.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <section id="section-1" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              1. Information We Collect
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-6">
              We may collect the following types of information:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Personal Information",
                  description:
                    "Name, email address, phone number, payment details, and delivery address.",
                },
                {
                  title: "Account Information",
                  description:
                    "Login credentials, order history, and preferences.",
                },
                {
                  title: "Device & Usage Data",
                  description:
                    "IP address, browser type, operating system, and how you interact with our Site.",
                },
                {
                  title: "Cookies & Tracking",
                  description:
                    "We may use cookies and similar technologies to improve user experience, measure performance, and personalize content.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-layer-floor-2 p-4 rounded-lg border border-separator"
                >
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              2. How We Use Your Information
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-6">
              We use collected information to:
            </p>
            <ul className="space-y-3">
              {[
                "Process and deliver your food orders.",
                "Communicate with you about orders, promotions, or updates.",
                "Improve and personalize our Services.",
                "Ensure security, detect fraud, and comply with legal obligations.",
                "Analyze usage trends and enhance website performance.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-action-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              3. How We Share Your Information
            </h2>
            <div className="bg-positive-secondary border-l-4 border-positive-primary p-4 rounded-r-lg mb-6">
              <p className="text-primary font-semibold">
                We do not sell your personal information.
              </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-6">
              We may share it in limited ways:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Service Providers",
                  description:
                    "With delivery partners, payment processors, and IT providers to fulfill services.",
                },
                {
                  title: "Legal Obligations",
                  description:
                    "If required by law, regulation, or legal process.",
                },
                {
                  title: "Business Transfers",
                  description:
                    "In case of a merger, acquisition, or sale of assets.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-layer-floor-2 p-4 rounded-lg border border-separator"
                >
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              4. Cookies & Tracking Technologies
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-4">
              We use cookies and analytics tools (e.g., Google Analytics) to
              understand user behavior, store preferences, and improve Services.
            </p>
            <p className="text-base leading-relaxed text-secondary">
              You may disable cookies in your browser, but some features of the
              Site may not function properly.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              5. Data Security
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-4">
              We implement reasonable physical, electronic, and administrative
              safeguards to protect your personal data.
            </p>
            <div className="bg-warning-secondary border-l-4 border-warning-primary p-4 rounded-r-lg">
              <p className="text-primary">
                However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              6. Your Rights & Choices
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-6">
              Depending on your jurisdiction, you may have rights to:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Access, update, or delete your personal information.",
                "Opt out of marketing communications.",
                "Restrict certain data processing.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-action-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-action-secondary p-4 rounded-lg">
              <p className="text-primary">
                To exercise your rights, please contact us at{" "}
                <a
                  href="mailto:privacy@fooddelivery365.com"
                  className="text-action-primary hover:underline font-semibold"
                >
                  privacy@fooddelivery365.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              7. Children's Privacy
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary">
              Our Services are not directed to children under 13 (or 16 where
              applicable). We do not knowingly collect personal information from
              minors. If we discover such data has been provided, we will delete
              it promptly.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              8. Third-Party Links
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary">
              Our Site may contain links to third-party websites or apps. We are
              not responsible for their privacy practices.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              9. Changes to This Policy
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with the updated "Date."
            </p>
          </section>

          {/* Section 10 - Contact */}
          <section id="section-10" className="mb-12">
            <h2 className="font-semibold text-2xl md:text-3xl mb-6 text-primary">
              10. Contact Us
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-secondary mb-6">
              For questions or concerns regarding this Privacy Policy, please
              contact:
            </p>
            <div className="bg-layer-floor-2 p-6 rounded-lg border border-separator">
              <h3 className="font-semibold text-xl text-primary mb-4">
                FD365 – Food Delivery 365
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-action-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:privacy@fooddelivery365.com"
                    className="text-action-primary hover:underline"
                  >
                    privacy@fooddelivery365.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-action-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                  <a
                    href="https://fooddelivery365.com"
                    className="text-action-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FoodDelivery365.com
                  </a>
                </div>
                {/* <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-action-primary mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-secondary">
                    [Insert Business Address]
                  </span>
                </div> */}
              </div>
            </div>
          </section>

          {/* Back to Top Button */}
          <div className="text-center pt-8 border-t border-separator">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex !bg-[#0761a0] cursor-pointer items-center gap-2 px-6 py-3 bg-action-primary hover:bg-active-action-primary text-static-key-light font-semibold rounded-full transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
