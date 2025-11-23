import Image from "next/image";
import PrimaryCard from "@/ui/primeryCard";
export default function IOTSection() {
  const IOT = [
    {
      number: "01",
      describtion: "Compatible with both internal and cloud servers.",
    },
    {
      number: "02",
      describtion:
        "Includes sensors for temperature, humidity, voltage, water leaks, smoke, and flammable gases.",
    },
    {
      number: "03",
      describtion:
        "Automates crisis response across pre-crisis, crisis, and post-crisis stages.",
    },
    {
      number: "04",
      describtion:
        "Supports GSM modems for SMS, email, and calls, along with network and wireless connectivity.",
    },
    {
      number: "05",
      describtion:
        "Provides a practical, intuitive interface for effortless control.",
    },
    {
      number: "06",
      describtion:
        "A replaceable backup battery ensures 24-hour operation during power outages.",
    },
    {
      number: "07",
      describtion:
        "Available in hardware, network-based, and network-based with performance control versions.",
    },
    {
      number: "08",
      describtion: "Admin and User roles with tailored specifications.",
    },
    {
      number: "09",
      describtion: "Displays parameter values, alerts, and notifications.",
    },
    {
      number: "10",
      describtion: "Allows categorized monitoring and remote display.",
    },
    {
      number: "11",
      describtion:
        "Set alarm points, define scenarios, and control environmental systems.",
    },
    {
      number: "12",
      describtion: "View charts and graphs over specific intervals.",
    },
    {
      number: "13",
      describtion: "Can be installed on customer-specified servers.",
    },
    {
      number: "14",
      describtion:
        "Receive system warnings directly in the app for immediate attention.",
    },
  ];
  const IOTCard = [
    {
      src: "/images/serverRoom.png",
      title: "Smart Server Room",
    },
    {
      src: "/images/office.png",
      title: "Smart Home and Office",
    },
    {
      src: "/images/home.png",
      title: "Smart Greenhouses",
    },
    {
      src: "/images/agriculture.png",
      title: "Smart Aviculture",
    },
    {
      src: "/images/kitchen.png",
      title: "Industrial kitchens",
    },
    {
      src: "/images/refrigerator.png",
      title: "Industrial Refrigerator",
    },
    {
      src: "/images/school.png",
      title: "Universities, and Schools",
    },
    {
      src: "/images/warehouse.png",
      title: "Warehouse Key Features",
    },
  ];
  return (
    <>
      <div id="IoT" className="max-w-[1500px] mb-8 mx-auto px-[3vw] grid grid-cols-1 md:grid-cols-2 text-white gap-4">
        <h2 className="text-xl col-span-1 md:col-span-2  font-semibold">
          IOT Software
        </h2>
        <div className=" ">
          <p className="text-justify mb-8">
            Enhance your surroundings with our cutting-edge IoT Environmental
            Monitoring System, an advanced solution for monitoring and
            controlling environmental parameters across various sectors,
            including agriculture, industry, medicine, and indoor environments.
            This system leverages IoT technology to provide real-time monitoring
            of critical factors like temperature, humidity, voltage, smoke,
            water levels, and more, ensuring that your environment remains safe
            and operational. Whether installed on internal servers or
            cloud-based systems, our system offers a tailored solution to meet
            your specific needs with a user-friendly interface that keeps you
            effortlessly in tune with your data as never experienced before.
          </p>
          <div className="mb-4">
            {IOT.map((item) => {
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
            src="/images/software.png"
            width={298}
            height={232}
            alt="server1"
            className="h-fit w-4/5"
          />
        </div>
      </div>
      <div id="Applications" className="mb-20 text-center flex justify-center lg:text-lg text-white max-w-[1500px] mx-auto">
        <div className="px-[3vw] w-full">
          <h2 className="font-semibold text-xl lg:text-2xl mb-8">
            Applications{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {IOTCard.map((item) => {
              return (
           <PrimaryCard src={item.src} title={item.title}  key={item.title}/>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
