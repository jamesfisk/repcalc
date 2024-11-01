import { Metadata } from "next";
import NavMenu from "../components/navmenu";
import { allPages } from "../util/helper";
import KgConverter from "../components/kgconverter";

export const metadata: Metadata = {
  title: "Convert kg to lbs",
  description:
    "Convert kilograms to pounds or pounds to kilograms with our calculator.",
  manifest: "/manifest.json",
  themeColor: "#000",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className="w-full flex flex-row justify-between absolute">
        <h1 className="p-8 text-xl font-bold">Kg/Lbs Converter</h1>
        <NavMenu items={allPages.filter((page) => page.id !== "kgtolbs")} />
      </nav>
      <main className="min-h-screen pb-24">
        <KgConverter />
      </main>
    </div>
  );
}
