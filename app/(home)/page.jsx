import Image from "next/image";
import SL300Section from "./SL300Section";
import SNLxxSection from "./SNLxxSection";
import IOTSection from "./IOTSection";
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
              Elitech
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
              Welcome to Elitech Digital Solution
            </h2>
            <p>
              Founded three years ago, Elitech Digital Solution is dedicated to
              producing innovative IoT solutions that enhance environmental
              monitoring systems. Our mission is to create smart technologies
              that make your world safer and more efficient.
            </p>
            <p>
              At Elitech, we specialize in developing user-friendly devices that
              provide secure, real-time data, empowering businesses and
              individuals to monitor their surroundings effortlessly. We believe
              in a connected and eco-friendly future and strive to integrate
              technology in a way that benefits both users and the planet.
            </p>
            <p>
              Join us on our journey to make technology work for you, creating a
              smarter and more sustainable world.
            </p>
          </div>
        </div>
        <SL300Section />
        <SNLxxSection />
        <IOTSection />
      </div>
    </div>
  );
}
