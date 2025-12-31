import Image from "next/image";
import SL300Section from "./SL300Section";
import SNLxxSection from "./SNLxxSection";
import EliteModbusSection from "./eliteModbus";
import EnvironmentalMonitoringSection from "./environmentalMonitoring";
import Slider from "./slider/slider"
export default function Home() {
  return (
    <div className=" ">
      <div>
        {/* //hero section */}
        <div className=" mt-[6.5vw] px-[5.5vw] flex items-center gap-2 lg:gap-4">
          <div
            className="w-30 sm:w-36 md:w-40 lg:w-[210px] h-30 sm:h-36 md:h-40 lg:h-[210px] flex justify-center items-center rounded-xl"
            style={{ background: "radial-gradient(#434D83, #1D2030)" }}
          >
            <Image
              src="/images/heroLogo.png"
              width={210}
              height={210}
              alt="hero"
              className="w-[65%] "
            />
          </div>
          <div className="flex flex-col gap-1 lg:gap-2">
            <p className="text-white text-2xl sm:text-3xl md:text-[40px] lg:text-7xl font-bold">
              Elite Technology
            </p>
            <p className="text-white text-2xl sm:text-3xl md:text-[40px] lg:text-7xl font-bold">
              Digital Solution
            </p>
            <p className="text-[#8c92a5] text-xs sm:text-sm md:text-lg lg:text-[22px] font-semibold">
              Make Your World Smarter and Safer
            </p>
          </div>
        </div>
        <div className=" mt-[-10vw]">
          <Image
            src="/images/wave.png"
            alt="wave"
            width={1728}
            height={630}
            className="w-full h-auto"
          />
        </div>
        {/* //Elitech Digital Solution */}
        <div className="mb-20 text-center flex justify-center lg:text-lg text-white max-w-[1200px] mx-auto">
          <div className="w-[90%] lg:w-[70%]">
            <h2 className="font-semibold text-xl lg:text-2xl mb-5">
              Welcome to Elidiso – Elite Technology Digital Solutions
            </h2>
            <p>
              At Elidiso, we believe IoT technology should make life easier,
              smarter, and more connected. We specialize in providing reliable
              IoT monitoring devices, smart environmental sensors, and
              user-friendly real-time monitoring software for businesses across
              the world. Whether you need to track temperature, humidity, air
              quality, or other critical environmental conditions, or require
              dependable card printers and predictive maintenance services, our
              solutions help you monitor, protect, and optimize operations with
              confidence.
            </p>
          </div>
        </div>
        <div className="mb-20 text-center flex justify-center lg:text-lg text-white max-w-[1200px] mx-auto gap-4">
          <div className="w-[90%] shadow-2xl p-4 rounded-2xl border hover:scale-105 transition-all duration-500 lg:w-[70%]">
            <p className="font-semibold text-xl lg:text-2xl mb-5">
              What We Offer:
            </p>
            <ul className=" grid justify-start text-start list-disc pl-6 space-y-2  leading-relaxed">
              <li>
                IoT Environmental Monitoring: Keep an eye on temperature,
                humidity, smoke, water, and more.
              </li>
              <li>
                Network & Gateway Solutions: Connect your sensors securely with
                Modbus & SNMPv3 devices.
              </li>
              <li>
                Monitoring Software (EMS): See real-time data, get alerts, and
                automate your systems effortlessly.
              </li>
              <li>
                Card Printers & Maintenance: Reliable printers and quick support
                when you need it.
              </li>
            </ul>
          </div>{" "}
          <div className="w-[90%] shadow-2xl p-4 rounded-2xl border hover:scale-105 transition-all duration-500 lg:w-[70%]">
            <h2 className="font-semibold text-xl lg:text-2xl mb-5">
              Key Services / What we do:
            </h2>
            <p>
              {" "}
              At Elidiso, we make it simple to monitor, protect, and manage your
              environments with smart IoT sensors, secure gateways, and
              easy-to-use software.
            </p>{" "}
          </div>
        </div>
        <div className="mb-20 text-center flex flex-col items-center justify-center lg:text-lg text-white max-w-[1200px] mx-auto gap-4">
          <div className="w-[90%] shadow-2xl p-4 rounded-2xl border hover:scale-105 transition-all duration-500 lg:w-[70%]">
            <h2 className="font-semibold text-xl lg:text-2xl mb-5">
              Products
            </h2>
            <p>
              {" "}
              Discover our smart solutions designed to make environmental monitoring simple, reliable, and efficient. From advanced sensors to secure network gateways and intuitive software, our products give you real-time insight and control—helping your operations run smoothly and safely, wherever you are.
            </p>{" "}
          </div>
          
       <Slider/>
          
        </div>
        <SL300Section />
        <SNLxxSection />
        <EliteModbusSection />
        <EnvironmentalMonitoringSection/>
      </div>
    </div>
  );
}
