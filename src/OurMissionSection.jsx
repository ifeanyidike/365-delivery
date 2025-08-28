const OurMission = ({ title, subtitle, desc }) => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col items-center text-center gap-y-8">
        {/* Title */}
        <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
          {title}
        </h3>

        {/* Subtitle + Desc */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-4xl">
          <h6 className="font-semibold mt-0 text-base md:text-lg mb-2">
            {subtitle}
          </h6>
          <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
