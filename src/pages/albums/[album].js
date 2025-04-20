import "./../../app/globals.css";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "@/components/navigationBar";
import Footer from "@/components/footer";
import Tracklist from "@/components/tracklist";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

function getData() {
    const fileData = require("./../../../public/data/discographyDetails.json"); 
    const data = JSON.parse(JSON.stringify(fileData));
    return data;
}

export async function getStaticPaths() {
    const data = getData().albums;

    const paths = data.filter((album) => album.path).map((album) => ({
        params: {album: album.path}
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const data = getData().albums;
    const album = data.find((album) => album.path === params.album);

    if (!album) {
        return {
            notFound: true
        };
    }

    return {
        props: { album }
    };
}

export default function AlbumPage({album}) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const dateArr = album.releaseDate.split("-");
    let formattedDate = ""
    if (dateArr.length < 3) formattedDate = dateArr[0];
    else formattedDate = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;

    return (
        <div className={poppins.className}>
            <Head>
                <title>{`${album.name} | THE TWO WAYS`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="The Two Ways" />
                <meta name="description" content="Your favourite band's favourite band. Merch store, live dates, discography details all here." />
            </Head>

            <NavigationBar />
            
            <div className="bg-white h-2"></div>
            
            <div className="bg-offblack py-8 md:px-12 max-md:px-4 min-h-svh">
                <div className="text-white pb-4">
                    <p className="text-4xl">{album.name}</p>
                    <p className="md:text-lg max-md:text-md py-2">{`Released ${formattedDate}.`}</p>
                </div>
                
                <Image src={album.coverArt} alt={`${album.name} album art.`} width={300} height={300} className="rounded-lg md:w-[400px] max-md:w-full md:h-[400px] max-md:h-auto"></Image>
                <p className="text-white pt-4 md:text-lg max-md:text-md"><i>Tracklist:</i></p>
                <Tracklist tracks={album.tracks} />

                <div className="flex flex-col space-y-2 text-white md:text-lg max-md:text-md">
                    <p className="pt-2"><i>Description:</i></p>
                    {album.description.map((para, i) => {
                        return (
                            <p key={i} className="" style={{textAlign: "justify"}}>{para}</p>
                        );
                    })}
                </div>
            </div>
            
            <div className="bg-white h-2"></div>

            <Footer />
        </div>
    );
}