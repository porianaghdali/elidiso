import PrimeryCard from "@/ui/primeryCard";
import Image from "next/image";
export default function ELSOxxSection() {
  const ELSOxx = [
    { number: "01", describtion: "Secure SNMPv3 communication" },
    {
      number: "02",
      describtion: "LAN-based real-time monitoring",
    },
    {
      number: "03",
      describtion: "Trap alerts for out-of-range events",
    },
    {
      number: "04",
      describtion: "Web-based configuration",
    },
    {
      number: "05",
      describtion: "Optional battery backup",
    },

  ];

  const ELSOxxCard = [
    {
      src: "/images/temperature.png",
      title: "Humidity / Temperature",
    },
    {
      src: "/images/water.png",
      title: "Water Leakage",
    },
    {
      src: "/images/smoke.png",
      title: "Smoke",
    },
    {
      src: "/images/gas.png",
      title: "Flammable Gas (Methane)",
    },
    {
      src: "/images/door.png",
      title: "Door Open / Close",
    },
    {
      src: "/images/siren.png",
      title: "Siren Alarm",
    },
    {
      src: "/images/infrared.png",
      title: "Infrared Transmitter",
    },
    {
      src: "/images/Voltage.png",
      title: "Voltage",
    },
    {
      src: "/images/current.png",
      title: "Electric Current",
    },
  ];
  return (
    <>
      <div id="ELSOxx" className="max-w-[1500px] mb-8 mx-auto px-[3vw] grid grid-cols-1 md:grid-cols-2 text-white gap-4">
        <h2 className="text-xl col-span-1 md:col-span-2  font-semibold">
          ELSO.xx{" "}
        </h2>
        <div className=" ">
          <p className="text-justify mb-8">
          Engineered for secure environmental monitoring, the ELSO.xx uses SNMPv3 encryption and authentication to deliver real-time sensor data and instant trap alerts. It integrates seamlessly with the Elidiso EMS platform and all SNMPv3 software, making it ideal for data centers, telecom rooms, and industrial environments.
          </p>
          <div className="mb-4">
            {ELSOxx.map((item) => {
              return (
                <div key={item.number} className="flex gap-3 ">
                  <p className="py-2 px-3  border-t-[3px] border-[#31F3FF]">
                    {item.number}
                  </p>
                  <p className="py-2 px-3 w-full border-t-[3px] border-[#2529419a]">
                    {item.describtion}
                  </p>
                </div>
              );
            })}
          </div>
          <button className="flex items-center px-3 py-2 rounded bg-white text-[#222951] text-sm">
            <Image
              src="/images/pdf.png"
              width={25}
              height={25}
              alt="datasheet"
              className=""
            />
            <p>Datasheet</p>
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/server2.png"
            width={366}
            height={251}
            alt="server1"
            className="h-fit"
          />
        </div>
      </div>
      {/* //SNLxx Supported Sensors */}
      <div className="mb-20 text-center flex justify-center lg:text-lg text-white max-w-[1500px] mx-auto">
        <div className="px-[3vw] w-full">
          <h2 className="font-semibold text-xl lg:text-2xl mb-8">
            ELSO.xx Supported Sensors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ELSOxxCard.map((item) => {
              return (
                <PrimeryCard
                  key={item.title}
                  src={item.src}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
