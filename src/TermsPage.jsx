import React from "react";

const TermsPage = () => {
  return (
    <main className="py-24 md:py-32">
      <div className="container container-md px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="font-semibold text-2xl md:text-4xl mb-6"
              //   style={{ color: "#448844" }}
            >
              Terms & Conditions
            </h1>
            {/* <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Clear, straightforward terms for using FD365 delivery services.
            </p> */}
            <div
              className="w-24 h-1 mx-auto mt-8 rounded-full"
              style={{ backgroundColor: "#448844" }}
            ></div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              {/* Service Use */}
              <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    // style={{ backgroundColor: "#DDFF22" }}
                  >
                    <span className="text-xl">🛡️</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-semibold text-lg md:text-xl mb-4"
                      //   style={{ color: "#448844" }}
                    >
                      Service Use
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      FD365 provides delivery dispatch and billing services for
                      restaurants and drivers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Fees */}
              <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    // style={{ backgroundColor: "#EEDD66" }}
                  >
                    <span className="text-xl">💰</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-semibold text-lg md:text-xl mb-4"
                      //   style={{ color: "#448844" }}
                    >
                      Fees
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Restaurants save 5% compared to standard marketplace
                      rates. Drivers are paid per completed delivery.
                    </p>
                    {/* <div className="bg-gray-50 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          • Restaurant fees: 25% total (5% savings vs. typical
                          30%)
                        </li>
                        <li>
                          • Driver payments: Per-delivery rates plus tips and
                          bonuses
                        </li>
                        <li>• No hidden charges or surprise fees</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </section>

              {/* Payments */}
              <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    // style={{ backgroundColor: "#FFCCDD" }}
                  >
                    <span className="text-xl">💳</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-semibold text-lg md:text-xl mb-4"
                      //   style={{ color: "#448844" }}
                    >
                      Payments
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Invoices are billed automatically; ACH and credit card
                      options available. Card transactions incur processing
                      fees.
                    </p>
                    {/* <div className="bg-gray-50 rounded-lg p-4">
                      <ul className="space-y-2 text-gray-600">
                        <li>• ACH transfers: No additional processing fees</li>
                        <li>
                          • Credit card payments: Standard processing fees apply
                        </li>
                        <li>• Access billing at pay.fooddelivery365.com</li>
                        <li>
                          • Weekly billing cycles for predictable cash flow
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </section>

              {/* Responsibilities */}
              <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    // style={{ backgroundColor: "#DDAADD" }}
                  >
                    <span className="text-xl">🤝</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-semibold text-lg md:text-xl mb-4"
                      //   style={{ color: "#448844" }}
                    >
                      Responsibilities
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3
                          className="font-semibold text-lg mb-2"
                          //   style={{ color: "#448844" }}
                        >
                          Restaurants must:
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Invoices are billed automatically; ACH and credit card
                          options available. Card transactions incur processing
                          fees.
                        </p>
                      </div>
                      {/* <div>
                        <h3
                          className="font-semibold text-lg mb-2"
                          style={{ color: "#448844" }}
                        >
                          Drivers must:
                        </h3>
                        <ul className="space-y-1 text-gray-700 ml-4">
                          <li>
                            • Ensure safe and timely delivery of all orders
                          </li>
                          <li>
                            • Maintain professional conduct with customers
                          </li>
                          <li>
                            • Follow all traffic laws and safety protocols
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </section>

              {/* Liability */}
              <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      //   backgroundColor: "#FDF4F0",
                      color: "#448844",
                      border: "2px solid #448844",
                    }}
                  >
                    <span className="text-xl font-bold">!</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-semibold text-lg md:text-xl mb-4"
                      //   style={{ color: "#448844" }}
                    >
                      Liability
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      If a problem arises because of our driver—for instance, if
                      they lose a delivery or take it to the wrong address—we
                      take responsibility and will reimburse you.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    // style={{ backgroundColor: "#448844" }}
                  >
                    <span className="text-xl text-white">📄</span>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="font-semibold text-lg md:text-xl mb-4"
                      style={{ color: "#448844" }}
                    >
                      Termination
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Service may be canceled by either party with written
                      notice.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Last Updated & Contact */}
            {/* <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  <strong>Last Updated:</strong>{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600">
                  Questions about these terms? Contact us at{" "}
                  <a
                    href="mailto:mark@fooddelivery365.com"
                    className="font-semibold hover:underline"
                    style={{ color: "#448844" }}
                  >
                    mark@fooddelivery365.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:561-872-6155"
                    className="font-semibold hover:underline"
                    style={{ color: "#448844" }}
                  >
                    561-872-6155
                  </a>
                </p>
              </div>
            </div> */}
          </div>

          {/* CTA Section */}
          {/* <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
              <h2
                className="font-semibold text-2xl md:text-3xl mb-4"
                style={{ color: "#448844" }}
              >
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions about our terms or ready to join our platform?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    window.history.pushState({}, "", "/contact");
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                  className="px-8 py-4 rounded-full font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "#448844" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#3a7a3a";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#448844";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => {
                    window.history.pushState({}, "", "/");
                    window.dispatchEvent(new PopStateEvent("popstate"));
                  }}
                  className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    color: "#448844",
                    borderColor: "#448844",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#448844";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#448844";
                  }}
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default TermsPage;
