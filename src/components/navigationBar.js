import "./../app/globals.css";
import { drawerTheme } from "./../app/flowbiteThemes.js";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Button, BarsIcon, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";

export default function NavigationBar() {
    const [bigLogoTrigger, bigLogoIsInView] = useInView({threshold: 0, triggerOnce: true});
    const [logoTrigger, logoIsInView] = useInView({threshold: 0, triggerOnce: true});
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

    return (
        <header className="bg-offblack h-24">

            {/* DESKTOP/TABLET */}
            <div className="max-md:hidden h-full items-center flex flex-grow justify-between text-white px-12">
                <div ref={bigLogoTrigger} className={bigLogoIsInView ? "animate-slideInFromLeft" : "opacity-0"}>
                    <Link href="/"><p className="text-4xl text-left text-shadow-xl text-shadow-white cursor-pointer hover:text-gray-400">THE TWO WAYS</p></Link>
                </div>
                <div className="flex lg:space-x-36 max-lg:space-x-12 text-sm text-right">
                    <Link href="/live"><p className="hover:underline cursor-pointer">Live</p></Link>
                    <Link href="/discography"><p className="hover:underline cursor-pointer">Discography</p></Link>
                    <Link href="/shop"><p className="hover:underline cursor-pointer">Shop</p></Link>
                </div>
            </div>

            {/* MOBILE */}
            <div className="md:hidden h-full flex items-center justify-center text-white">
                <Button className="absolute left-4" color="dark" outline size="sm" onClick={() => setIsOpen(true)}>
                    <BarsIcon className="h-6 w-6 text-white" />
                </Button>
                <Drawer open={isOpen} onClose={handleClose} theme={drawerTheme()}>
                    <DrawerHeader title="MENU" />
                    <DrawerItems>
                        <div className="flex flex-col space-y-8 py-4 text-lg text-white">
                            <Link href="/live"><p className="hover:underline cursor-pointer">Live</p></Link>
                            <Link href="/discography"><p className="hover:underline cursor-pointer">Discography</p></Link>
                            <Link href="/shop"><p className="hover:underline cursor-pointer">Shop</p></Link>
                        </div>
                    </DrawerItems>
                </Drawer>

                <div ref={logoTrigger} className={logoIsInView ? "animate-slideInFromLeft" : "opacity-0"}>
                    <Link href="/"><p className="px-20 text-2xl text-left text-shadow-xl text-shadow-white cursor-pointer hover:text-gray-400">THE TWO WAYS</p></Link>
                </div>
            </div>
        </header>
    );
}