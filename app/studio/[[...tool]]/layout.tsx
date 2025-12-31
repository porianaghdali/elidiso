import type { Metadata } from "next";
import "../../globals.css";


export const metadata: Metadata = {
  title: "Elite Technology Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="max-w-[1500px] mx-auto"
        style={{ fontFamily: "sans-serif" }}
      >
       
        {children}
   
      </body>
    </html>
  );
}
