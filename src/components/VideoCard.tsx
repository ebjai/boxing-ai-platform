import Image from 'next/image';
import { useState } from 'react';

type Props = {
  id: string;
  title: string;
  channel: string;
  thumb: string;
  href: string;
  duration?: string;
  badge?: string;
};

export default function VideoCard({ id, title, channel, thumb, href, duration, badge }: Props) {
  const [open, setOpen] = useState(false);

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:v=|youtu\.be\/|embed\/|v=)([\w-]{11})/);
    return match ? match[1] : '';
  };
  const videoId = getYouTubeId(href);

  return (
    <div className="group block overflow-hidden rounded-2xl border border-zinc-800/70 bg-white/5 hover:bg-white/10 cursor-pointer relative">
      <div className="relative aspect-video w-full" onClick={() => setOpen(true)}>
        <Image src={thumb} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />
        {duration && <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-xs text-white">{duration}</span>}
        {badge && <span className="absolute left-2 top-2 rounded-md bg-amber-500/90 px-2 py-0.5 text-xs text-black">{badge}</span>}
        <span className="absolute inset-0" />
      </div>
      <div className="space-y-1 px-3 py-3">
        <h3 className="line-clamp-2 text-sm font-medium text-zinc-100">{title}</h3>
        <p className="text-xs text-zinc-400">{channel}</p>
      </div>
      {open && videoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-[1280px] aspect-[16/9] bg-black rounded-xl shadow-2xl border-2 border-blue-500">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="1280"
              height="720"
              className="rounded-xl w-full h-full"
              style={{ minWidth: 320, minHeight: 180 }}
            />
            <button
              className="absolute -top-8 right-0 text-white text-2xl bg-black/60 rounded-full px-3 py-1 hover:bg-blue-600"
              onClick={e => {
                e.stopPropagation();
                setOpen(false);
              }}
              aria-label="Close video"
            >×</button>
          </div>
        </div>
      )}
    </div>
  );
}
