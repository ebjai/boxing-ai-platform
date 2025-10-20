import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black py-4 shadow-md">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-red-600">Liga de Boxeo</a>
        </Link>
        <div className="space-x-4">
          <Link href="/fighters"><a className="text-sm text-zinc-300 hover:text-white">Fighters</a></Link>
          <Link href="/events"><a className="text-sm text-zinc-300 hover:text-white">Events</a></Link>
          <Link href="/news"><a className="text-sm text-zinc-300 hover:text-white">News</a></Link>
        </div>
      </div>
    </nav>
  );
}