const BrochureSection = () => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col items-center text-center gap-y-8">
        <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
          Download Our Brochure
        </h3>

        <div className="flex flex-col items-center justify-center gap-4 max-w-4xl">
          <div className="flex justify-center mt-2">
            <a
              href="/fd365_brochure.pdf"
              download="fd365-brochure.pdf"
              className="border-none !bg-[#1461a0] font-sans cursor-pointer flex justify-center items-center flex-none relative rounded-full font-semibold ease-linear duration-150 antialiased w-fit px-8 py-0 h-12 gap-2 text-base bg-action-primary hover:bg-active-action-primary active:bg-active-action-primary text-static-key-light"
              aria-label="Download company brochure"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;
