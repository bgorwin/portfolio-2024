import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function SocialMediaIcons() {
    return (
        <>
            <div className="container flex  align-middle items-center">
                <ul className="flex flex-row flex-wrap gap-3">
                    <li>
                        <Link href="https://www.linkedin.com/in/brent-gorwin-240b62115/">
                            <FaLinkedin className="h-7 w-7 hover:fill-blue-600" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/bgorwin">
                            <FaGithub className="h-7 w-7 hover:fill-gray-600"  />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}