const RequirementsSection = () => {
  return (
    <section className="container container-md px-6 mb-32 md:mb-40">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col">
          <div
            className="flex flex-col w-full gap-y-6"
            id="lead-item-container-text"
          >
            <h3 className="font-semibold mt-0 text-3xl md:text-5xl mb-0">
              Bolt Food courier requirements
            </h3>
          </div>
        </div>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-4">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.24646 5.1374C3.49283 5.44393 3 6.17643 3 6.99001V21C3 22.1046 3.89543 23 5 23H19C20.1046 23 21 22.1046 21 21V7.00003C21 5.89546 20.1046 5.00003 19 5.00003H18V4.0021C18 1.93711 15.8185 0.430502 13.8697 1.22318L4.24646 5.1374ZM14.6232 3.07579L9.89244 5.00003H16V4.0021C16 3.31377 15.2728 2.81157 14.6232 3.07579ZM9.75 11.2354C9.75 9.99274 10.7574 8.98538 12 8.98538C13.2426 8.98538 14.25 9.99274 14.25 11.2354C14.25 12.478 13.2426 13.4854 12 13.4854C10.7574 13.4854 9.75 12.478 9.75 11.2354ZM8.42006 15.3802C9.54884 14.9069 10.7753 14.6421 12.0005 14.6422C13.2253 14.6423 14.4513 14.9072 15.5798 15.3803C16.1371 15.6139 16.4998 16.1592 16.4998 16.7635L16.4999 18.0145C16.5001 18.5668 16.0523 19.0147 15.5001 19.0147C15 19.0147 9 19.0146 8.50034 19.0146C7.94821 19.0145 7.50049 18.5669 7.50027 18.0148L7.50009 16.7637C7.5 16.1593 7.86267 15.6139 8.42006 15.3802Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
                  Valid photo ID
                </h6>
                <div className="flex flex-col gap-y-4">
                  <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Proving that you meet the minimum age requirement
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 4C6 2.89543 6.89458 2 7.9981 2H16.0019C17.1054 2 18 2.89543 18 4V20C18 21.1046 17.1054 22 16.0019 22H7.9981C6.89458 22 6 21.1046 6 20V4ZM11.9943 17C11.1667 17 10.4957 17.6716 10.4957 18.5C10.4957 19.3284 11.1667 20 11.9943 20C12.822 20 13.4929 19.3284 13.4929 18.5C13.4929 17.6716 12.822 17 11.9943 17Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
                  Smartphone
                </h6>
                <div className="flex flex-col gap-y-4">
                  <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    Android 9.0+ or iOS 12+, with a local number
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 4.00098C11.4477 4.00098 11 4.44816 11 4.99979C11 5.55142 11.4477 5.9986 12 5.9986H13.6171L15.0604 9.52312L11.1326 14.7472L9.19109 9.99493C9.65197 9.90586 10 9.50069 10 9.01434C10 8.46271 9.55228 8.01552 9 8.01552H6C5.44772 8.01552 5 8.46271 5 9.01434C5 9.56597 5.44772 10.0131 6 10.0131H7.03842L8.5764 13.7777C7.75414 12.704 6.45818 12.0117 5 12.0117C2.51432 12.0117 0.5 14.0236 0.5 16.5063C0.5 18.9891 2.51432 21.001 5 21.001C7.12887 21.001 8.91199 19.5252 9.38004 17.5418H10.0337C10.9774 17.5418 11.866 17.0984 12.4326 16.3447L15.9423 11.6768L16.4135 12.8276C15.2561 13.6408 14.5 14.9852 14.5 16.5063C14.5 18.9891 16.5143 21.001 19 21.001C21.4857 21.001 23.5 18.9891 23.5 16.5063C23.5 14.0236 21.4857 12.0117 19 12.0117C18.7496 12.0117 18.504 12.0321 18.2647 12.0713L15.2141 4.62167C15.0604 4.24626 14.6946 4.00098 14.2885 4.00098H12ZM17.2072 14.7657L18.0744 16.8835C18.2835 17.3941 18.8674 17.6387 19.3786 17.4299C19.8897 17.2211 20.1347 16.6379 19.9256 16.1273L19.0585 14.01C20.4126 14.041 21.5 15.1464 21.5 16.5063C21.5 17.8858 20.3811 19.0034 19 19.0034C17.6189 19.0034 16.5 17.8858 16.5 16.5063C16.5 15.8293 16.7695 15.2154 17.2072 14.7657ZM5 14.0093C6.03969 14.0093 6.93077 14.6426 7.3078 15.5442H5C4.44772 15.5442 4 15.9914 4 16.543C4 17.0946 4.44772 17.5418 5 17.5418H7.27572C6.88191 18.4042 6.01125 19.0034 5 19.0034C3.61888 19.0034 2.5 17.8858 2.5 16.5063C2.5 15.1268 3.61888 14.0093 5 14.0093Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div>
                <h6 className="font-semibold mt-0 text-base md:text-lg mb-0 mb-2">
                  Scooter, bike or car
                </h6>
                <div className="flex flex-col gap-y-4">
                  <p className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                    With a valid licence and insurance
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

export default RequirementsSection;
