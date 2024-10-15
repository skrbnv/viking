import { MdOutlineEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";


export default function ContactBlock() {
    return (
        <>

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

                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-white"
                    href="https://www.google.com/maps/search/428+Seiberling?entry=gmail&source=g"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="rounded-full p-1.5 bg-white">
                        <IoLocationOutline size={18} color={'black'} />
                    </div>

                    <p className="text-sm">
                        428 Seiberling St<br />
                        Akron OH 44306
                    </p>

                </a>

            </div >

        </>
    )
}