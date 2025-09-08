import { ImageHeroSection } from "./HeroSection";

const DeliveryCostAnalysisPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <ImageHeroSection
        imgUrl="/dashboard.jpeg"
        bigText="Delivery Cost Analysis"
        smallText="Upload Your Report. We'll Show You the Savings."
        button="Upload Reports & Get Analysis"
        actionUrl="https://form.jotform.com/252497294793272"
      />

      {/* Simply upload your Uber Eats, DoorDash, Grubhub, or other marketplace Payment Detail Report from the past 30 days, and our team will analyze it for free. We'll show you exactly where you're overpaying and how much you can save with FD365 — no obligation, just insights. */}

      <section className="container container-md px-6 mb-32 md:mb-40">
        <div className="flex flex-col items-center text-center gap-y-8">
          {/* Subtitle + Desc */}
          <div className="flex flex-col items-center justify-center gap-4 max-w-4xl">
            <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
              Simply upload your Uber Eats, DoorDash, Grubhub, or other
              marketplace Payment Detail Report from the past 30 days, and our
              team will analyze it for free. We'll show you exactly where you're
              overpaying and how much you can save with FD365 — no obligation,
              just insights.
            </p>
          </div>
        </div>
      </section>

      {/* How to Request Reports Section */}
      <section className="container container-md px-6 mb-32 md:mb-40">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col">
            <h3 className="font-semibold text-center md:text-left mt-0 text-2xl md:text-3xl mb-0">
              How to Request Your Delivery Payment Detail Report
            </h3>
            <div className="flex flex-col w-full gap-y-6 mt-4">
              <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                To analyze your true delivery costs, you'll need a{" "}
                <strong>Payment Detail Report</strong> (sometimes called a
                payout or fee breakdown) from your delivery marketplace(s).
                Below are the instructions for the most common platforms:
              </p>
            </div>
          </div>

          {/* Platform Instructions - Row Layout */}
          <div className="flex flex-col gap-6">
            {/* Uber Eats Row */}
            <div className="border border-separator rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png"
                    alt="Uber Eats"
                    className="w-16 h-10 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-16 h-10 bg-black rounded flex items-center justify-center text-white text-sm font-bold"
                    style={{ display: "none" }}
                  >
                    UBER EATS
                  </div>
                  <h6 className="font-semibold mt-0 text-lg mb-0">Uber Eats</h6>
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-semibold text-sm mb-1">Email:</p>
                      <p className="text-sm text-secondary">
                        merchants@uber.com
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">
                        Subject Line:
                      </p>
                      <p className="text-sm text-secondary italic">
                        Request for Payment Detail Report & Detailed Pricing
                        Structure
                      </p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="font-semibold text-sm mb-2">
                      Message Template:
                    </p>
                    <p className="text-sm text-secondary bg-gray-50 p-3 rounded border">
                      Hello, Please provide the{" "}
                      <strong>Payment Detail Report</strong> (including all
                      fees, commissions, and taxes) for my restaurant account
                      covering the past 30 days. Thank you, [Restaurant Name /
                      Store ID]
                    </p>
                  </div>

                  <p className="text-sm text-secondary">
                    Uber Support will usually send this within a few business
                    days.
                  </p>
                </div>
              </div>
            </div>

            {/* DoorDash Row */}
            <div className="border border-separator rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/11/DoorDash-Logo.png"
                    alt="DoorDash"
                    className="w-16 h-10 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-16 h-10 bg-red-600 rounded flex items-center justify-center text-white text-sm font-bold"
                    style={{ display: "none" }}
                  >
                    DOORDASH
                  </div>
                  <h6 className="font-semibold mt-0 text-lg mb-0">DoorDash</h6>
                </div>

                <div className="flex-1">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">
                      • Log in to your <strong>Merchant Portal</strong> at{" "}
                      <a href="portal.doordash.com">portal.doordash.com</a>
                    </p>
                    <p className="text-sm text-secondary">
                      • Navigate to{" "}
                      <strong>Payments → Payouts → Download Statement</strong>
                    </p>
                    <p className="text-sm text-secondary">
                      • If you need more detailed fee data, email{" "}
                      <strong>
                        <a href="mailto:merchant-support@doordash.com?subject=Marketplace%20Fee%20Breakdown%20Report">
                          merchant-support@doordash.com
                        </a>
                      </strong>{" "}
                      with a request for the{" "}
                      <strong>"Marketplace Fee Breakdown Report"</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grubhub Row */}
            <div className="border border-separator rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/11/Grubhub-Logo.png"
                    alt="Grubhub"
                    className="w-16 h-10 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-16 h-10 bg-orange-600 rounded flex items-center justify-center text-white text-sm font-bold"
                    style={{ display: "none" }}
                  >
                    GRUBHUB
                  </div>
                  <h6 className="font-semibold mt-0 text-lg mb-0">Grubhub</h6>
                </div>

                <div className="flex-1">
                  <div className="space-y-2">
                    <p className="text-sm text-secondary">
                      • Email{" "}
                      <strong>
                        <a href="restaurants@grubhub.com">
                          restaurants@grubhub.com
                        </a>
                      </strong>{" "}
                      or open a case in your{" "}
                      <strong>Grubhub for Restaurants dashboard</strong>
                    </p>
                    <p className="text-sm text-secondary">
                      • Ask for:{" "}
                      <em>
                        "Detailed Payment Report with commission, delivery,
                        marketing, and adjustment fees for the past 30 days."
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Upload Section */}
      <section className="container container-md px-6 mb-32 md:mb-40">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col">
            <h3 className="font-semibold text-center md:text-left mt-0 text-2xl md:text-3xl mb-0">
              What to Upload to FD365
            </h3>
          </div>

          <div className="flex flex-col gap-y-3">
            <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
              • <strong>Excel, or CSV</strong> of your Payment Detail Report
              (last 30 days).
            </p>
            <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
              • If you receive multiple files, upload them all so we can give
              you the clearest savings picture.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Form Section */}
      <section className="container container-md px-6 mb-32 md:mb-40">
        <div className="flex flex-col md:flex-row md:gap-x-28 md:items-center">
          <div className="w-full md:max-w-[464px]">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col">
                <h3 className="font-semibold mt-0 text-center md:text-left text-2xl md:text-3xl mb-0">
                  Submit Your Reports
                </h3>
                <div className="flex flex-col w-full gap-y-4 mt-4">
                  <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Ready to see your potential savings? Use our secure form to
                    upload your payment detail reports and provide your contact
                    information. We'll analyze your data and get back to you
                    with a detailed savings breakdown.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://form.jotform.com/252497294793272"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  className="border-none !bg-[#1461a0] font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-8 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
                >
                  Upload Reports & Get Analysis
                </a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-full h-auto md:max-w-[560px] mt-8 md:mt-0">
            <div className="bg-gray-50 rounded-xl p-8 border border-separator">
              <div className="text-center">
                <div className="w-16 h-16 bg-action-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-static-key-light"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-3">
                  What You'll Provide
                </h4>
                <div className="text-sm text-secondary space-y-2">
                  <p>• Your contact details</p>
                  <p>• Payment detail reports (Excel/CSV)</p>
                  <p>• Brief description of your delivery volume</p>
                  <p>• Any specific questions about costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeliveryCostAnalysisPage;
