import { Metadata } from "next";
import NavMenu from "../components/navmenu";
import { allPages } from "../util/helper";
import OneRmCalculator from "../components/onermcalculator";
import BarbellDiagram from "../components/barbelldiagram";

export const metadata: Metadata = {
  title: "Test",
  description: "test",
  manifest: "/manifest.json",
  themeColor: "#000",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <nav className="w-full flex flex-row justify-between absolute">
        <h1 className="p-8 text-xl font-bold">Test</h1>
        <NavMenu items={allPages.filter((page) => page.id !== "test")} />
      </nav>
      <main className="min-h-screen"></main>
    </div>
  );
}
