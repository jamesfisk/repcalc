import { Metadata } from "next";
import NavMenu from "../components/navmenu";
import { allPages } from "../util/helper";
import PlateLoader from "../components/plateloader";

export const metadata: Metadata = {
    title: 'Barbell Plate Racking Calculator',
    description: 'Calculate the weight of your barbell from the plates loaded on it.',
    manifest: "/manifest.json",
    themeColor: "#000"
}

export default function Home() {
    return (
        <div className="w-full min-h-screen">
            <nav className='w-full flex flex-row justify-between absolute'>
                <div className='flex flex-col'>
                    <h1 className='px-8 pt-6 pb-4 text-xl font-bold'>Compute Barbell Weight</h1>
                    <div className='px-8 -mt-4 text-sm'>Calculate barbell weight from the plates loaded</div>
                </div>
                <div className='flex flex-col justify-center'>
                    <NavMenu items={allPages.filter((page) => page.id !== "platecalculator")} />
                </div>
            </nav>
            <main className="min-h-screen pt-32 pb-24">
                <PlateLoader />
            </main>
        </div>
    )
}
