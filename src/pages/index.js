import "./../app/globals.css";
import { buttonTheme, carouselTheme } from "./../app/flowbiteThemes.js"
import NavigationBar from "@/components/navigationBar.js";
import LiveViewer from "@/components/liveViewer.js";
import Footer from "@/components/footer.js";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { Carousel, Button } from "flowbite-react";
import DiscographyViewer from "@/components/discographyViewer";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

export default function Home() {
    return (
        <div className={poppins.className}>
            <Head>
                <title>THE TWO WAYS | Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="The Two Ways" />
                <meta name="description" content="Your favourite band's favourite band. Merch store, live dates, discography details all here." />
            </Head>

            <NavigationBar />

            <div className="bg-white h-2"></div>

            <div className="bg-offblack md:h-[48rem] max-md:h-[36rem]">
                <Carousel indicators={false} pauseOnHover={true} slideInterval={6000} theme={carouselTheme()} className="w-full">
                    <div className="flex flex-col space-y-4 px-10 py-2 items-center justify-center bg-carousel-live h-full bg-cover bg-center bg-no-repeat">
                        <p className="text-5xl text-white text-center" style={{textShadow: "1px 1px 2px #111"}}>CATCH US LIVE</p>
                        <p className="text-xl text-white text-center" style={{textShadow: "1px 1px 2px #111"}}>*insert upcoming dates here*</p>
                        <Button color="dark" size="sm" theme={buttonTheme()}>Get tickets</Button>
                    </div>
                    
                    <div className="flex flex-col space-y-4 px-10 py-2 items-center justify-center bg-carousel-ep h-full bg-cover bg-center bg-no-repeat">
                        <p className="text-5xl text-white text-center" style={{textShadow: "1px 1px 2px #111"}}>NEW EP OUT NOW</p>
                        <p className="text-xl text-white text-center" style={{textShadow: "1px 1px 2px #111"}}>Available on all streaming services</p>
                        <Button color="dark" size="sm" theme={buttonTheme()}>Browse the discography</Button>
                    </div>
                </Carousel>
            </div>

            <div className="bg-white h-2"></div>

            <LiveViewer numDates={4} />
            
            <div className="bg-white h-2"></div>

            <DiscographyViewer numAlbums={1} />
            
            <div className="bg-white h-2"></div>

            <Footer />
        </div>
    );
}