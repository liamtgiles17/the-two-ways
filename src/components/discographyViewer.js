import "./../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import Tracklist from "./tracklist";

export default function DiscographyViewer(props) {
    const fileData = require("./../../public/data/discographyDetails.json"); 
    const data = JSON.parse(JSON.stringify(fileData)).albums;
    
    return (
        <div className="bg-offblack py-8 md:px-12 max-md:px-4" style={!props.numAlbums ? {minHeight: "100vh"} : {}}>
            {!props.numAlbums && 
                <div className="text-white pb-4">
                    <p className="text-4xl">DISCOGRAPHY</p>
                    <p className="md:text-lg max-md:text-md py-2">All our music is documented here. Click on the albums or tracks for more information.</p>
                </div>
            }

            {props.numAlbums && 
                <div className="text-white pb-4">
                    <p className="text-4xl">LATEST RELEASE</p>
                </div>
            }

            <div className="flex flex-col space-y-6">
                {data.reverse().slice(0, props.numAlbums).map((album, i) => {
                    const name = album.name;
                    const releaseDate = album.releaseDate;
                    const dateArr = releaseDate.split("-");
                    let formattedDate = ""
                    if (dateArr.length < 3) formattedDate = dateArr[0];
                    else formattedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
                    const coverArtURL = album.coverArt;
                    const tracks = album.tracks;
                    return (
                        <div key={i}>
                            <div className="flex flex-row space-x-8 pb-6">
                            <Link href={`/albums/${album.path}`}><Image src={coverArtURL} alt={`${name} album art.`} width={300} height={300} className="cursor-pointer rounded-lg md:w-[260px] max-md:w-[180px] md:h-[260px] max-md:h-[180px]"></Image></Link>
                                <div style={{alignSelf: "flex-end"}}>
                                    <Link href={`/albums/${album.path}`}><p className="text-white md:text-6xl max-md:text-2xl md:pb-4 max-md:pb-2 hover:underline cursor-pointer"><b>{name}</b></p></Link>
                                    <p className="text-white md:text-2xl max-md:text-lg">{formattedDate}</p>
                                </div>
                            </div>

                            <Tracklist tracks={tracks} />
                        </div>
                    );
                })}
            </div>

            {props.numAlbums && 
                <div className="text-white pt-4">
                    <p className="hover:underline cursor-pointer md:text-lg max-md:text-md"><i>see the whole discog &rarr;</i></p>
                </div>
            }
        </div>
    );
}