import Header from "../Header";
import { DockDemo } from "../Footer2";
import ChessStatsCard from "../components/ChessStatsCard";
import NowPlaying from "../components/NowPlaying";

export default function Random() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-black dark:text-white italic mb-12">
          random
        </h1>
        <p className="text-black dark:text-white font-medium mb-4">some random things</p>
        <div className="grid grid-cols-1 md:grid-cols-3 items-start">
          <div className="space-y-6">
            <NowPlaying />
          </div>
            <img
              src="/raon.jpeg"
              alt="Raon"
              className="mx-auto rounded-2xl shadow-md w-full max-w-sm mr-2"
            />
          <div className="mt-6 md:mt-0 md:ml-4">
            
        </div>
        </div>
       
      </div>
      <DockDemo />
    </>
  );
}

