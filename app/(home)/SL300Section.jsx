
import PrimeryCard from "@/ui/primeryCard";
import Image from "next/image";


export default function SL300Section() {
      const SL300 = [
    { number: "01", describtion: "Integrated GSM Technology" },
    {
      number: "02",
      describtion:
        "Optional External GSM Antenna for Enhanced Signal Reception",
    },
    {
      number: "03",
      describtion:
        "Alert Notifications via SMS and Optional Physical Siren Alarm",
    },
    {
      number: "04",
      describtion: "Supports Up to 10 Predefined Phone Numbers for Alerts",
    },
    {
      number: "05",
      describtion: "2x16 Character LCD Display for Clear Readout",
    },
    {
      number: "06",
      describtion: "Built-In Keyboard for Easy Input and Configuration",
    },
    {
      number: "07",
      describtion:
        "Standalone Operation Without the Need for Additional Software",
    },
    {
      number: "08",
      describtion: "Customizable Parameter Limits for Precise Monitoring",
    },
    {
      number: "09",
      describtion: "Wall-Mountable Design for Easy Installation",
    },
    {
      number: "10",
      describtion: "Suitable for Both Indoor and Outdoor Applications",
    },
  ];
 const SL300Card = [
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
          <div className="bg-[#1d2030ad] rounded-lg py-6">
            <div className="bg-white text-base font-semibold w-fit px-4 py-1.5 rounded-br rounded-tr text-[#222951]">
              SL300
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/SL300.png"
                width={200}
                height={200}
                alt="SL300"
                className=""
              />
              <button className="px-6 py-2 text-[#222951] rounded text-sm bg-white">
                see more
              </button>
            </div>
          </div>
          <div className="bg-[#1d2030ad] rounded-lg py-6">
            <div className="bg-white text-base font-semibold w-fit px-4 py-1.5 rounded-br rounded-tr text-[#222951]">
              SNLxx
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/snl.png"
                width={155}
                height={200}
                alt="SL300"
                className=""
              />
              <button className="px-6 py-2 text-[#222951] rounded text-sm bg-white">
                see more
              </button>
            </div>
          </div>
        </div>
        {/* //SL300 */}
        <div id="SL300" className="max-w-[1500px] mb-8 mx-auto px-[3vw] grid grid-cols-1 md:grid-cols-2 text-white gap-4">
          <h2 className="text-xl col-span-1 md:col-span-2  font-semibold">
            SL300
          </h2>
          <div className=" ">
            <p className="text-justify mb-8">
              The SL300 data logger is an advanced, standalone device designed
              for comprehensive environmental monitoring, including parameters
              such as temperature, humidity, and more. Equipped with a GSM/GPRS
              modem, LCD screen, keyboard, and internal backup battery, the
              SL300 operates independently without requiring software
              installation. Users can set custom limits for various parameters,
              and if any values exceed the predefined ranges, the SL300 sends
              alerts via SMS and optional physical alarms. This versatile device
              is ideal for use in diverse settings such as greenhouses,
              laboratories, and industrial environments, ensuring reliable and
              real-time data monitoring.
            </p>
            <div className="mb-4">
              {SL300.map((item) => {
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
              SL300 Supported Sensors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SL300Card.map((item) => {
                return (
                <PrimeryCard key={item.title} src={item.src} title={item.title} />
                );
              })}
            </div>
          </div>
        </div></>    )
}