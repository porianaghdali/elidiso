export default function Footer() {
  return (
    <div className="mb-8 mx-auto   max-w-[1500px] text-white  px-[3vw]">
      <h2 className="font-semibold text-xl lg:text-2xl mb-4">Contact Us</h2>
      <div className="mb-8">
        <div className="text-base font-medium ">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <p>Email</p>
          </div>
          <p>info@elidiso.com</p>
        </div>
      </div>
      <div>
        <div className="text-base font-medium ">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <p>Email</p>
          </div>
          <p>tech@elidiso.com</p>
        </div>
      </div>
    </div>
  );
}
