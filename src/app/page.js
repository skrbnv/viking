import Image from "next/image";
import Logo from "../assets/viking-logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay controls="" loop muted playsInline
        class="absolute -z-10 h-screen w-screen object-cover"
      >
        <source
          src="/assets/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-20 top-6 left-1/2 transform -translate-x-1/2">
        <Image
          className=""
          src={Logo}
          alt="Viking logo"
          width={280}
          height={"auto"}
          priority
        />
      </div>

      <div className="absolute z-10 w-screen h-48 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 z-10 w-screen h-96 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute z-20 bottom-32 w-full max-w-3xl left-1/2 transform -translate-x-1/2 text-center pl-3 pr-3">
        <h1 className="text-5xl font-sans font-black text-black drop-shadow-[0_0_2px_white]">COME TO POWER WITH VIKING DATA CENTERS</h1>
        <p className="font-sans text-lg italic text-white">Empowering the decentralized future of crypto mining and AI with resilient energy infrastructure.</p>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-5">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4  text-white"
            href="mailto:info@vikingdata.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-full p-1.5 bg-white">
              <MdOutlineEmail size={18} color={'black'} />
            </div>
            info@vikingdata.io
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
            href="https://www.linkedin.com/in/kazimtk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-full p-1.5 bg-white">
              <TiSocialLinkedin size={18} color={'black'} />
            </div>

            Kazim Tahir-Kheli
          </a>
        </div >
      </div>





    </div >
  );
}
