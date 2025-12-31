import { Mail } from "lucide-react";
import { Printer } from "lucide-react";
import { Phone } from "lucide-react";
import { Mails } from "lucide-react";
import { House } from "lucide-react";
export default function Contact() {
  return (
    <div className="w-[90%] grid grid-cols-2 mx-auto my-[10vw] ">
      <form action="" className="grid gap-4 bg-white p-8 rounded-lg">
        <div className="relative w-full">
          <label
            className="absolute text-sm p-1 bg-white left-4 -translate-y-[50%]"
            htmlFor="fullName"
          >
            full name
          </label>
          <input
            name="fullName"
            id="fullName"
            className="border w-full rounded-lg border-[#e0e0e0] text-[#424242] p-2"
            type="text"
          />
        </div>
        <div className="relative w-full">
          <label
            className="absolute text-sm p-1 bg-white left-4 -translate-y-[50%]"
            htmlFor="email"
          >
            email{" "}
          </label>
          <input
            name="email"
            id="email"
            className="border w-full rounded-lg border-[#e0e0e0] text-[#424242] p-2"
            type="text"
          />
        </div>
        <div className="relative w-full">
          <label
            className="absolute text-sm p-1 bg-white left-4 -translate-y-[50%]"
            htmlFor="phone"
          >
            phone{" "}
          </label>
          <input
            name="phone"
            id="phone"
            className="border w-full rounded-lg border-[#e0e0e0] text-[#424242] p-2"
            type="text"
          />
        </div>

        <div className="relative w-full">
          <label
            className="absolute text-sm p-1 bg-white left-4 -translate-y-[50%]"
            htmlFor="message"
          >
            message{" "}
          </label>
          <textarea
            style={{ resize: "none" }}
            className="border w-full h-20 rounded-lg border-[#e0e0e0] text-[#424242] p-2"
            id="message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="bg-[#11192c] text-white w-fit px-3 py-2 rounded-lg">
          Send Message
        </button>
      </form>
      <div className="text-white flex flex-col gap-8 p-8">
        <div className="flex gap-2 items-center">
          <House />
          <p>
            Units 6 and 9, 4th Floor, No. 297, Western Dastgerdi, Northern
            Jordan, Tehran
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Mails />
          <p>Postcode: 1968635391</p>
        </div>
        <div className="flex gap-2 items-center">
          <Mail />
          <p>info@sepehranformatic.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <Phone />
          <p>021-88651303</p>
        </div>
        <div className="flex gap-2 items-center">
          <Printer />
          <p>021-88651306 </p>
        </div>
      </div>
    </div>
  );
}
