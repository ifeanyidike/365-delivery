const HeroSection = () => {
  return (
    <article>
      {/* EXACT: Main hero video section */}
      <div className="flex w-full min-h-[680px] py-[60px] md:py-10 bg-neutral-primary relative mb-24 md:mb-32">
        <video
          autoPlay
          muted
          src="https://bolt.eu/assets/static/0b38096d8f49dbeab76f9d593319c3e3/courier-hero-video.mp4"
          loop
          playsInline
          className="block absolute object-cover w-full h-full object-center inset-0"
        >
          <source src="https://bolt.eu/assets/static/0b38096d8f49dbeab76f9d593319c3e3/courier-hero-video.mp4" />
        </video>
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,0.64)] to-[rgba(0,0,0,0)]"></div>
        <div className="container container-md px-6 flex grow relative items-end md:items-center">
          <div className="text-static-key-light md:max-w-2xl flex flex-col">
            <h1 className="font-semibold mt-0 text-4xl md:text-6xl mb-0">
              One Platform. More Orders. More Earnings.
            </h1>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-static-key-light opacity-90">
              For restaurants, keep more profits. For drivers, earn on your own
              terms.
            </p>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-6 md:mt-8">
              <button
                type="button"
                className="border-none font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-6 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light active:scale-975 active:ease-in-out active:duration-100"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;
