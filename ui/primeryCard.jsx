import Image from "next/image";





    export default function PrimeryCard({src,title}) {
        return (
           <div
                 
                  className="bg-[#2529419a] flex items-center gap-4 h-[70px] group transition-all duration-300"
                >
                  {/* عکس */}
                  <div
                    className="bg-[#252941] w-[70px] h-full flex justify-center items-center transition-shadow
                 duration-300 group-hover:shadow-[0_0_6px_0px_#ffffff]"
                  >
                    <Image
                      src={src}
                      width={32}
                      height={32}
                      alt={title}
                      className="h-fit"
                    />
                  </div>

                  {/* متن */}
                  <p className="text-white text-sm font-semibold">
                    {title}{" "}
                  </p>
                </div>
        )
    }