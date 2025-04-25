import Header from "../Header";
import { DockDemo } from "../Footer2";
import ChessStatsCard from "../components/ChessStatsCard";
import NowPlaying from "../components/NowPlaying";

export default function Random() {
    return (
        <>
        <Header/>
        <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-6xl font-bold text-black dark:text-white italic mb-12">
        random
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">random collection of random things </p>
      <div className="flex flex-row space-x-6 items-start">
        <ChessStatsCard username="ItsBeans" />
        <NowPlaying />
        </div>
    </div>
    <DockDemo/>
      </>
    );
  }