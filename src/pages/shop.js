import "./../app/globals.css";
import NavigationBar from "@/components/navigationBar.js";
import Footer from "@/components/footer.js";
import NotImplementedYet from "@/components/notImplementedYet";
import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
});

export default function Shop() {
    return (
        <div className={poppins.className}>
            <Head>
                <title>Shop | THE TWO WAYS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="The Two Ways" />
                <meta name="description" content="Your favourite band's favourite band. Merch store, live dates, discography details all here." />
            </Head>

            <NavigationBar />

            <div className="bg-white h-2"></div>

            <NotImplementedYet />

            <div className="bg-white h-2"></div>

            <Footer />
        </div>
    );
}