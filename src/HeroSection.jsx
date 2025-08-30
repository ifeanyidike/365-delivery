const HeroSection = ({
  videoUrl,
  bigText,
  smallText,
  linkText1,
  linkText2,
}) => {
  return (
    <article>
      {/* EXACT: Main hero video section */}
      <div className="flex w-full min-h-[680px] py-[60px] md:py-10 bg-neutral-primary relative mb-24 md:mb-32">
        <video
          autoPlay
          muted
          src={videoUrl}
          loop
          playsInline
          className="block absolute object-cover  w-full h-full object-[center_20%] inset-0"
        >
          <source src={videoUrl} />
        </video>
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,0.64)] to-[rgba(0,0,0,0)]"></div>
        <div className="container container-md px-6 flex grow relative items-end md:items-center">
          <div className="text-static-key-light md:max-w-2xl flex flex-col">
            <h1 className="font-semibold mt-0 text-4xl md:text-6xl mb-0">
              {bigText}
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-static-key-light opacity-90">
              {smallText}
            </p>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-6 md:mt-8">
              <a
                href="/driver"
                className="border-none !bg-[#1461a0] font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-6 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
              >
                {linkText1}
              </a>

              <a
                href="/restaurant"
                className="border-none !bg-white font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-6 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-dark active:scale-975 active:ease-in-out active:duration-100"
              >
                {linkText2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;

export const ImageHeroSection = ({
  bigText,
  smallText,
  imgUrl,
  button,
  actionUrl,
}) => {
  return (
    <article>
      {/* EXACT: Main hero video section */}
      <div className="flex w-full min-h-[680px] py-[60px] md:py-10 bg-neutral-primary relative mb-24 md:mb-32">
        <img
          src={imgUrl}
          alt="hero image"
          className="block absolute object-cover w-full h-full object-[center_20%]  inset-0"
        />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,0.64)] to-[rgba(0,0,0,0)]"></div>
        <div className="container container-md px-6 flex grow relative items-end md:items-center">
          <div className="text-static-key-light md:max-w-2xl flex flex-col">
            <h1 className="font-semibold mt-0 text-4xl md:text-6xl mb-0">
              {bigText}
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-static-key-light opacity-90">
              {smallText}
            </p>
            {button && (
              <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-6 md:mt-8">
                <a
                  href={actionUrl}
                  className="border-none !bg-[#1461a0] font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-6 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
                >
                  {button}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
