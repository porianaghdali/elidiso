"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const list = [
    { title: "Who We Are ", id: 1 },
    { title: "What We Do", id: 2 },
    { title: "Our Mission", id: 3 },
    { title: "Why Choose Elidiso?", id: 4 },
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
            At Elidiso, we’re a team trying to solve real problems with smart
            IoT solutions. Our connected systems are simple to use, fast to
            deploy, and built to last. We help companies across the MEA region
            monitor essential environments, reduce operational risks, and
            improve performance through reliable environmental monitoring
            devices and digital IoT platforms.
          </div>
        </div>
      );
    if (id === 2)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">Smart IoT Monitoring</span>{" "}
                <br />
                We offer a wide range of IoT devices and smart sensors designed
                to collect accurate environmental data. From standalone sensors
                to multi-parameter Modbus-supported systems, our devices help
                you monitor temperature, humidity, air quality, and water
                leakage, and other essential parameters, all at once.
              </li>
              <li>
                {" "}
                <span className="font-semibold">
                  Network Monitoring & Analytics
                </span>
                <br />
                Our IoT monitoring software lets you view your data in real
                time, receive alerts, track changes, and generate actionable
                reports through a clean, user-friendly dashboard. Remote
                monitoring solutions make managing multiple sites simple and
                efficient.
              </li>
              <li>
                <span className="font-semibold">
                  Card Printers & Maintenance Services
                </span>
                <br />
                We provide high-quality card printers and reliable maintenance
                services, ensuring your equipment operates smoothly. Our support
                team is always ready to assist and guarantee fast repairs and
                minimal downtime.
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
            Our mission is to bring innovation, accuracy, and reliability into
            everyday operations. We empower businesses to transform the way they
            monitor environments through smart digital solutions that are easy
            to use and easy to trust.
          </div>
          <div className="flex justify-center items-center">
            <Image src="/images/desktop.png" width={230} height={235} alt="" />
          </div>
        </div>
      );
    if (id === 4)
      return (
        <div className="grid mt-10 gap-4 text-justify text-[#d3d3d3] text-[1rem] lg:grid-cols-2">
          <ul className="list-disc space-y-2 pl-6">
            <li> Easy-to-use IoT monitoring solutions</li>
            <li> Accurate and reliable environmental sensors</li>
            <li> Modbus integration for more efficient data collection</li>
            <li> Dedicated support and fast maintenance services</li>
            <li> A customer-first, friendly approach</li>
          </ul>
          <div className="flex justify-center items-center">
            <Image src="/images/work.png" width={336} height={340} alt="" />
          </div>
        </div>
      );
  };

  return (
    <div className="min-h-screen mt-[10vw]">
      <div className="w-3/5 mx-auto mb-20">
        {/* ============== DESKTOP MODE ============== */}
        {!isMobile && (
          <>
            <div className="text-gray-800 mb-18  mx-auto relative   text-xs md:text-sm grid justify-center lg:grid-cols-4 w-fit gap-20">
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
              
                <hr className="w-full col-span-3 absolute top-[50%] border-amber-50 border-dashed" />
              
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
          We’re here to help you monitor, protect, and improve your environments
          with technology that actually works.
        </p>
        <p className="text-[#d3d3d3] text-[1rem]">
          Want to learn more about our IoT solutions, environmental monitoring
          systems, or smart sensors? Reach out today, we’re always happy to
          help.{" "}
        </p>
        <button className="w-fit hover:bg-gray-200 bg-white px-3 py-2 rounded mx-auto">
          SEND CV
        </button>
      </div>
    </div>
  );
}
