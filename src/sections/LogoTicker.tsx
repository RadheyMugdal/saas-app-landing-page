import acmeLogo from "@/assets/logo-acme.png"
import quamtumLogo from "@/assets/logo-quantum.png"
import achoLogo from "@/assets/logo-echo.png"
import celestialLogo from  "@/assets/logo-celestial.png"
import pulseLogo from  "@/assets/logo-pulse.png"
import apexLogo from "@/assets/logo-apex.png"
import Image from "next/image"

export const LogoTicker = () => {
  return <div className=" py-8 md:py-12 bg-white">
    <div className=" container">
      <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
      <div className=" flex gap-14  flex-none">
        <Image src={acmeLogo} alt="acme logo"  className="logo-ticker-image"  />
        <Image src={quamtumLogo} alt="quamtum logo"  className="logo-ticker-image" />
        <Image src={achoLogo} alt="acho logo" className="logo-ticker-image" />
        <Image src={celestialLogo} alt="celestial logo"  className="logo-ticker-image" />
        <Image src={pulseLogo} alt="pulse logo" className="logo-ticker-image"  />
        <Image src={apexLogo} alt="apex logo" className="logo-ticker-image"  />
      </div>
      </div>
    </div>
  </div>;
};