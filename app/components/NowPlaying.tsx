'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      setLoading(true);
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
      <div className="w-64 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-center text-gray-500 animate-pulse">
        Loading your Spotify...
      </div>
    );
  }

  const isPlaying = nowPlaying && nowPlaying.isPlaying;

  return (
    <motion.div
      className="w-64 p-4 rounded-2xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
        <Image
          src={isPlaying ? nowPlaying!.albumImageUrl : '/placeholder-music.png'}
          alt="Album cover"
          fill
          className="object-cover"
        />
      </div>

      {isPlaying ? (
        <>
          <p className="text-xs text-green-500 mb-1">Now Playing</p>
          <a
            href={nowPlaying!.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center font-semibold text-base text-gray-900 dark:text-white hover:underline mb-1 line-clamp-2"
          >
            {nowPlaying!.title}
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center line-clamp-1">
            {nowPlaying!.artist}
          </p>
        </>
      ) : (
        <>
          <p className="text-xs text-gray-400 mb-1">Not playing right now</p>
          <p className="text-sm text-gray-500 text-center">Spotify</p>
        </>
      )}
    </motion.div>
  );
}
