"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const list = [
    { title: "Introduction", id: 1 },
    { title: "Cards", id: 2 },
    { title: "Software", id: 3 },
    { title: "IOT", id: 4 },
    { title: "HARDWARE", id: 5 },
    { title: "BUSINESS", id: 6 },
  ];

  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const renderContent = (id) => {
    if (id === 1)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <div>
            Sepehr Anformatic Derakhshan began its journey in 1993, providing
            services in the fields of computing, informatics, and modern
            technologies. Over the years, the company has gained specialized
            knowledge in systems for issuing identification, credit, smart, and
            access cards. Our partnerships and representation of international
            companies such as MATICA, OASYS, LAPIS, and INTERLOCKAG in the card
            issuance systems sector have enabled us to offer the most up-to-date
            services in this field. Successfully executing hundreds of major
            national projects in ministries, institutions, airports,
            organizations, universities, associations, large industrial
            factories, hospitals, hotels, and more is among Sepehr Anformatic
            Derakhshan’s achievements.
          </div>
          <div>
            In recent years and after years of professional experience and
            training skilled and versatile engineers and experts, we have
            gathered valuable information in this field. Today, we are
            presenting the most recent and up-to-date software, hardware,
            intelligent solutions, and IoT (Internet of Things). At Sepehr
            Anformatic Derakhshan, we put our customers’ needs and demands as a
            priority. Moreover, presenting the best possible services with
            highly developed technology is crucial and significant for us.
          </div>
        </div>
      );
    if (id === 2)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                The Card and PVC Card Printing Services Department is one of the
                most experienced teams in the market. Comprising professional
                technical and marketing experts in card printer equipment, this
                team also provides software and related services that
                significantly assist organizations in issuing identification
                cards and managing visitors. Some of the services offered by
                this team include:
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>PVC Card Printing Services</li>
                  <li>
                    Supply of various printers for issuing identification,
                    smart, and access cards
                  </li>
                  <li>Provision of card and passport lamination devices</li>
                  <li>Laser card personalization</li>
                  <li>
                    Production of various identification, banking, and smart
                    card bodies
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <Image src="/images/card.png" width={230} height={235} alt="" />
          </div>
        </div>
      );
    if (id === 3)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <div>
            The Sepehr Anformatic Derakhshan software team, backed by years of
            experience in developing office automation software, leverages the
            latest technologies and the technical expertise of its human
            resources to meet the diverse needs of organizations and customers.
            <br />
            The system analysis team in this department provides optimal
            solutions in card services, client management, office automation,
            and more, greatly assisting the customers in the needs assessment
            process.
          </div>
          <div className="flex justify-center items-center">
            <Image src="/images/desktop.png" width={230} height={235} alt="" />
          </div>
        </div>
      );
    if (id === 4)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <div>
            The IoT department, supported by the research and development team
            and a combination of software and hardware experts, leverages
            cutting-edge technical knowledge to provide smart solutions for data
            centers and document rooms using the latest implementation methods.
            <br />
            The R&D team in this department is well-versed in the newest IoT
            methodologies and architectures, as well as in implementing various
            node communication protocols. This enables them to offer consulting
            and innovative IoT solutions.
            <br />
            Additionally, utilizing the technical expertise of the electronics
            team, the department can design and produce IoT devices, gateways,
            and sensors.
          </div>
          <div className="flex justify-center items-center">
            <Image src="/images/work.png" width={336} height={340} alt="" />
          </div>
        </div>
      );
    if (id === 5)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <div>
            The Sepehr Anformatic Derakhshan hardware team was established
            through our collaboration with Digital Identification (MATICA) to
            provide maintenance and service of card printers for customers.
            <br />
            With nearly a quarter-century of experience in delivering optimal
            solutions and a team of expert technicians, we are ready to offer
            maintenance services for all existing card printers (MATICA, Fargo,
            Magicard, Smart, Zebra, Nisca, and more).
            <br />
            Additionally, this team possesses advanced technical knowledge and
            cutting-edge equipment, enabling them to design and produce
            electronic boards
          </div>
          <div className="flex justify-center items-start">
            <Image src="/images/chip.png" width={776} height={796} alt="" />
          </div>
        </div>
      );
    if (id === 6)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <div>
            Having a clear strategy in digital marketing is one of the most
            important factors for success. Large companies typically have
            separate departments for SEO, social media, online advertising, and
            public relations, all of which need to be consistently
            interconnected.
            <br />
            To achieve success, it’s essential to conduct an analysis and
            develop an effective strategy that outlines the specific roles of
            each team and the techniques needed to reach their goals. All of the
            top 10 digital marketing companies have well-defined strategies.
          </div>
          <div className="flex justify-center items-start">
            <Image src="/images/business.png" width={776} height={796} alt="" />
          </div>
        </div>
      );
    return null;
  };

  return (
    <div className="min-h-screen mt-[10vw]">
      <div className="w-3/5 mx-auto mb-20">
        {/* ============== DESKTOP MODE ============== */}
        {!isMobile && (
          <>
            <div className="text-gray-800 mb-18 max-w-[800px] mx-auto relative   text-xs md:text-sm grid justify-center lg:grid-cols-6 w-full gap-4">
              {list.map((item) => (
                <button
                  onClick={() => setActive(item.id)}
                  key={item.id}
                  className={
                    active !== item.id
                      ? "bg-white aspect-square max-w-30 hover:bg-gray-200 text-center rounded-full relative z-10"
                      : "bg-[#424242] text-white aspect-square max-w-30 text-center rounded-full relative z-10"
                  }
                >
                  <p>{item.title}</p>
                </button>
              ))}
              <hr className="w-full col-span-6 absolute top-[50%] border-amber-50 border-dashed" />
            </div>

            {/* Desktop Content */}
            <div>{renderContent(active)}</div>
          </>
        )}

        {/* ============== MOBILE MODE ============== */}
        {/* ================= MOBILE ================= */}
        {isMobile && (
          <div className="flex  flex-col  gap-6 h-fit mt-10 relative">
            {list.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center relative z-10"
              >
                {/* دکمه دایره‌ای */}
                <button
                  onClick={() => setActive(active === item.id ? null : item.id)}
                  className={
                    active !== item.id
                      ? "bg-white aspect-square w-24 flex items-center justify-center hover:bg-gray-200 rounded-full text-black"
                      : "bg-[#424242] text-white aspect-square w-24 flex items-center justify-center rounded-full"
                  }
                >
                  {item.title}
                </button>

                <div
                  style={{
                    background: "linear-gradient(to left, #222951, #424E86)",
                  }}
                  className={`
            transition-all duration-500 overflow-hidden w-full relative z-20   p
            ${
              active === item.id
                ? "max-h-[2000px] opacity-100 mt-4 p-2"
                : "max-h-0 opacity-0"
            }
          `}
                >
                  {renderContent(item.id)}
                </div>
              </div>
            ))}
            <hr className="border h-full border-white  border-dashed absolute left-[50%] z-0" />
          </div>
        )}
      </div>
      <div className="lg:w-fit grid justify-center mx-auto gap-2 w-[90%]">
        <p className="text-[#d3d3d3] text-[1rem]">
          We are not a team because we work together we are a team because we
          respect, trust, and care for each other.
        </p>
        <button className="w-fit hover:bg-gray-200 bg-white px-3 py-2 rounded mx-auto">
          SEND CV
        </button>
      </div>
    </div>
  );
}
