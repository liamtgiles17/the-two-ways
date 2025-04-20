import "./../../app/globals.css";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import Head from "next/head";
import NavigationBar from "@/components/navigationBar";
import Footer from "@/components/footer";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

function getSongs() {
    const fileData = require("./../../../public/data/discographyDetails.json"); 
    const data = JSON.parse(JSON.stringify(fileData));
    let songs = []
    for (let i = 0; i < data.albums.length; i++) {
        for (let j = 0; j < data.albums[i].tracks.length; j++) {
            let track = data.albums[i].tracks[j];
            track = {
                ...track,
                position: j+1,
                album: data.albums[i].name
            };
            songs.push(track);
        }
    }
    return songs;
}

export async function getStaticPaths() {
    const songs = getSongs();

    const paths = songs.filter((song) => song.path).map((song) => ({
        params: {song: song.path}
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const songs = getSongs();
    const song = songs.find((song) => song.path === params.song);

    if (!song) {
        return {
            notFound: true
        };
    }

    return {
        props: { song }
    };
}

export default function TrackPage({song}) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className={poppins.className}>
            <Head>
                <title>{`${song.title} | THE TWO WAYS`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="The Two Ways" />
                <meta name="description" content="Your favourite band's favourite band. Merch store, live dates, discography details all here." />
            </Head>

            <NavigationBar />
            
            <div className="bg-white h-2"></div>
            
            <div className="bg-offblack py-8 md:px-12 max-md:px-4 min-h-svh">
                <div className="text-white pb-4">
                    <p className="text-4xl">{song.title}</p>
                    <p className="md:text-lg max-md:text-md py-2">{`Track ${song.position} from ${song.album}.`}</p>
                    <p className="md:text-lg max-md:text-md py-2">{`Duration: ${song.duration}`}</p>
                    <p className="md:text-lg max-md:text-md py-2"><i>Credits:</i></p>
                    {song.credits.map((credit, i) => {
                        return (
                            <p key={i} className="md:text-lg max-md:text-md py-2">{`${credit.name}: ${credit.role}`}</p>
                        );
                    })}
                </div>
            </div>
                        
            <div className="bg-white h-2"></div>

            <Footer />
        </div>
    );
}