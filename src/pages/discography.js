import "./../app/globals.css";
import NavigationBar from "@/components/navigationBar.js";
import Footer from "@/components/footer.js";
import Head from "next/head";
import { Poppins } from "next/font/google";
import DiscographyViewer from "@/components/discographyViewer";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

export default function Discography() {
    return (
        <div className={poppins.className}>
            <Head>
                <title>Discography | THE TWO WAYS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="The Two Ways" />
                <meta name="description" content="Your favourite band's favourite band. Merch store, live dates, discography details all here." />
            </Head>

            <NavigationBar />

            <div className="bg-white h-2"></div>
            
            <DiscographyViewer />
            
            <div className="bg-white h-2"></div>

            <Footer />
        </div>
    );
}