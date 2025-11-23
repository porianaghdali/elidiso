import PrimeryCard from "@/ui/primeryCard";
import Image from "next/image";
export default function SNLxxSection() {
  const SNLxx = [
    { number: "01", describtion: "Integrated Ethernet technology" },
    {
      number: "02",
      describtion: "Secure data transmission using SNMP-V3",
    },
    {
      number: "03",
      describtion: "Supports authentication types: MD5/SHA",
    },
    {
      number: "04",
      describtion: "Supports encryption types: AES/DES",
    },
    {
      number: "05",
      describtion: "Compatible with general SNMPV3 software",
    },
    {
      number: "06",
      describtion: "Sends warnings via trap or physical siren alarm",
    },
    {
      number: "07",
      describtion: "Embedded web server for device configuration",
    },
    {
      number: "08",
      describtion: "Control devices through Infrared signals by user commands",
    },
  ];

  const SNLxxCard = [
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
      src: "/images/Infrared.png",
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
      <div id="SNLxx" className="max-w-[1500px] mb-8 mx-auto px-[3vw] grid grid-cols-1 md:grid-cols-2 text-white gap-4">
        <h2 className="text-xl col-span-1 md:col-span-2  font-semibold">
          SNLxx{" "}
        </h2>
        <div className=" ">
          <p className="text-justify mb-8">
            The SNLxx node is designed for monitoring environmental parameters
            such as temperature, humidity, and more. It can also receive remote
            instructions from users in warning scenarios. The device is equipped
            with a LAN port and an optional backup battery. Data transmission is
            secured using the SNMP-V3 protocol. Sensor values can be gotten
            through "Elidiso EMS software" or any other SNMP-V3 compatible
            software. Additionally, in the event of an out-of-range parameter,
            the SNLxx will send a real-time SNMP trap message.
          </p>
          <div className="mb-4">
            {SNLxx.map((item) => {
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
            SNLxx Supported Sensors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SNLxxCard.map((item) => {
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
