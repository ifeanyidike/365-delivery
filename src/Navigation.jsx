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

  // Professional menu items with proper icons
  const menuItems = [
    {
      title: "Become a driver",
      subtitle: "Make money on your terms",
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
      title: "Become a courier",
      subtitle: "Deliver food and get paid weekly",
      href: "/courier",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Add a restaurant or store",
      subtitle: "Reach more customers and increase earnings",
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
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Sign up as a fleet owner",
      subtitle: "Add your fleet to Bolt and boost your income",
      href: "/fleet",
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
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Bolt Business",
      subtitle: "Bolt products and services scaled-up for your business",
      href: "/business",
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM16 10h.01M12 10h.01M8 10h.01"
          />
        </svg>
      ),
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <header>
      <div
        id="navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="container container-md mx-auto relative">
          <nav className="flex justify-between items-center h-[60px] px-6">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                aria-label="Go to bolt.eu"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  className={`w-24 ${isScrolled && "bg-gray-400"}`}
                  //   src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NS4yNjIgMHYzMC4wNzRoLTcuMTM2VjEuNTA0TDU1LjI2MiAwek0zNC45NDUgMzIuOTI0YzEuOTcgMCAzLjU2OCAxLjU4NCAzLjU2OCAzLjUzOCAwIDEuOTU0LTEuNTk4IDMuNTM4LTMuNTY4IDMuNTM4cy0zLjU2OC0xLjU4NC0zLjU2OC0zLjUzOGMwLTEuOTU0IDEuNTk3LTMuNTM4IDMuNTY4LTMuNTM4em0wLTI0LjM4M2M2LjA3NSAwIDExLjAxIDQuODg0IDExLjAxIDEwLjkxOCAwIDYuMDM1LTQuOTM1IDEwLjkyLTExLjAxIDEwLjkyLTYuMDg1IDAtMTEuMDEtNC44ODUtMTEuMDEtMTAuOTIgMC02LjAzNCA0LjkzNS0xMC45MTggMTEuMDEtMTAuOTE4em0wIDE0LjQ1NmMxLjk3MiAwIDMuNTY4LTEuNTgyIDMuNTY4LTMuNTM4IDAtMS45NTUtMS41OTYtMy41MzgtMy41NjgtMy41MzhzLTMuNTY4IDEuNTgzLTMuNTY4IDMuNTM4YzAgMS45NTYgMS41OTYgMy41MzggMy41NjggMy41Mzh6bS0yMi40NDggMGMxLjIzIDAgMi4yMy0uOTkyIDIuMjMtMi4yMWEyLjIyNCAyLjIyNCAwIDAwLTIuMjMtMi4yMTJINy4xNDZ2NC40MjJoNS4zNTF6TTcuMTQ2IDcuMDc3djQuNDIyaDMuOTY0YzEuMjI5IDAgMi4yMy0uOTkzIDIuMjMtMi4yMTJhMi4yMjQgMi4yMjQgMCAwMC0yLjIzLTIuMjFINy4xNDZ6bTExLjkyMiA3LjA5NWMxLjcyNCAxLjY5IDIuNzk1IDQuMDMgMi43ODUgNi42MTQgMCA1LjEzLTQuMTkyIDkuMjg4LTkuMzY2IDkuMjg4SDBWMGgxMS4xYzUuMTczIDAgOS4zIDQuMTU4IDkuMzY4IDkuMjg4IDAgMi41ODUtMS4wNjEgNC45MjQtMi43ODUgNi42MTR6IiBmaWxsPSIjMzJiYjc4Ii8+PC9zdmc+"
                  src="/Final-FD365_white.png"
                  alt="Bolt Logo"
                />
              </a>
            </div>

            {/* Right side - Register & Hamburger */}
            <div className="flex items-center gap-4">
              {/* Register Button - Desktop only */}
              <div className="hidden sm:block">
                <button
                  className={`px-4 py-2 h-9 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                    isScrolled
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-sm"
                      : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 border border-white/20"
                  }`}
                >
                  Register
                </button>
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
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    isScrolled
                      ? "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl"
                      : "bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                  }`}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
