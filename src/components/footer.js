import "./../app/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-offblack text-white w-full">
            <div className="flex flex-col px-8 py-2 space-y-2 items-center justify-center">
                <Link href="https://open.spotify.com/artist/7sBQqUAtZHj9YB7ti8bxM3">
                    <div className="w-[50px] h-[50px] bg-white hover:bg-gray-400 rounded-xl flex items-center justify-center">
                        <Image src="/the-two-ways/spotify.svg" alt="Listen to The Two Ways on Spotify." width={100} height={100} />
                    </div>
                </Link>
                <Link href="#">
                    <p className="text-sm text-center hover:underline cursor-pointer">BACK TO TOP</p>
                </Link>
                <p className="text-sm text-center">© 2025 The Two Ways.</p>
            </div>
        </footer>
    );
}