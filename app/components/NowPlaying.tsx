'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

type NowPlayingProps = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/spotify/now-playing');
        const data = await res.json();
        setNowPlaying(data);
      } catch (error) {
        console.error('Error fetching now playing:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-64 h-[340px] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center">
        <Loader2 className="animate-spin w-5 h-5 text-gray-400 mb-4" />
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Connecting</p>
      </div>
    );
  }

  const isPlaying = nowPlaying && nowPlaying.isPlaying;

  return (
    <motion.div
      className="w-64 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/20 backdrop-blur-sm shadow-sm transition-all hover:shadow-md flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
     
      <div className="flex items-center justify-between w-full mb-4">
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Spotify</h2>
        <div className={`h-2 w-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`} />
      </div>

     
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-gray-100 dark:bg-gray-800/50 flex items-center justify-center border border-gray-100 dark:border-gray-800">
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="active-art"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <Image
                src={nowPlaying!.albumImageUrl}
                alt={nowPlaying!.album}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center opacity-20"
            >
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.293a.75.75 0 01-1.03.249c-2.811-1.717-6.35-2.103-10.518-1.151a.75.75 0 11-.334-1.462c4.562-1.042 8.484-.593 11.634 1.332a.75.75 0 01.248 1.032zm1.466-3.264a.937.937 0 01-1.288.31c-3.218-1.977-8.125-2.551-11.93-1.397a.938.938 0 11-.54-1.79c4.349-1.32 9.771-.676 13.448 1.58a.937.937 0 01.31 1.297zm.126-3.414c-3.856-2.29-10.215-2.5-13.935-1.372a1.125 1.125 0 01-.652-2.155c4.275-1.299 11.296-1.053 15.754 1.594a1.125 1.125 0 11-1.167 1.933z"/>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     
      <div className="w-full min-h-[60px] flex flex-col items-center text-center">
        {isPlaying ? (
          <>
            <a
              href={nowPlaying!.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-sm text-gray-800 dark:text-gray-200 hover:text-green-500 transition-colors mb-1 line-clamp-1 w-full"
            >
              {nowPlaying!.title}
            </a>
            <p className="text-[11px] font-medium text-gray-400 line-clamp-1 uppercase tracking-tight">
              {nowPlaying!.artist}
            </p>
            {/* Small Visualizer */}
            <div className="flex gap-[2px] h-2 items-end mt-3">
              <motion.span animate={{ height: [2, 8, 2] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-[2px] bg-green-500/60" />
              <motion.span animate={{ height: [8, 3, 8] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-[2px] bg-green-500/60" />
              <motion.span animate={{ height: [4, 8, 4] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-[2px] bg-green-500/60" />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center pt-1">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Not Playing</p>
            <p className="text-[11px] text-gray-300 dark:text-gray-400 font-medium italic">Come back another time...</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}