import React from "react";

const HowItWorks = () => {
  return (
    <section
      className="container container-md px-6 mb-32 md:mb-40 pt-28 -mt-28"
      id="how-it-works"
    >
      <section className="mb-0 !mb-4 md:!mb-23">
        <div className="flex flex-col md:flex-row md:gap-x-28 md:items-center">
          <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
            <picture>
              <source
                media="(max-width: 960px)"
                srcSet="https://bolt.eu/assets/static/c7e70b57ff9b31d01286541899cebdb3/29111/media03.webp 140w,
https://bolt.eu/assets/static/c7e70b57ff9b31d01286541899cebdb3/ad5f4/media03.webp 280w,
https://bolt.eu/assets/static/c7e70b57ff9b31d01286541899cebdb3/4b416/media03.webp 560w"
              />
              <img
                alt="How the Bolt Courier app works"
                className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[1/1] hidden md:block"
                src="https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/eec74/media03.webp"
                srcSet="https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/ad5f4/media03.webp 280w,
https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/4b416/media03.webp 560w,
https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/eec74/media03.webp 1120w"
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
                  srcSet="https://bolt.eu/assets/static/c7e70b57ff9b31d01286541899cebdb3/29111/media03.webp 140w,
https://bolt.eu/assets/static/c7e70b57ff9b31d01286541899cebdb3/ad5f4/media03.webp 280w,
https://bolt.eu/assets/static/c7e70b57ff9b31d01286541899cebdb3/4b416/media03.webp 560w"
                />
                <img
                  alt="How the Bolt Courier app works"
                  className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[1/1] md:hidden mb-12"
                  src="https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/eec74/media03.webp"
                  srcSet="https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/ad5f4/media03.webp 280w,
https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/4b416/media03.webp 560w,
https://bolt.eu/assets/static/1f138853f1e8e34fd9a6d916015d8980/eec74/media03.webp 1120w"
                  sizes="(min-width: 1120px) 1120px, 100vw"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col">
                <div
                  className="flex flex-col w-full gap-y-6"
                  id="lead-item-container-text"
                >
                  <h4 className="font-semibold mt-0 text-2xl md:text-4xl mb-0">
                    How the Bolt Courier app works
                  </h4>
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full gap-y-6">
                      <div className="mt-0 text-lg md:text-xl leading-[1.625rem] md:leading-7 font-normal mb-0 text-secondary">
                        Our app is designed to help couriers receive, deliver
                        and manage orders easily and effectively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol
                className="[counter-reset:ordered-list-counter_var(--start-value,_0)] my-0 pl-0 mt-0 mb-0"
                // style="--start-value:0"
              >
                <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                  <div className="flex flex-col">
                    <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                      Receive orders
                    </h5>
                    <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                      View incoming orders, check their details, and get going.
                    </div>
                  </div>
                </li>
                <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                  <div className="flex flex-col">
                    <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                      Pick up the order
                    </h5>
                    <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                      Collect the order from the restaurant or store.
                    </div>
                  </div>
                </li>
                <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                  <div className="flex flex-col">
                    <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                      Deliver
                    </h5>
                    <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                      Head to the delivery address as quickly and safely as
                      possible.
                    </div>
                  </div>
                </li>
                <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                  <div className="flex flex-col">
                    <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                      Track your earnings
                    </h5>
                    <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                      Track your progress in real-time and view your earnings
                      easily.
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
