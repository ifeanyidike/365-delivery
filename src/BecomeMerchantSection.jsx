// const BecomeMerchantSection = () => {
//   return (
//     <section className="container container-md px-6 mb-32 md:mb-40">
//       <div className="flex flex-col md:flex-row md:gap-x-28 md:items-center">
//         <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
//           <picture>
//             <source
//               media="(max-width: 960px)"
//               srcSet="https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/3c1fc/media01.webp 156w,
// https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/9f687/media01.webp 312w,
// https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/ce8c8/media01.webp 624w"
//             />
//             <img
//               alt="Become a merchant"
//               className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] hidden md:block"
//               src="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp"
//               srcSet="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/2681c/media01.webp 280w,
// https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/b3b36/media01.webp 560w,
// https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp 1120w"
//               sizes="(min-width: 1120px) 1120px, 100vw"
//               loading="lazy"
//             />
//           </picture>
//         </div>
//         <div className="w-full md:max-w-[464px]">
//           <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
//             <picture>
//               <source
//                 media="(max-width: 960px)"
//                 srcSet="https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/3c1fc/media01.webp 156w,
// https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/9f687/media01.webp 312w,
// https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/ce8c8/media01.webp 624w"
//               />
//               <img
//                 alt="Become a merchant"
//                 className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] md:hidden mb-12"
//                 src="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp"
//                 srcSet="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/2681c/media01.webp 280w,
// https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/b3b36/media01.webp 560w,
// https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp 1120w"
//                 sizes="(min-width: 1120px) 1120px, 100vw"
//                 loading="lazy"
//               />
//             </picture>
//           </div>
//           <div className="flex flex-col gap-y-8">
//             <div className="flex flex-col">
//               <div
//                 className="flex flex-col w-full gap-y-4"
//                 id="lead-item-container-text"
//               >
//                 <h4 className="font-semibold mt-0 text-2xl md:text-4xl mb-0">
//                   Become a Merchant
//                 </h4>
//                 <div className="flex flex-col w-full">
//                   <div className="flex flex-col w-full gap-y-6">
//                     <div className="mt-0 text-lg leading-[1.625rem] md:leading-7 font-normal mb-0 text-secondary">
//                       Keep more profits while reaching more customers
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <ol
//               className="[counter-reset:ordered-list-counter_var(--start-value,_0)] my-0 pl-0 mt-0 mb-0"
//               // style="--start-value:0"
//             >
//               <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
//                 <div className="flex flex-col">
//                   <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
//                     Keep using existing apps
//                   </h5>
//                   <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
//                     Keep using Uber, DoorDash & other apps — but save 5% on
//                     every order
//                   </div>
//                 </div>
//               </li>
//               <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
//                 <div className="flex flex-col">
//                   <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
//                     Simple setup
//                   </h5>
//                   <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
//                     Simple setup: Select "Self Delivery" in marketplace apps
//                   </div>
//                 </div>
//               </li>
//               <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
//                 <div className="flex flex-col">
//                   <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
//                     Expand your reach
//                   </h5>
//                   <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
//                     Expand reach with up to 10-mile delivery radius
//                   </div>
//                 </div>
//               </li>
//               <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
//                 <div className="flex flex-col">
//                   <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
//                     Real-time tracking
//                   </h5>
//                   <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
//                     Real-time tracking + automatic dispatch
//                   </div>
//                 </div>
//               </li>
//             </ol>

//             {/* CTA Button */}
//             <div className="flex justify-center mt-2">
//               <button
//                 type="button"
//                 className="border-none font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-8 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
//               >
//                 Partner With Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BecomeMerchantSection;

const BecomeMerchantSection = () => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col md:flex-row md:gap-x-28 md:items-center">
        <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
          <picture>
            <source
              media="(max-width: 960px)"
              srcSet="https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/3c1fc/media01.webp 156w,
https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/9f687/media01.webp 312w,
https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/ce8c8/media01.webp 624w"
            />
            <img
              alt="Become a restaurant partner"
              className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] hidden md:block"
              src="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp"
              srcSet="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/2681c/media01.webp 280w,
https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/b3b36/media01.webp 560w,
https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp 1120w"
              sizes="(min-width: 1120px) 1120px, 100vw"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="w-full md:max-w-[464px]">
          <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
            <picture>
              <source
                media="(max-width: 960px)"
                srcSet="https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/3c1fc/media01.webp 156w,
https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/9f687/media01.webp 312w,
https://bolt.eu/assets/static/0827392dac5b7bb0fe3858ffc7057162/ce8c8/media01.webp 624w"
              />
              <img
                alt="Become a restaurant partner"
                className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] md:hidden mb-12"
                src="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp"
                srcSet="https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/2681c/media01.webp 280w,
https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/b3b36/media01.webp 560w,
https://bolt.eu/assets/static/94e2b3160d0ae7c62a19fec613573407/1e482/media01.webp 1120w"
                sizes="(min-width: 1120px) 1120px, 100vw"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col">
              <div
                className="flex flex-col w-full gap-y-4"
                id="lead-item-container-text"
              >
                <h4 className="font-semibold mt-0 text-2xl md:text-4xl mb-0">
                  Partner with FD365
                </h4>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full gap-y-6">
                    <div className="mt-0 text-lg leading-[1.625rem] md:leading-7 font-normal mb-0 text-secondary">
                      Save 5% instantly while keeping your existing apps and
                      reaching more customers
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="[counter-reset:ordered-list-counter_var(--start-value,_0)] my-0 pl-0 mt-0 mb-0">
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    Typical marketplace apps: 30% fees
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Traditional delivery platforms charge up to 30% in
                    commission and fees, cutting into your profits.
                  </div>
                </div>
              </li>
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    FD365 total: 25%
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Our competitive rate means you keep more of what you earn on
                    every single order.
                  </div>
                </div>
              </li>
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    Just choose "Self-Delivery" mode
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Simply select self-delivery in your current apps - no new
                    software required.
                  </div>
                </div>
              </li>
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    Expand delivery range up to 10 miles
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Reach more customers with extended coverage and smart
                    dispatch technology.
                  </div>
                </div>
              </li>
            </ol>

            {/* EXACT: CTA Button */}
            <div className="flex justify-center mt-2">
              <button
                type="button"
                className="border-none font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-8 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMerchantSection;
