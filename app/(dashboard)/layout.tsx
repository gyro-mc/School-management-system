import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen flex bg-white text-black min-h-screen p-4">
      {/*left*/}
      <div className={` w-[14%] md:w-[8%] xl:w-[14%] lg:w-[16%]`}>
        <Link
          href={"/"}
          className="fixed flex row justify-start items-center lg:gap-2 lg:p-2 sm:justify-center md:justify-center"
        >
          <Image src="/logo.png" width={40} height={40} alt="logo" />

          <span
            className={`${dancingScript.className} text-3xl font-bold hidden lg:block`}
          >
            The Holocaust
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-auto flex flex-col gap-2">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
