// const BenefitsSection = () => {
//   return (
//     <section className="container container-md px-6 mb-32 md:mb-40">
//       <div className="flex flex-col gap-y-8">
//         <div className="flex flex-col">
//           <div
//             className="flex flex-col w-full gap-y-6"
//             id="lead-item-container-text"
//           >
//             <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
//               Bolt Food benefits
//             </h3>
//           </div>
//         </div>
//         <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
//           <div className="w-full">
//             <div className="flex gap-4 flex-col md:flex-col">
//               <div className="text-tertiary">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="text-primary"
//                 >
//                   <path
//                     d="M8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H20C21.1046 3 22 3.89543 22 5V9.29168C21.4003 8.7549 20.7281 8.29736 20 7.93552V5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5H4V10H9.29168C7.86656 11.5923 7 13.6949 7 16C7 18.3051 7.86656 20.4077 9.29168 22H4C2.89543 22 2 21.1046 2 20V5C2 3.89543 2.89543 3 4 3H7V2C7 1.44772 7.44772 1 8 1Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M15.9995 9C14.1045 9 12.3905 9.76707 11.1478 11.0098C9.90495 12.2527 9.13794 13.9669 9.13794 15.8615C9.13794 17.7567 9.90489 19.4708 11.1475 20.7135C12.3902 21.9561 14.1043 22.7231 15.9995 22.7231C17.8947 22.7231 19.6092 21.956 20.8522 20.7133C22.0951 19.4706 22.8622 17.7565 22.8622 15.8615C22.8622 13.9671 22.095 12.2529 20.8519 11.0099C19.6089 9.76713 17.8945 9 15.9995 9ZM15.075 12C15.075 11.4891 15.4892 11.075 16 11.075C16.5109 11.075 16.925 11.4891 16.925 12V16C16.925 16.282 16.7964 16.5486 16.5756 16.7241L13.5103 19.1602C13.1104 19.478 12.5285 19.4115 12.2107 19.0115C11.8928 18.6116 11.9594 18.0297 12.3593 17.7119L15.075 15.5535V12Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </div>
//               <div>
//                 <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
//                   Weekly payouts
//                 </h6>
//                 <div className="flex flex-col gap-y-4">
//                   <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
//                     Receive your earnings at the end of each week, with no
//                     monthly fees.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             <div className="flex gap-4 flex-col md:flex-col">
//               <div className="text-tertiary">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="text-primary"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M23 11.999C23 18.074 18.074 22.998 11.999 22.998C5.92402 22.998 1 18.074 1 11.999C1 5.92599 5.92402 1 11.999 1C18.074 1 23 5.92599 23 11.999ZM11.075 4.99902C11.075 4.48816 11.4891 4.07402 12 4.07402C12.5109 4.07402 12.925 4.48816 12.925 4.99902V11.999C12.925 12.2811 12.7963 12.5477 12.5755 12.7232L7.66195 16.6282C7.26201 16.9461 6.68012 16.8795 6.36227 16.4796C6.04442 16.0796 6.11097 15.4977 6.51091 15.1799L11.075 11.5526V4.99902Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </div>
//               <div>
//                 <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
//                   Flexible schedule
//                 </h6>
//                 <div className="flex flex-col gap-y-4">
//                   <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
//                     Choose when and how often to earn money delivering orders.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             <div className="flex gap-4 flex-col md:flex-col">
//               <div className="text-tertiary">
//                 <svg
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="text-primary"
//                 >
//                   <path
//                     d="M7.59878 1.2968C7.20826 0.906275 6.5751 0.906275 6.18457 1.2968L2.64748 4.83389C2.25696 5.22441 2.25696 5.85758 2.64748 6.2481L6.18457 9.78519C6.5751 10.1757 7.20826 10.1757 7.59878 9.78519L11.1359 6.2481C11.5264 5.85758 11.5264 5.22441 11.1359 4.83389L7.59878 1.2968Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M15.7201 7.1517C16.825 7.1517 17.7201 6.25648 17.7201 5.15131C17.7201 4.04614 16.825 3.1517 15.7201 3.1517C14.6159 3.1517 13.7201 4.04614 13.7201 5.15131C13.7201 6.25648 14.6159 7.1517 15.7201 7.1517Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M5.5 13.0009C3.01432 13.0009 1 15.0152 1 17.5009C1 19.9865 3.01432 22.0009 5.5 22.0009C7.98568 22.0009 10 19.9865 10 17.5009C10 15.0152 7.98568 13.0009 5.5 13.0009ZM3 17.5009C3 16.1197 4.11888 15.0009 5.5 15.0009C6.88112 15.0009 8 16.1197 8 17.5009C8 18.882 6.88112 20.0009 5.5 20.0009C4.11888 20.0009 3 18.882 3 17.5009Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M19.5 13.0009C17.0143 13.0009 15 15.0152 15 17.5009C15 19.9865 17.0143 22.0009 19.5 22.0009C21.9857 22.0009 24 19.9865 24 17.5009C24 15.0152 21.9857 13.0009 19.5 13.0009ZM17 17.5009C17 16.1197 18.1189 15.0009 19.5 15.0009C20.8811 15.0009 22 16.1197 22 17.5009C22 18.882 20.8811 20.0009 19.5 20.0009C18.1189 20.0009 17 18.882 17 17.5009Z"
//                     fill="currentColor"
//                   ></path>
//                   <path
//                     d="M17.697 11.448C18.3874 11.448 18.947 10.8883 18.947 10.198C18.947 9.50762 18.3874 8.94797 17.697 8.94797H15.6708L13.815 7.09221C13.3268 6.60406 12.5354 6.60406 12.0472 7.09221L9.21724 9.92219C8.33856 10.8009 8.33856 12.2255 9.21724 13.1042L11.2536 15.1406V19.0259C11.2536 19.7162 11.8133 20.2759 12.5036 20.2759C13.194 20.2759 13.7536 19.7162 13.7536 19.0259V14.6228C13.7536 14.2913 13.6219 13.9733 13.3875 13.7389L11.1618 11.5132L12.9311 9.74386L14.2691 11.0819C14.5035 11.3163 14.8215 11.448 15.153 11.448H17.697Z"
//                     fill="currentColor"
//                   ></path>
//                 </svg>
//               </div>
//               <div>
//                 <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
//                   Deliver food your way
//                 </h6>
//                 <div className="flex flex-col gap-y-4">
//                   <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
//                     Want to make money as a delivery driver, or get some
//                     exercise on your bike? You decide.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

const BenefitsSection = () => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col">
          <div
            className="flex flex-col w-full gap-y-6"
            id="lead-item-container-text"
          >
            <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
              FD365 benefits
            </h3>
          </div>
        </div>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
          <div className="w-full">
            <div className="flex gap-4 flex-col md:flex-col">
              <div className="text-tertiary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3H20C21.1046 3 22 3.89543 22 5V9.29168C21.4003 8.7549 20.7281 8.29736 20 7.93552V5H17V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5H4V10H9.29168C7.86656 11.5923 7 13.6949 7 16C7 18.3051 7.86656 20.4077 9.29168 22H4C2.89543 22 2 21.1046 2 20V5C2 3.89543 2.89543 3 4 3H7V2C7 1.44772 7.44772 1 8 1Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9995 9C14.1045 9 12.3905 9.76707 11.1478 11.0098C9.90495 12.2527 9.13794 13.9669 9.13794 15.8615C9.13794 17.7567 9.90489 19.4708 11.1475 20.7135C12.3902 21.9561 14.1043 22.7231 15.9995 22.7231C17.8947 22.7231 19.6092 21.956 20.8522 20.7133C22.0951 19.4706 22.8622 17.7565 22.8622 15.8615C22.8622 13.9671 22.095 12.2529 20.8519 11.0099C19.6089 9.76713 17.8945 9 15.9995 9ZM15.075 12C15.075 11.4891 15.4892 11.075 16 11.075C16.5109 11.075 16.925 11.4891 16.925 12V16C16.925 16.282 16.7964 16.5486 16.5756 16.7241L13.5103 19.1602C13.1104 19.478 12.5285 19.4115 12.2107 19.0115C11.8928 18.6116 11.9594 18.0297 12.3593 17.7119L15.075 15.5535V12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
                  Save 5% instantly on every order
                </h6>
                <div className="flex flex-col gap-y-4">
                  <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Keep more profits with our competitive 25% total fees vs
                    typical 30% marketplace rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-4 flex-col md:flex-col">
              <div className="text-tertiary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 11.999C23 18.074 18.074 22.998 11.999 22.998C5.92402 22.998 1 18.074 1 11.999C1 5.92599 5.92402 1 11.999 1C18.074 1 23 5.92599 23 11.999ZM11.075 4.99902C11.075 4.48816 11.4891 4.07402 12 4.07402C12.5109 4.07402 12.925 4.48816 12.925 4.99902V11.999C12.925 12.2811 12.7963 12.5477 12.5755 12.7232L7.66195 16.6282C7.26201 16.9461 6.68012 16.8795 6.36227 16.4796C6.04442 16.0796 6.11097 15.4977 6.51091 15.1799L11.075 11.5526V4.99902Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
                  Real-time order tracking
                </h6>
                <div className="flex flex-col gap-y-4">
                  <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Complete visibility from pickup to delivery with live
                    updates for restaurants and customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-4 flex-col md:flex-col">
              <div className="text-tertiary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path
                    d="M7.59878 1.2968C7.20826 0.906275 6.5751 0.906275 6.18457 1.2968L2.64748 4.83389C2.25696 5.22441 2.25696 5.85758 2.64748 6.2481L6.18457 9.78519C6.5751 10.1757 7.20826 10.1757 7.59878 9.78519L11.1359 6.2481C11.5264 5.85758 11.5264 5.22441 11.1359 4.83389L7.59878 1.2968Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.7201 7.1517C16.825 7.1517 17.7201 6.25648 17.7201 5.15131C17.7201 4.04614 16.825 3.1517 15.7201 3.1517C14.6159 3.1517 13.7201 4.04614 13.7201 5.15131C13.7201 6.25648 14.6159 7.1517 15.7201 7.1517Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.5 13.0009C3.01432 13.0009 1 15.0152 1 17.5009C1 19.9865 3.01432 22.0009 5.5 22.0009C7.98568 22.0009 10 19.9865 10 17.5009C10 15.0152 7.98568 13.0009 5.5 13.0009ZM3 17.5009C3 16.1197 4.11888 15.0009 5.5 15.0009C6.88112 15.0009 8 16.1197 8 17.5009C8 18.882 6.88112 20.0009 5.5 20.0009C4.11888 20.0009 3 18.882 3 17.5009Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.5 13.0009C17.0143 13.0009 15 15.0152 15 17.5009C15 19.9865 17.0143 22.0009 19.5 22.0009C21.9857 22.0009 24 19.9865 24 17.5009C24 15.0152 21.9857 13.0009 19.5 13.0009ZM17 17.5009C17 16.1197 18.1189 15.0009 19.5 15.0009C20.8811 15.0009 22 16.1197 22 17.5009C22 18.882 20.8811 20.0009 19.5 20.0009C18.1189 20.0009 17 18.882 17 17.5009Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.697 11.448C18.3874 11.448 18.947 10.8883 18.947 10.198C18.947 9.50762 18.3874 8.94797 17.697 8.94797H15.6708L13.815 7.09221C13.3268 6.60406 12.5354 6.60406 12.0472 7.09221L9.21724 9.92219C8.33856 10.8009 8.33856 12.2255 9.21724 13.1042L11.2536 15.1406V19.0259C11.2536 19.7162 11.8133 20.2759 12.5036 20.2759C13.194 20.2759 13.7536 19.7162 13.7536 19.0259V14.6228C13.7536 14.2913 13.6219 13.9733 13.3875 13.7389L11.1618 11.5132L12.9311 9.74386L14.2691 11.0819C14.5035 11.3163 14.8215 11.448 15.153 11.448H17.697Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
                  Expand delivery range up to 10 miles
                </h6>
                <div className="flex flex-col gap-y-4">
                  <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Reach more customers than ever before with extended coverage
                    and smart routing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
