import Image from "next/image";
import Logo from "../assets/viking-logo.png";
import LocationBG from "../assets/site-location.jpg";
import ContactBlock from "./components/contacts";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <video
          autoPlay controls="" loop muted playsInline
          class="absolute -z-10 h-screen w-full object-cover"
        >
          <source
            src="/assets/video.mp4"
            type="video/mp4"
          />
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

        <div className="absolute z-10 w-full h-48 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 z-10 w-full h-96 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute z-20 bottom-32 w-full max-w-3xl left-1/2 transform -translate-x-1/2 text-center pl-3 pr-3">
          <h1 className="text-5xl font-sans font-black text-white">COME TO POWER WITH VIKING DATA CENTERS</h1>
          <p className="font-sans text-lg italic text-white">Empowering the decentralized future of crypto mining and AI with resilient energy infrastructure.</p>
          <ContactBlock />
        </div>
      </div>
      <div className="relative w-full h-screen p-[60px]">
        <div className="absolute w-[4px] h-[calc(100%-60px)] bg-white left-1/2 transform -translate-x-1/2 -top-0 z-50 invisible md:visible" />
        <div className="absolute w-12 h-12 bg-black border-4 -top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full" />
        <div className="absolute w-20 h-20 bg-black -top-10 left-1/2 transform -translate-x-1/2 z-[25] rounded-full md:invisible" />
        <div className="absolute w-8 h-8 bg-black border-4 bottom-[36px] left-1/2 transform -translate-x-1/2 z-50 rounded-full invisible md:visible" />
        <div className="absolute w-[calc(100%-60px)] h-[calc(100%-60px)] top-[30px] left-[30px] md:w-[calc(100%-120px)] md:h-[calc(100%-120px)] md:top-[60px] md:left-[60px] opacity-80 -z-10">
          <Image
            className="w-full h-full object-cover rounded"
            src={LocationBG}
          />
        </div>
        <div className="absolute w-full h-full top-0 left-0  bg-gradient-to-r from-black to-transparent" />

        <div className="relative w-full h-full md:grid md:grid-cols-2 md:gap-10">
          <div className="relative">
            <div className="md:absolute w-full max-w-md md:top-[30px] md:right-0 backdrop-blur-sm p-4 bg-white/20 rounded">
              <h2 className="text-white text-3xl font-black uppercase">Welcome to 428 Seiberling</h2>
              <p className="text-white italic text-sm">
                Located in Akron, Ohio, our 380,000 square-foot facility at 428 Seiberling Street, once a Goodyear stamping mill, has been transformed for the future of crypto mining and AI. This secure site provides access to essential infrastructure, including 24/7 security, making it an ideal location for crypto mining and AI operations. The facility is actively using the capacity available on the site, making Viking Data Centers one of the largest energy customers in the region.
              </p>
            </div>
          </div>
          <div className="absolute md:relative w-full h-full left-0 top-0">
            <div className="absolute bottom-0 md:bottom-[30px]  w-full max-w-lg md:backdrop-blur-sm p-4 bg-white/20 md:bg-black/20 rounded">
              <h2 className="text-white text-3xl font-black uppercase">Why choose us</h2>
              <p className="text-white italic text-sm">
                With a new substation currently delivering 150 MW of power, our facility is designed to scale. In combination with the requisite electrical infrastructure needed to dedicate 150 MW of power to our clients’ computing needs, the site also features extensive cooling systems for optimal efficiency. We utilize a mix of nuclear, natural gas, and renewable energy, ensuring reliable power for today’s demands and tomorrow’s innovations.
                With extensive experience in the energy-intensive data center sector, Viking Data Centers has been a trusted partner from the start. Our expert team ensures you stay at the forefront of innovation in a rapidly evolving landscape.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="pb-10">
        <ContactBlock />
      </div>
    </>
  );
}

//       
// <div className="absolute w-8 h-8 bg-black border-4 bottom-[10%] left-1/2 transform -translate-x-1/2 z-50 rounded-full"></div>
// <div className="absolute w-full h-full bg-red-400" >a</div>