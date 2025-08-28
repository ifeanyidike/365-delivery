// import React from "react";

// const PartnersSection = () => {
//   const partners = [
//     {
//       name: "Uber",
//       logo: "https://main-cdn.grabone.co.nz/goimage/fullsize/e5e99cc23a031d00dacbdbff5baedd58cee280b0.jpg",
//     },
//     {
//       name: "DoorDash",
//       logo: "https://assets1.chainstoreage.com/images/v/max_width_1440/2021-03/Doordash_logo_0.jpg",
//     },
//     {
//       name: "Grubhub",
//       logo: "https://onecard.media.uconn.edu/wp-content/uploads/sites/1791/2024/11/JET_Grubhub_logo_horizontal-_sRGB-R-Orange.png",
//     },
//     {
//       name: "Postmates",
//       logo: "https://cdn.prod.website-files.com/600ee75084e3fe0e5731624c/65b63fa529985c6bb0bbc088_postmates-2.svg",
//     },
//     {
//       name: "SkipTheDishes",
//       logo: "https://cdn.prod.website-files.com/64bc25206b4ad5fcc261b3aa/64cf08bba5eab42662604262_hgX_aosf-AtLFAIPFjeeuIcEkEXwMniie6_oDMSLi2s.png",
//     },
//     {
//       name: "Uber Eats",
//       logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsnv-AfjVEJYpaGtWHXvcErZXSMA3LvCxag&s",
//     },
//   ];

//   // Create enough duplicates for seamless scrolling
//   const duplicatedPartners = [...partners, ...partners];

//   return (
//     <section className="pb-32 bg-white">
//       <div className="container container-md px-6">
//         <h3 className="font-semibold text-2xl md:text-3xl text-center text-primary mb-8">
//           Our Partners
//         </h3>

//         <div className="relative overflow-hidden">
//           {/* Subtle fade edges */}
//           <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

//           <div className="flex items-center">
//             <div className="flex animate-scroll-smooth">
//               {duplicatedPartners.map((partner, index) => (
//                 <div
//                   key={`${partner.name}-${index}`}
//                   className="flex-shrink-0 flex items-center justify-center px-8"
//                   style={{ minWidth: "200px" }}
//                 >
//                   <img
//                     src={partner.logo}
//                     alt={`${partner.name} logo`}
//                     className="h-18 max-w-[160px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
//                     onError={(e) => {
//                       e.target.style.display = "none";
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-smooth {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-200px * 6));
//           }
//         }

//         .animate-scroll-smooth {
//           animation: scroll-smooth 15s linear infinite;
//           width: calc(200px * 12);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PartnersSection;

import React from "react";

const PartnersSection = () => {
  // UPDATED: Partner platforms we integrate with
  const partners = [
    {
      name: "Uber Eats",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsnv-AfjVEJYpaGtWHXvcErZXSMA3LvCxag&s",
    },
    {
      name: "DoorDash",
      logo: "https://assets1.chainstoreage.com/images/v/max_width_1440/2021-03/Doordash_logo_0.jpg",
    },
    {
      name: "Grubhub",
      logo: "https://onecard.media.uconn.edu/wp-content/uploads/sites/1791/2024/11/JET_Grubhub_logo_horizontal-_sRGB-R-Orange.png",
    },
    {
      name: "Postmates",
      logo: "https://cdn.prod.website-files.com/600ee75084e3fe0e5731624c/65b63fa529985c6bb0bbc088_postmates-2.svg",
    },
    {
      name: "SkipTheDishes",
      logo: "https://cdn.prod.website-files.com/64bc25206b4ad5fcc261b3aa/64cf08bba5eab42662604262_hgX_aosf-AtLFAIPFjeeuIcEkEXwMniie6_oDMSLi2s.png",
    },
  ];

  // Create enough duplicates for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="pb-32 bg-white">
      <div className="container container-md px-6">
        <h3 className="font-semibold text-2xl md:text-3xl text-center text-primary mb-8">
          Integrates With Your Existing Apps
        </h3>

        <div className="relative overflow-hidden">
          {/* Subtle fade edges */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center">
            <div className="flex animate-scroll-smooth">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-8"
                  style={{ minWidth: "200px" }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-18 max-w-[160px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * 5));
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 15s linear infinite;
          width: calc(200px * 10);
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;
