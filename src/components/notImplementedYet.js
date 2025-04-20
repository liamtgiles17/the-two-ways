import "./../app/globals.css";
import Link from "next/link";

export default function NotImplementedYet() {
    return (
        <div className="bg-offblack h-svh w-full flex flex-col space-y-8 items-center justify-center text-white">
            <p className="text-2xl">Not implemented yet.</p>
            <Link href="/"><div className="border-white border-[2px] rounded-lg px-12 py-2 hover:bg-gray-800 hover:underline">
                Go Home
            </div></Link>
        </div>
    );
}