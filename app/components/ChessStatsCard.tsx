'use client';

import { useEffect, useState } from 'react';
import { Loader2, Brain, Crown, Puzzle } from 'lucide-react';

type ChessStats = {
  rapid: number | null;
  puzzle: number | null;
};

export default function ChessStatsCard({ username }: { username: string }) {
  const [stats, setStats] = useState<ChessStats>({ rapid: null, puzzle: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
        const data = await res.json();

        setStats({
          rapid: data.chess_rapid?.last?.rating ?? null,
          puzzle: data.tactics?.highest?.rating ?? null,
        });

        setLoading(false);
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    }

    fetchStats();
  }, [username]);

  return (
    <div className="w-full max-w-sm pl-6 rounded-xl bg-zinc-900 text-white p-5 shadow-md space-y-4 transition-all">
      <h2 className="text-lg font-semibold tracking-tight">live chess rating</h2>

      {loading ? (
        <div className="flex items-center text-zinc-400 text-sm gap-2">
          <Loader2 className="animate-spin w-4 h-4" /> Loading...
        </div>
      ) : (
        <div className="space-y-2 text-sm text-zinc-200">
          <StatLine icon={<Crown className="w-4 h-4 text-indigo-400" />} label="Rapid" value={stats.rapid} />
          <StatLine icon={<Puzzle className="w-4 h-4 text-green-400" />} label="Puzzles" value={stats.puzzle} />
        </div>
      )}
    </div>
  );
}

function StatLine({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | null;
}) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-700 pb-1">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      <span className="font-mono text-white">{value ?? 'N/A'}</span>
    </div>
  );
}
