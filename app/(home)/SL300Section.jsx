
import PrimeryCard from "@/ui/primeryCard";
import Image from "next/image";


export default function ELSO300Section() {
      const ELSO300 = [
    { number: "01", describtion: "GSM SMS alerts" },
    {
      number: "02",
      describtion:
        "LCD + keypad interface",
    },
    {
      number: "03",
      describtion:
        "Battery backup included",
    },
    {
      number: "04",
      describtion: "User-programmable thresholds",
    },
    {
      number: "05",
      describtion: "Ideal for remote sites",
    },
  ];
 const ELSO300Card = [
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
  ];
    return (
<>
  {/* //SL300 and SNLxx card */}
        <div  className=" mb-8 mx-auto grid grid-cols-1 md:grid-cols-2 max-w-[1500px]  gap-4 px-[3vw]">
        
        </div>
        {/* //SL300 */}
        <div id="ELSO300" className="max-w-[1500px] mb-8 mx-auto px-[3vw] grid grid-cols-1 md:grid-cols-2 text-white gap-4">
          <h2 className="text-xl col-span-1 md:col-span-2  font-semibold">
           	ELSO300 GSM Data Logger
          </h2>
          <div className=" ">
            <p className="text-justify mb-8">
           The ELSO300 operates independently to measure temperature, humidity, and other environmental parameters. With GSM alerting, LCD interface, and user-defined thresholds, it provides fast, reliable notifications in remote or mission-critical environments—without requiring any software installation.
            </p>
            <div className="mb-4">
              {ELSO300.map((item) => {
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
              src="/images/server1.png"
              width={266}
              height={335}
              alt="server1"
              className="h-fit"
            />
          </div>
        </div>
        {/* //SL300 Supported Sensors */}
        <div className="mb-20 text-center flex justify-center lg:text-lg text-white max-w-[1500px] mx-auto">
          <div className="px-[3vw] w-full">
            <h2 className="font-semibold text-xl lg:text-2xl mb-8">
              ELSO300 Supported Sensors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ELSO300Card.map((item) => {
                return (
                <PrimeryCard key={item.title} src={item.src} title={item.title} />
                );
              })}
            </div>
          </div>
        </div></>    )
}