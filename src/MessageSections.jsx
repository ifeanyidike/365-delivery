export const CallUs = () => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col items-center text-center gap-y-8">
        {/* Title */}
        <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
          Call Us
        </h3>

        {/* Subtitle + Desc */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-4xl">
          <h6 className="font-semibold mt-0 text-base md:text-lg mb-2">
            Direct Support Whenever You Need It.
          </h6>
          <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
            📞 561-872-6155
          </p>
        </div>
      </div>
    </section>
  );
};

export const EmailUs = () => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col items-center text-center gap-y-8">
        {/* Title */}
        <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
          Email Us
        </h3>

        {/* Subtitle + Desc */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-4xl">
          <h6 className="font-semibold mt-0 text-base md:text-lg mb-2">
            Fast Replies Straight To Your Inbox.
          </h6>
          <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
            ✉️ mark@fooddelivery365.com
          </p>
          <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
            ✉️ billing@fooddelivery365.com
          </p>
        </div>
      </div>
    </section>
  );
};

export const OnlineAccess = () => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col items-center text-center gap-y-8">
        {/* Title */}
        <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
          Online Access
        </h3>

        {/* Subtitle + Desc */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-4xl">
          <h6 className="font-semibold mt-0 text-base md:text-lg mb-2">
            Your Accounts. Always Available Online.
          </h6>
          <a
            href="https://foodDelivery365.com"
            className="mt-0 text-base leading-6 font-normal mb-0 text-secondary"
          >
            🌐 FoodDelivery365.com
          </a>
          <a
            href="https://pay.fooddelivery365.com"
            className="mt-0 text-base leading-6 font-normal mb-0 text-secondary"
          >
            🌐 pay.fooddelivery365.com
          </a>
        </div>
      </div>
    </section>
  );
};
