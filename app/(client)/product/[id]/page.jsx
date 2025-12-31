import Image from "next/image";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = await params;

  return (
    <div className="px-[5.5vw] my-[6.5vw]">
      <p className="text-white ">
        <Link href="/">Home</Link> <span className="text-[green]"></span>{" "}
        <span className="text-[green]"> / </span>
        <Link href="/product">Product</Link>{" "}
        <span className="text-[green]"></span>{" "}
        <span className="text-[green]"> / </span>
        {id}
      </p>

      <div className="grid grid-cols-2 p-8">
        <div>
          <Image
            src="/images/heroLogo.png"
            width={210}
            height={210}
            alt="hero"
          />
        </div>
        <div className="text-white ">
          <h1 className="text-white font-bold text-4xl mb-8">
            ILM-LS Laminating module
          </h1>
          <p className="text-justify">
            Hologram printing is a security measure that improves the level of
            counterfeit protection and increases the lifetime of your card. This
            procedure, which once used to be slow, costly and complex, is
            becoming significantly faster and cost-effective owing to modern
            industrial printers. Matica EDIsecure Inline Lamination Modules work
            with both conventional and holographic lamination to meet all your
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}
