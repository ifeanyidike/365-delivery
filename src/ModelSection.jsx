const ModelSection = ({
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
      <div className="flex flex-col md:flex-row md:gap-x-28 md:items-center md:flex-row-reverse">
        <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
          <picture>
            <source
              media="(max-width: 960px)"
              srcSet="https://bolt.eu/assets/static/4f182f2f823e642d5687ea49af564158/3c1fc/media02.webp 156w,
https://bolt.eu/assets/static/4f182f2f823e642d5687ea49af564158/9f687/media02.webp 312w,
https://bolt.eu/assets/static/4f182f2f823e642d5687ea49af564158/ce8c8/media02.webp 624w"
            />
            <img
              alt="Become a driver"
              className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] hidden md:block"
              src="https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/1e482/media02.webp"
              srcSet="https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/2681c/media02.webp 280w,
https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/b3b36/media02.webp 560w,
https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/1e482/media02.webp 1120w"
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
                srcSet="https://bolt.eu/assets/static/4f182f2f823e642d5687ea49af564158/3c1fc/media02.webp 156w,
https://bolt.eu/assets/static/4f182f2f823e642d5687ea49af564158/9f687/media02.webp 312w,
https://bolt.eu/assets/static/4f182f2f823e642d5687ea49af564158/ce8c8/media02.webp 624w"
              />
              <img
                alt="Become a driver"
                className="relative block rounded w-full h-auto inset-0 object-cover object-center aspect-[4/3] md:hidden mb-12"
                src="https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/1e482/media02.webp"
                srcSet="https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/2681c/media02.webp 280w,
https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/b3b36/media02.webp 560w,
https://bolt.eu/assets/static/a43b17b7edc145df908392f5fda811ea/1e482/media02.webp 1120w"
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
            <ol
              className="[counter-reset:ordered-list-counter_var(--start-value,_0)] my-0 pl-0 mt-0 mb-0"
              // style="--start-value:0"
            >
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    {firstTitle}
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    {firstDesc}
                  </div>
                </div>
              </li>
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
                <div className="flex flex-col">
                  <h5 className="font-semibold mt-0 text-base md:text-lg mb-2">
                    {secondTitle}
                  </h5>
                  <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    {secondDesc}
                  </div>
                </div>
              </li>
              <li className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-primary before:text-static-key-light before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs">
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
                  className="border-none font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-8 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
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

export default ModelSection;
