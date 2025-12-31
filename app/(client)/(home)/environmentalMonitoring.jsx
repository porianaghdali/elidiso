import Image from "next/image";
import PrimaryCard from "@/ui/primeryCard";
export default function EnvironmentalMonitoringSection() {


  const list = [
    {
      number: "01",
      describtion: "Real-time dashboards & alerts",
    },
    {
      number: "02",
      describtion:
        "SMS, email, and call notifications",
    },
    {
      number: "03",
      describtion:
        "Scenario automation & threshold control",
    },
    {
      number: "04",
      describtion:
        "Trend charts and historical graphs",
    },
    {
      number: "05",
      describtion:
        "Admin/User role management",
    },
    {
      number: "06",
      describtion:
        "Cloud or on-prem installation",
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
		Elidiso Environmental Monitoring System      </h2>
        <div className=" ">
          <p className="text-justify mb-8">
         A powerful monitoring solution for data centers, industrial facilities, agriculture, and medical environments. EMS provides a clean, modern interface for tracking parameters, sending alerts, managing scenarios, analyzing trends, and automating crisis response. Deployable on cloud or customer servers.
          </p>
          <div className="mb-4">
            {list.map((item) => {
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
          {/* <Image
            src="/images/software.png"
            width={298}
            height={232}
            alt="server1"
            className="h-fit w-4/5"
          /> */}
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
