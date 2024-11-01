import { Metadata } from "next";
import DOTSCalculator from "../components/dotscalculator";
import NavMenu from "../components/navmenu";
import { allPages } from "../util/helper";

export const metadata: Metadata = {
  title: "DOTS Score",
  description:
    "Calculate DOTS score for powerlifting based on bodyweight, gender and weight lifted.",
  manifest: "/manifest.json",
  themeColor: "#000",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className="w-full flex flex-row justify-between absolute">
        <h1 className="p-8 text-xl font-bold">DOTS Score Calculator</h1>
        <NavMenu items={allPages.filter((page) => page.id !== "dots")} />
      </nav>
      <main className="min-h-screen pb-24">
        <DOTSCalculator />
      </main>
    </div>
  );
}
