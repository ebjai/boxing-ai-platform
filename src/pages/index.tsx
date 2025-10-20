import VideoCard from '../components/VideoCard';
import { videos } from '../data/videos';

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-white mb-4">Liga de Boxeo AI Platform</h1>
        <p className="text-zinc-300">Discover boxing videos, AI-powered insights, and more.</p>
      </section>
      <section>
        <h2 className="section-title">Featured Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(v => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </section>
    </div>
  );
}
