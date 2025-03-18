import React from 'react';
import Header from './Header';
import { DockDemo } from './Footer2';
import WordRotate from '@/components/ui/word-rotate';

export default function Home() {
  return (
    <>
     <Header />
     <div className="max-w-3xl mx-auto p-12 text-left">
     <WordRotate
      className="text-8xl text-gray-700 dark:text-white"
      words={["hello", "안녕하세요", "你好", "こんにちは", "bonjour", "ciao"]}
    />
<div className="flex flex-col md:flex-row md:space-x-8 md:gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-grow mb-8 md:mb-0 md:w-2/3">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed space-y-6">
          my name is Benny.
            <br/>
            <br/>
            i'm a 21-year-old software engineer based in <span className="font-semibold">London</span>.
            <br/>
            <br/>
            i'm currently working at <span className="font-semibold">Fifty One Degrees</span>.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            i recently completed my undergrad degree in <span className="font-semibold">Computer Science with AI</span> at <span className="font-semibold">King's College London</span>.
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700 dark:text-gray-300 space-y-2">
            <li>i'm really interested in <span className="font-semibold">data and machine learning</span></li>
            <li>i enjoy <span className="font-semibold">video games</span>, <span className="font-semibold">music</span>, <span className="font-semibold">chess</span>, and <span className="font-semibold">eating good food</span>.</li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">long term, i want to build something <span className="font-semibold">impactful</span> :)</p>
        </div>

        {/* Right Column: Spotify Embed */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            my current work playlist.
          </p>
          <iframe
              src="https://open.spotify.com/embed/playlist/3MsFaIs8y5Ab86JJEXEmEJ?si=f3b1b34dd9ec4486"
              width="100%" 
              className="rounded-lg shadow-lg w-full md:w-[200%]" 
              height="380"
              allow="encrypted-media"
           ></iframe>
        </div>
      </div>
      <DockDemo/>
    </div>
    </>
  );
}