import "./../app/globals.css";
import Link from "next/link";

export default function Tracklist(props) {
    return (
        <div className="flex flex-col space-y-2 py-4 md:px-2 md:text-lg text-white">
            {props.tracks.map((track, j) => {
                const trackName = track.title;
                const duration = track.duration;
                return (
                    <div key={j} className="flex flex-grow items-center justify-between md:px-4 max-md:px-2 py-2 border-[1px] border-gray-300 rounded-lg">
                        <div className="flex flex-row space-x-4 text-left">
                            <div className="md:w-[30px] max-md:w-[20px]">
                                <p><b>{(j+1).toString()}</b></p>
                            </div>
                            <Link href={`/tracks/${track.path}`} ><p className="hover:underline cursor-pointer">{trackName}</p></Link>
                        </div>
                        <p className="text-right pl-3" style={{alignSelf: "flex-start"}}>{duration}</p>
                    </div>
                );
            })}
        </div>
    );
}