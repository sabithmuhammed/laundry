import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontPops } from "@/config/fonts";
import NavBar from "@/components/Common/NavBar";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background antialiased font-pops",
                    fontPops.variable
                )}
            >
                <div className="relative flex flex-col min-h-screen">
                    <NavBar />
                    <main className="w-full   flex-grow">{children}</main>
                    <footer className="w-full flex items-center justify-center py-3">
                        <p className="text-sm font-semibold">CleanPro | 2024</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
