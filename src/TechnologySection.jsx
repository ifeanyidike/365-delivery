const TechnologySection = ({
  title,
  subtitle,
  firstTitle,
  firstDesc,
  secondTitle,
  secondDesc,
  thirdTitle,
  thirdDesc,
  actionText,
  actionUrl,
}) => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col md:flex-row md:gap-x-28 md:items-center">
        <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
          <picture>
            <img
              alt="Become a restaurant partner"
              className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] hidden md:block"
              src="https://res.cloudinary.com/di6d28r5r/image/upload/v1756568047/Gemini_Generated_Image_ti60k6ti60k6ti60_lmgqa5.png"
              sizes="(min-width: 1120px) 1120px, 100vw"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="w-full md:max-w-[464px]">
          <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
            <picture>
              <img
                alt="Become a restaurant partner"
                className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] md:hidden mb-12"
                src="https://res.cloudinary.com/di6d28r5r/image/upload/v1756568047/Gemini_Generated_Image_ti60k6ti60k6ti60_lmgqa5.png"
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
                  {title}
                </h4>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col w-full gap-y-6">
                    <div className="mt-0 text-lg leading-[1.625rem] md:leading-7 font-normal mb-0 text-secondary">
                      {subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="[counter-reset:ordered-list-counter_var(--start-value,_0)] my-0 pl-0 mt-0 mb-0">
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-dark before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    {firstTitle}
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    {firstDesc}
                  </div>
                </div>
              </li>
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-dark before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    {secondTitle}
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    {secondDesc}
                  </div>
                </div>
              </li>
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-dark before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    {thirdTitle}
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    {thirdDesc}
                  </div>
                </div>
              </li>
            </ol>

            {actionText && actionUrl && (
              <div className="flex justify-center mt-2">
                <a
                  href={actionUrl}
                  role="button"
                  className="border-none !bg-[#0761a0] font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-8 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
                >
                  {actionText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
