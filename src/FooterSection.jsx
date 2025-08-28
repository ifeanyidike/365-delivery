// import React from "react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = [
//     {
//       title: "Product",
//       links: [
//         { name: "For Restaurants", href: "#" },
//         { name: "For Drivers", href: "#" },
//         { name: "How it Works", href: "#" },
//         { name: "Pricing", href: "#" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { name: "About Us", href: "#" },
//         { name: "Contact", href: "#" },
//         { name: "Careers", href: "#" },
//         { name: "Blog", href: "#" },
//       ],
//     },
//     {
//       title: "Support",
//       links: [
//         { name: "Help Center", href: "#" },
//         { name: "Safety", href: "#" },
//         { name: "Terms of Service", href: "#" },
//         { name: "Privacy Policy", href: "#" },
//       ],
//     },
//   ];

//   const socialLinks = [
//     {
//       name: "Twitter",
//       href: "#",
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//         </svg>
//       ),
//     },
//     {
//       name: "LinkedIn",
//       href: "#",
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//         </svg>
//       ),
//     },
//     {
//       name: "Instagram",
//       href: "#",
//       icon: (
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12.017 0C8.396 0 7.989.014 6.756.072 2.199.272.272 2.199.072 6.756.014 7.989 0 8.396 0 12.017c0 3.624.014 4.031.072 5.263.2 4.558 2.127 6.484 6.684 6.685 1.232.058 1.639.072 5.261.072 3.624 0 4.031-.014 5.262-.072 4.558-.201 6.484-2.127 6.685-6.685C24.014 16.048 24 15.641 24 12.017c0-3.624-.014-4.031-.072-5.262C23.728 2.197 21.801.271 17.244.072 16.011.014 15.604 0 12.017 0zm0 5.838a6.18 6.18 0 110 12.36 6.18 6.18 0 010-12.36zM12.017 15.592a3.475 3.475 0 100-6.95 3.475 3.475 0 000 6.95zm6.624-10.15a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container container-md px-6 py-12 md:py-16">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           {/* Brand Section */}
//           <div className="md:col-span-1">
//             <div className="mb-6">
//               <h3 className="text-2xl font-bold text-white">
//                 <img
//                   className="w-32"
//                   src="/Final-FD365_white.png"
//                   alt="Bolt Logo"
//                 />
//               </h3>
//               <p className="text-gray-400 mt-2 text-sm">
//                 One Platform. More Orders. More Earnings.
//               </p>
//             </div>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   className="text-gray-400 hover:text-action-primary transition-colors duration-300"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links Sections */}
//           {footerLinks.map((section) => (
//             <div key={section.title}>
//               <h4 className="text-lg font-semibold text-white mb-4">
//                 {section.title}
//               </h4>
//               <ul className="space-y-2">
//                 {section.links.map((link) => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
//                     >
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-8 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-400 text-sm mb-4 md:mb-0">
//               © {currentYear} 365 Delivery. All rights reserved.
//             </div>
//             <div className="flex space-x-6 text-sm">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//               >
//                 Privacy Policy
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors duration-300"
//               >
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // UPDATED: FD365 footer links but keeping same structure
  const footerLinks = [
    {
      title: "Product",
      links: [
        {
          name: "For Restaurants",
          action: () => handleNavigation("/restaurant"),
        },
        { name: "For Drivers", action: () => handleNavigation("/driver") },
        { name: "How it Works", action: () => handleNavigation("/about") },
        { name: "Contact", action: () => handleNavigation("/contact") },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", action: () => handleNavigation("/about") },
        { name: "Contact", action: () => handleNavigation("/contact") },
        {
          name: "Terms & Conditions",
          action: () => handleNavigation("/terms"),
        },
        { name: "Privacy Policy", action: () => handleNavigation("/terms") },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", action: () => handleNavigation("/contact") },
        {
          name: "Call: 561-872-6155",
          action: () => window.open("tel:561-872-6155"),
        },
        {
          name: "Email Support",
          action: () => window.open("mailto:mark@fooddelivery365.com"),
        },
        {
          name: "Billing Portal",
          action: () =>
            window.open("https://pay.fooddelivery365.com", "_blank"),
        },
      ],
    },
  ];

  // UPDATED: FD365 social links
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/fd365",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/fd365",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/fd365",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.014 6.756.072 2.199.272.272 2.199.072 6.756.014 7.989 0 8.396 0 12.017c0 3.624.014 4.031.072 5.263.2 4.558 2.127 6.484 6.684 6.685 1.232.058 1.639.072 5.261.072 3.624 0 4.031-.014 5.262-.072 4.558-.201 6.484-2.127 6.685-6.685C24.014 16.048 24 15.641 24 12.017c0-3.624-.014-4.031-.072-5.262C23.728 2.197 21.801.271 17.244.072 16.011.014 15.604 0 12.017 0zm0 5.838a6.18 6.18 0 110 12.36 6.18 6.18 0 010-12.36zM12.017 15.592a3.475 3.475 0 100-6.95 3.475 3.475 0 000 6.95zm6.624-10.15a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container container-md px-6 py-12 md:py-16">
        {/* EXACT: Main Footer Content - same structure */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* UPDATED: Brand Section - FD365 instead of Bolt */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">
                <img
                  className="w-32"
                  src="/Final-FD365_white.png"
                  alt="Bolt Logo"
                />
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                A Smarter Way to Deliver. More Orders. More Earnings.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-action-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* EXACT: Links Sections - same structure */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm bg-transparent border-none p-0 cursor-pointer text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* EXACT: Bottom Section - same structure */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} FD365. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => handleNavigation("/terms")}
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("/terms")}
                className="text-gray-400 hover:text-white transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
