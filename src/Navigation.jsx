import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navigation background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.4; // Trigger when 40% down the viewport
      setIsScrolled(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#navigation")) {
        setMobileMenuOpen(false);
        setDesktopMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setDesktopMenuOpen(false);
  };

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
    setMobileMenuOpen(false);
  };
  const menuItems = [
    {
      title: "Become a driver",
      subtitle: "Flexible hours, steady income",
      href: "/driver",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Restaurant partner",
      subtitle: "Save 5% on every delivery",
      href: "/restaurant",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Delivery Cost Analysis",
      subtitle: "See how much you can save",
      href: "/cost-analysis",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "About FD365",
      subtitle: "Learn about our platform",
      href: "/about",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Contact us",
      subtitle: "Get started today",
      href: "/contact",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <header>
      <div
        id="navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-black backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="container container-md mx-auto relative">
          <nav className="flex justify-between items-center h-[80px] px-6">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                aria-label="Go to bolt.eu"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  className={`w-40`}
                  src="/Final-FD365_white.png"
                  alt="Bolt Logo"
                />
              </a>
            </div>

            {/* Right side - Register & Hamburger */}
            <div className="flex items-center gap-4">
              {/* Register Button - Desktop only */}
              <div className="hidden sm:block">
                <a
                  href="/contact"
                  className={`px-4 py-2 h-9 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                    isScrolled
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm"
                      : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/20"
                  }`}
                >
                  Contact
                </a>
              </div>

              {/* Hamburger Menu */}
              <button
                onClick={
                  window.innerWidth >= 640
                    ? toggleDesktopMenu
                    : toggleMobileMenu
                }
                aria-label="Toggle menu"
                className={`relative cursor-pointer w-9 h-9 flex flex-col justify-center items-center group rounded-lg transition-all duration-200 hover:scale-105 ${
                  isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
                }`}
              >
                <div
                  className={`h-0.5 w-4 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen || desktopMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : ""
                  }`}
                />
                <div
                  className={`h-0.5 w-4 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen || desktopMenuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  } mt-1`}
                />
                <div
                  className={`h-0.5 w-4 rounded-full transition-all duration-300 ${
                    isScrolled ? "bg-gray-700" : "bg-white"
                  } ${
                    mobileMenuOpen || desktopMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : ""
                  } mt-1`}
                />
              </button>
            </div>
          </nav>

          {/* Desktop Dropdown */}
          <div
            className={`hidden sm:block absolute top-full right-6 transition-all duration-300 ease-out ${
              desktopMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4"
            }`}
          >
            <div className="w-96 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 mt-2 overflow-hidden">
              <div className="p-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 px-4 py-4 rounded-lg hover:bg-gray-50/80 transition-all duration-200 group hover:shadow-sm"
                    onClick={() => setDesktopMenuOpen(false)}
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-200`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 mb-1 group-hover:text-gray-800">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {item.subtitle}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden transition-all duration-400 ease-in-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
              : "bg-black/90 backdrop-blur-xl"
          }`}
        >
          <div className="container container-md mx-auto px-6 py-6">
            <div className="space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    isScrolled
                      ? "hover:bg-gray-50 text-gray-900 hover:shadow-sm"
                      : "hover:bg-white/10 text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      isScrolled
                        ? `${item.bgColor} ${item.color}`
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div
                      className={`text-sm leading-relaxed ${
                        isScrolled ? "text-gray-600" : "text-gray-300"
                      }`}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </a>
              ))}

              {/* Mobile Register Button */}
              <div className="pt-4 mt-4 border-t border-gray-200/30">
                <a
                  href="/contact"
                  className={`block  text-center px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    isScrolled
                      ? "bg-action-primary text-white shadow-lg hover:shadow-xl"
                      : "bg-action-primary text-white shadow-lg"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
